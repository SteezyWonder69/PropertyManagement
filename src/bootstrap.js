import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";

import requireAuth from "./components/requireAuth";
import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin";

import Dashboard from "./components/dashboard";
import NewNewsletter from "./components/newsletter/newsletterNes";






function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={Signin} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            
            <Route path='/dashboard' component={requireAuth(Dashboard)} />
            <Route path='/newsletter/new' component={requireAuth(NewNewsletter)} />
          </Layout>
        </Switch>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
