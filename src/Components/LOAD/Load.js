import { useHistory } from "react-router-dom";

import styles from "./load.module.css";
import team from "../../Assets/images/team.png";

const Load = () => {
  const history = useHistory();

  // HANDLER FUNCTIONS

  const onClickHandler = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <div className={styles.body}>
      <div className={styles.blocOne}>
        <h1 className={styles.title}>FINAL FANTASY XIV -- MMORPG</h1>
      </div>
      <div className={styles.blocTwo}>
        <h2>DO YOU WANT TO KNOW MORE ABOUT THIS GAME...?</h2>
        <p>It's pretty simple just click the bouton bellow !</p>
        <button onClick={onClickHandler} className={styles.btn}>
          Click here !
        </button>
      </div>
      <img src={team} alt="team" />
    </div>
  );
};

export default Load;
