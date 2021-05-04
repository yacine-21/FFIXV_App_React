import {useHistory} from "react-router-dom";


import styles from "./Home.module.css";
import slogan from "../../Assets/images/slogan.png";

const Home = () => {

    const history = useHistory();

    const onClickHandler = () => {
            history.push("/createAccount")
    }

    return(
        <>
            <div className={styles.fantome}></div>
            <div className={styles.container}>
                <img src={slogan} alt="slogan" className={styles.slogan}/>
                <div className={styles.textes}>
                    <p onClick={onClickHandler} className={styles.subtitle}>Please make sure to create an account first in order to access our website !</p>
                </div>
            </div>
        </>
    )
}

export default Home;