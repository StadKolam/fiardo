import React, { useEffect, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import RecordPage from './pages/record-page/record-page.component';
import ComingSoonPage from './pages/coming-soon-page/coming-soon-page.component';
import HomePage from './pages/home-page/home-page.component';
import useHomeStore from './zustand/home-page-store';
import AboutPage from './pages/about-page/about-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page_copy/sign-in-and-sign-up-component';
import HomeIcon from './components/home-icon/home-icon.component';
import Controller from './components/controller/controller.component';

const App = ({ location }) => {
  const { user, setUser } = useHomeStore();
  useEffect(() => {
    async function fetchUser() {
      try {
        let user = await Auth.currentAuthenticatedUser();

        if (user) {
          setUser(user.username);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchUser();
  }, [setUser]);



  return (
    <>
      <Switch>

        <Route exact path='/' render={() => <HomePage pageType={'home-page'} />} />
        <HomeIcon>
          <Route exact path='/record' render={() => <RecordPage instructionText={'record-page'} pageType={'record-page'} />} />
          <Route exact path="/sign-in-sign-up" component={SignInAndSignUpPage} />
          <Route exact path='/about-page' render={() => <AboutPage />} />
          <Route exact path="/f-page" render={() => <ComingSoonPage instructionText={'majooom'} />} />
          <Route exact path="/i-page" component={ComingSoonPage} />
          <Route exact path="/o-page" component={ComingSoonPage} />
          <Route exact path="/d-page" component={ComingSoonPage} />
        </HomeIcon >
      </Switch>
      {location.pathname == '/' && <Controller />}


    </>
  );
};

export default withRouter(App);
