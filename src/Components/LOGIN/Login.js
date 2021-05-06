import React,{useState} from 'react'
import {useHistory} from "react-router-dom"

import styles from './Login.module.css'

const Login = () => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeHandlerName = (e) => {
        setName(e.target.value)
    }

    const onChangeHandlerPassword = (e) => {
        setPassword(e.target.value)
    }



    const onClickHandler = (e) => {
        console.log("I'm Logged in");
        history.push("/main");
        
    }

    return(
        <div className={styles.section}>
            <div className={styles.fantome}></div>
            <div className={styles.container}>
                <h1 className={styles.title}>LOGIN </h1>
                <form className={styles.form}>
                    <div className={styles.form_bloc}>
                        <label htmlFor="name">Name : </label>
                        <input
                            onChange={onChangeHandlerName}
                            value={name}
                            autoComplete="username"
                            type="text"
                            name="name"
                            id="name" 
                            placeholder="Enter your name ..." 
                            required
                        />
                    </div>
                    <div className={styles.form_bloc}>
                        <label htmlFor="email">PASSWORD : </label>
                        <input
                            onChange={onChangeHandlerPassword}
                            value={password}
                            autoComplete='current-password' 
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
                            type="submit" 
                            value="Login !"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;