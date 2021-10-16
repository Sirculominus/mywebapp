import React from "react";
import * as Realm from "realm-web";
import { useForm } from "react-hook-form";

const Signup = ({ props, user }) => {
  const REALM_APP_ID = "mywebapp-wojux";
  const app = new Realm.App({ id: REALM_APP_ID });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerEmailPassword(data.email, data.password);
  };
  console.log(watch("example"));

  const registerEmailPassword = async (email, password) => {
    await app.emailPasswordAuth.registerUser(email, password);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="email"
            {...register("email", { required: true })}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 7,
                message:
                  "Too short password. Please use more than 7 characters.",
              },
            })}
          />
          {/* errors will return when field validation fails  */}
          <p>{errors.password?.message}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
