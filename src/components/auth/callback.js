import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
//import { push } from "react-router-redux";
import userManager from "../utils/userManager";
//import { useHistory } from 'react-router-dom';
import { Loading } from "@control";
import Loadable from "react-loadable";

import Layout  from "../../layout";

// const Layout = Loadable({
//   loader: () => import(/* webpackChunkName: "Layout" */ "../../layout"),
//   loading: () => <Loading />,
//   webpack: () => [require.resolveWeak("../../layout")],
//   modules: [path.join(__dirname, "../../layout")],
// });
class CallbackPage extends React.Component {
  render() {
    // just redirect to '/' in both cases
    return (
      // <iframe src="https://localhost:5001/" title="W3Schools Free Online Web Tutorials"></iframe>
      <CallbackComponent
        userManager={userManager}
        successCallback={user => {
          this.props.history.push("/");
          // localStorage.removeItem("Treeview")
          // localStorage.setItem("Treeview","init")
        }}
        errorCallback={error => {
          console.error(error);
          this.props.history.push("/");
          // localStorage.removeItem("Treeview")
          // localStorage.setItem("Treeview","init")
        }}>
        <Layout  />
      </CallbackComponent>
    );
  }
}

export default connect()(CallbackPage);
