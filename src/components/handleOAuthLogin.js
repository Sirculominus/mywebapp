import React, { useEffect } from "react";
import * as Realm from "realm-web";

const HandleOAuthLogin = (props) => {
  useEffect(() => {
    Realm.handleAuthRedirect();
  }, []);

  return (
    <div>
      <p>You are logged in!</p>
    </div>
  );
};

export default HandleOAuthLogin;
