import React from "react";
import * as Realm from "realm-web";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const assert = require("assert");

const Login = ({ props, setUser, user, login }) => {
  const REALM_APP_ID = "mywebapp-wojux";
  const app = new Realm.App({ id: REALM_APP_ID });

  // The redirect URI should be on the same domain as this app and
  // specified in the auth provider configuration.
  const redirectUri =
    "https://mywebapp-wojux.mongodbstitch.com/handleoauthlogin";
  const credentialsGoogle = Realm.Credentials.google(redirectUri);
  const credentialsFacebook = Realm.Credentials.facebook(redirectUri);

  const loginGoogle = async () => {
    // Calling logIn() opens a Google authentication screen in a new window.
    app.logIn(credentialsGoogle).then((user) => {
      // The logIn() promise will not resolve until you call `handleAuthRedirect()`
      // from the new window after the user has successfully authenticated.
      console.log(`Logged in with id: ${user.id}`);
      login({ ...user, isLoggedIn: true });
    });
    // When the user is redirected back to your app, handle the redirect to
    // save the user's access token and close the redirect window. This
    // returns focus to the original application window and automatically
    // logs the user in.
    Realm.handleAuthRedirect();
  };

  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    login(user);
  };

  const loginFaceBook = async () => {
    // Calling logIn() opens a Facebook authentication screen in a new window.
    app.logIn(credentialsFacebook).then((user) => {
      // The logIn() promise will not resolve until you call `handleAuthRedirect()`
      // from the new window after the user has successfully authenticated.
      console.log(`Logged in with id: ${user.id}`);
      login({ ...user, isLoggedIn: true });
    });
    // When the user is redirected back to your app, handle the redirect to
    // save the user's access token and close the redirect window. This
    // returns focus to the original application window and automatically
    // logs the user in.
    Realm.handleAuthRedirect();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginEmailPassword(data.email, data.password);
  };
  console.log(watch("example"));

  const loginEmailPassword = async (email, password) => {
    // Create an anonymous credential
    const credentialsEmailPassword = Realm.Credentials.emailPassword(
      email,
      password
    );
    try {
      // Authenticate the user
      const user = await app.logIn(credentialsEmailPassword);
      // `App.currentUser` updates to match the logged in user
      assert(user.id === app.currentUser.id);
      return user;
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };

  /*
  const registerEmailPassword = async (email, password) => {
    await app.emailPasswordAuth.registerUser(email, password);
  };
  */
  return (
    <div>
      {user.isLoggedIn ? (
        <p>Logged in</p>
      ) : (
        <div>
          <div>
            <button
              className="col-lg-6 col-md-6 col-xs-12 col-sm-6 btn btn-block btn-social btn-facebook"
              onClick={loginFaceBook}
            >
              Sign in with Facebook
            </button>
          </div>
          <div>
            <button
              className="col-lg-6 col-md-6 col-xs-12 col-sm-6 btn btn-block btn-social btn-google"
              onClick={loginGoogle}
            >
              Sign in with Google
            </button>
            <i className="fa fa-google-plus"></i>
          </div>
          <button onClick={loginAnonymous}>Login anonymously</button>
          <h2>or</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              placeholder="email"
              {...register("email", { required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              placeholder="password"
              {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
          </form>
          <Link to={"/signup"} className="nav-link">
            Sign up!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
