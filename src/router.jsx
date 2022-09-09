// redux
import CallbackPage from './components/auth/callback';
import LogoutCallbackPage from './components/auth/logoutCallback';
import Splash from "./components/ui/Splash";
import path from "path";
import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, StaticRouter, Switch } from "react-router-dom";


const Layout = Loadable({
  loader: () => import(/* webpackChunkName: "Layout" */ "./layout"),
  loading: () => <Splash />,
  webpack: () => [require.resolveWeak("./layout")],
  modules: [path.join(__dirname, "./layout")],
});

const ConfigRouter = () => {
  const router = (
    <Switch>
      <Route exact={true} path="/signin-oidc" render={props => <CallbackPage {...props}/>} />
      <Route exact={true} path="/logout/callback" render={props =><LogoutCallbackPage {...props}/>} />
      <Route path="/" render={props => <Layout {...props}  />} />
    </Switch>
  );

  if (typeof window === "undefined") {
    return <StaticRouter>{router}</StaticRouter>;
  } else {
    return <Router basename="/">{router}</Router>;
  }
};

export default ConfigRouter;
