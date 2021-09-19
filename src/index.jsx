import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const rootElement = document.getElementById('root');
const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});
ReactDOM.render(
  <Router history={customHistory}>
    <Route
      component={({ history }) => {
        window.appHistory = history;
        return <App />;
      }}
    />
  </Router>,
  rootElement
);
