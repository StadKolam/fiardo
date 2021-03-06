import React, { Suspense, useEffect, lazy } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import HomeIcon from './components/home-icon/home-icon.component';
import Controller from './components/controller/controller.component';
import useHomeStore from './zustand/home-page-store';

import HomePage from './pages/home-page/home-page.component';
import Spinner from './components/spinner/spinner.component';

const RecordPage = lazy(() => import('./pages/record-page/record-page.component'));

const ComingSoonPage = lazy(() => import('./pages/coming-soon-page/coming-soon-page.component'));

const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'));

const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
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

        <Route exact path='/' render={() => <HomePage pageType={'home-page'} instructionText={'home-page'} mainIntro={true} />} />
        <HomeIcon>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path='/record'
              render={() =>
                user ? (
                  <RecordPage instructionText={'record-page'} pageType={'record-page'} />
                ) : (
                  <Redirect to='/sign-in-sign-up' />
                )
              }
            />
            <Route exact path="/sign-in-sign-up" component={SignInAndSignUpPage} />
            <Route exact path='/about-page' render={() => <AboutPage />} />
            <Route exact path="/f-page" render={() => <ComingSoonPage />} />
            <Route exact path="/i-page" render={() => <ComingSoonPage />} />
            <Route exact path="/o-page" render={() => <ComingSoonPage />} />
            <Route exact path="/d-page" render={() => <ComingSoonPage />} />
          </Suspense>
        </HomeIcon >
      </Switch>
      {location.pathname === '/' && <Controller />}


    </>
  );
};

export default withRouter(App);
