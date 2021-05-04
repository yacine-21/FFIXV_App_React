
import styles from './Login.module.css'

const Login = () => {
    return(
        <>
            <div className={styles.fantome}></div>
            <div className={styles.container}>
                <h1>Enregistrement du joueur ...</h1>
                <form class="form">
                    <div class="form-example">
                        <label for="name">Enter your name: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div class="form-example">
                        <label for="email">Enter your email: </label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div class="form-example">
                        <input type="submit" value="Subscribe!"/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;