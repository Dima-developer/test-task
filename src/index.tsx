import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppStateProvider} from "./AppContext"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import PrivatePage from "./pages/privatePage";
import LoginPage from "./pages/loginPage";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <BrowserRouter>
        <App>
          <Switch>
            <Route  path="/" exact component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/private" component={PrivatePage}/>
          </Switch>
        </App>
      </BrowserRouter>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

