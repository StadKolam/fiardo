import React, { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { Auth } from 'aws-amplify';
import useHomeStore from '../../zustand/home-page-store';
import './sign-in.styles.scss';
import Spinner from '../spinner/spinner.component';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, noReqSignIn } = useHomeStore()
  const [inProgress, setLoading] = useState(false)

  useEffect(() => {
    return () => {
      setEmail(); // This worked for me
      setPassword()
    };
  }, []);

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();

    try {
      let user = await Auth.signIn(email, password);
      setUser(user);
      setEmail('');
      setPassword('');
      noReqSignIn();

      window.appHistory.push('/');
    } catch (e) {
      alert(e.message);
    }
    setLoading(false)
  };

  return (


    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="under-title">Sign in with your email and password</span>
      {
        inProgress ?

          <Spinner /> :
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="password"
              required
            />
            <div className="buttons">
              <CustomButton type="submit"> Sign in </CustomButton>
            </div>
          </form>
      }
    </div>
  );
};

export default SignIn;