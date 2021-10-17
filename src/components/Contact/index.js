import React, { useState } from "react";
// Styles
import { Wrapper, Content, ResponseMessage } from "./Contact.styles";
// Forms
import { useForm } from "react-hook-form";
// MongoDB Realm
import * as Realm from "realm-web";

const Contact = ({ darkMode }) => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(null);
  const onSubmit = (data) => {
    setResult(data);
    run(data.subject, data.message, data.firstName, data.lastName, data.email)
      .then(() => {
        console.log("Email sent");
      })
      .catch(console.dir);
  };

  const appId = process.env.REACT_APP_REALM_APP_ID;
  const appConfig = {
    id: appId,
    url: "https://realm-dev.mongodb.com",
    timeout: 1000,
  };

  async function run(subject, text, firstname, lastname, mail) {
    let user;
    try {
      const app = new Realm.App(appConfig);
      const credentials = Realm.Credentials.anonymous();
      user = await app.logIn(credentials);

      const numA = 2;
      const numB = 3;

      const result = await user.functions.SendMail(
        subject,
        text,
        firstname,
        lastname,
        mail
      );
      console.log(
        `Using the "functions.sum()" method: the sum of ${numA} + ${numB} = ${result}`
      );
    } finally {
      user.logOut();
    }
  }

  return (
    <Wrapper darkMode={darkMode}>
      <Content>
        {result ? (
          <>
            <ResponseMessage>Thank you for your message!</ResponseMessage>
            <button onClick={() => setResult(false)}>
              Write a new message
            </button>
          </>
        ) : (
          <>
            <h1>Contact me!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName")} placeholder="First name" />
              <input {...register("lastName")} placeholder="Last name" />
              <input {...register("email")} placeholder="Email" />
              <input {...register("subject")} placeholder="Subject" />
              <textarea {...register("message")} placeholder="Message" />
              <input type="submit" />
            </form>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Contact;
