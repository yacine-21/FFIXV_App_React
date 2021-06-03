import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { testCreateAccount } from "../../Services/getData";

import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const history = useHistory();

  const [isAccountCreate, setIsAccountCreate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isErrorOnCreateAccount = async () => {
    setIsAccountCreate(await testCreateAccount(name, password, email));
  };

  const onChangeHandlerName = (e) => {
    setName(e.target.value);
  };

  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickHandler = async () => {
    setIsAccountCreate(await testCreateAccount(name, password, email));
    if (isAccountCreate) {
      if (isAccountCreate.message.includes("Email")) {
        console.log(isAccountCreate.message);
        alert(isAccountCreate.message);
        console.log("passed here");
      } else {
        console.log(isAccountCreate.message);
        alert(isAccountCreate.message);
        history.push("/login");
      }
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.fantome}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>CREATE AN ACCOUNT </h1>
        <form className={styles.form}>
          <div className={styles.form_bloc}>
            <label htmlFor="name">Name : </label>
            <input
              value={name}
              onChange={onChangeHandlerName}
              autoComplete="username"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name ..."
              required
            />
          </div>
          <div className={styles.form_bloc}>
            <label htmlFor="email">Email : </label>
            <input
              value={email}
              onChange={onChangeHandlerEmail}
              type="email"
              autoComplete="email"
              name="email"
              id="email"
              placeholder="Enter your email ..."
              required
            />
          </div>
          <div className={styles.form_bloc}>
            <label htmlFor="password">Password : </label>
            <input
              value={password}
              onChange={onChangeHandlerPassword}
              autoComplete="current-password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password ..."
              required
              onBlur={isErrorOnCreateAccount}
            />
          </div>
          <div>
            <input
              className={styles.submit}
              onClick={onClickHandler}
              type="button"
              value="Create !"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateAccount;
