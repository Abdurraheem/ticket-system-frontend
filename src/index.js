import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import TableList from "views/TableList";
import Forms from "./views/ManageUsers/Forms"
import {history} from "./history"
import Auth from "./hoc/auth";
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(

  <BrowserRouter history={history}>
    <Switch>
      
      <Provider
        store={createStoreWithMiddleware(
          Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
      >
        
        <Route exact path="/" component={LoginPage}/>
        
        <Route exact path="/register" component={RegisterPage}/> 
        <Route path="/admin"  component={Auth(AdminLayout)} />
        
        {/* <Route path="/admin"  render={props => <AdminLayout {...props} />} /> */}
      
      </Provider>
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
