import React from "react";
import { connect } from "react-redux";
import { SignoutCallbackComponent } from "redux-oidc";
//import { push } from "react-router-redux";
import userManager from "../utils/userManager";
//import { useHistory } from 'react-router-dom';
import { Loading } from "@control";

class CallbackPage extends React.Component {
  render() {
    // just redirect to '/' in both cases
    return (
      <SignoutCallbackComponent
        userManager={userManager}
        successCallback={() => {
          //console.log("callback user:", user)
          this.props.history.push("/");
          localStorage.removeItem("Treeview");
          localStorage.setItem("Treeview", "init");
        }}
        errorCallback={error => {
          console.error(error);
          this.props.history.push("/");
          localStorage.removeItem("Treeview");
          localStorage.setItem("Treeview", "init");
        }}>
        <Loading />
      </SignoutCallbackComponent>
    );
  }
}

export default connect()(CallbackPage);
