import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Cards from './pages/Cards';
import Audits from './pages/Audits';
import SingleUserData from './pages/SingleUserData';
import SingleCardData from './pages/SingleCardData';
import SingleAuditData from './pages/SingleAuditData';
import ErrorPage from './pages/ErrorPage';

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/esqueci-minha-senha" component={ForgotPassword} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/usuarios" component={Users} />
          <Route exact={true} path="/cartoes" component={Cards} />
          <Route exact={true} path="/auditoria" component={Audits} />
          <Route exact={true} path="/audit_:id" component={SingleAuditData} />
          <Route exact={true} path="/card_:id" component={SingleCardData} />
          <Route exact={true} path="/:id" component={SingleUserData} />
          
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
