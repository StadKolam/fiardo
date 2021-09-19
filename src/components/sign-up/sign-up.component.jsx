import React, { useState } from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { Auth } from 'aws-amplify';

import './sign-up.styles.scss';
import Spinner from '../spinner/spinner.component';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [verCode, setVerCode] = useState('');
  const [verify, setVerify] = useState(false);
  const [inProgress, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("passwords don't match");
      return;
    }
    try {
      await Auth.signUp(email, password);

      setPassword('');
      setPasswordConfirm('');
      setVerify(true);
    } catch (e) {
      alert(e.message);
    }


  };
  const handleVerify = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      //await auth.signInWithEmailAndPassword(email, password);
      //await Auth.signUp(email, password);
      await Auth.confirmSignUp(email, verCode);
      console.log(email, verCode);
      setEmail('');
      setVerCode('');
      setVerify(false);
    } catch (e) {
      alert(e.message);
    }
    setLoading(false)
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {
        inProgress ?
          <Spinner /> :
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="email"
              required
            />
            {verify ? (
              <FormInput
                name="verCode"
                type="text"
                value={verCode}
                onChange={(e) => setVerCode(e.target.value)}
                label="Verification code"
                required
              />
            ) : (
              <>
                <FormInput
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="password"
                  required
                />
                <FormInput
                  name="password"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  label="password Confirm"
                  required
                />
              </>
            )}
            <div className="buttons">
              {!verify ? (
                <CustomButton type="submit"> Sign up </CustomButton>
              ) : (
                <CustomButton onClick={handleVerify}>Verify</CustomButton>
              )}
            </div>
          </form>
      }
    </div>
  );
};

export default SignUp;
