import React,{useState} from 'react'
import {useHistory} from "react-router-dom"

import styles from './CreateAccount.module.css'

const CreateAccount = () => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onChangeHandlerName = (e) => {
        setName(e.target.value)
    }

    const onChangeHandlerEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeHandlerPassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeHandlerPassword2 = (e) => {
        setPassword2(e.target.value)
    }

    const onClickHandler = () => {
        console.log('passed here');
        alert("Account creation successfully !")
        history.push("/login")
    }

    
    return(
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
                            autoComplete='current-password' 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter your password ..." 
                            required
                        />
                    </div>
                    <div className={styles.form_bloc}>
                        <label htmlFor="Confirm password">Confirm password : </label>
                        <input
                            value={password2}
                            onChange={onChangeHandlerPassword2}
                            autoComplete='current-password' 
                            type="password" 
                            name="Confirm password" 
                            id="Confirm password" 
                            placeholder="confirm your password ..." 
                            required
                        />
                    </div>
                    <div>
                        <input className={styles.submit} 
                            onClick={onClickHandler}
                            type="submit" 
                            value="Create !"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateAccount;