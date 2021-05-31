/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { testLogin } from "../../Services/getData";

import styles from "./Login.module.css";

const Login = () => {
  const history = useHistory();

  const [isAuth, setIsAuth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return async () => {
      setIsAuth(await testLogin(email, password));
    };
  }, [email, password]);

  const isError = async () => {
    setIsAuth(await testLogin(email, password));
  };

  const onChangeHandlerEmail = async (e) => {
    setEmail(e.target.value);
  };

  const onChangeHandlerPassword = async (e) => {
    setPassword(e.target.value);
  };

  const onClickHandler = async (e) => {
    console.log("I'm Logged in");
    await testLogin(email, password);
    setIsAuth(await testLogin(email, password));

    if (isAuth.token) {
      history.push("/main");
    } else {
      {
        isAuth.Error === undefined
          ? alert("Something went wrong ... Please Retry")
          : alert(isAuth.Error);
      }
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.fantome}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>LOGIN </h1>
        <form className={styles.form}>
          <div className={styles.form_bloc}>
            <label htmlFor="email">Email : </label>
            <input
              onChange={onChangeHandlerEmail}
              onSelect={isError}
              onFocus={isError}
              onBlur={isError}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email ..."
              required
            />
          </div>
          <div className={styles.form_bloc}>
            <label htmlFor="password">PASSWORD : </label>
            <input
              onChange={onChangeHandlerPassword}
              onSelect={isError}
              onFocus={isError}
              onBlur={isError}
              value={password}
              autoComplete="current-password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password ..."
              required
            />
          </div>
          <div>
            <input
              onClick={onClickHandler}
              className={styles.submit}
              type="button"
              value="Login !"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
