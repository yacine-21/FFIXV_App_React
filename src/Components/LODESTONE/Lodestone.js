import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import styles from "./lodestone.module.css";
import lore from "../../Assets/images/lore.jpg";
import caracter from "../../Assets/images/search_caracter.jpg";
import patchLists from "../../Assets/images/patchList.jpg";

const Lodestone = () => {
  const history = useHistory();

  // HANDLER FUNCTIONS

  const onClickDeepDungeonHandler = () => {
    history.push("deepDungeon");
  };

  const onClickSearchPlayerHandler = () => {
    history.push("searchPlayer");
  };

  const onClickPatchListHandler = () => {
    history.push("/patchList");
  };

  return (
    <>
      <div className={styles.fantome}></div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <Card className={styles.card}>
            <Card.Img className={styles.miniature} src={lore} />
            <Card.Body className={styles.bodyCard}>
              <Card.Title className={styles.titleCard}>DEEP DUNGEON</Card.Title>
              <Card.Text>
                Discover the deep dungeon a great way to train classes and level
                up jour jobs !
              </Card.Text>
              <Button
                onClick={onClickDeepDungeonHandler}
                className={styles.buttonCard}
              >
                LEARN
              </Button>
            </Card.Body>
          </Card>

          <Card className={styles.card}>
            <Card.Img className={styles.miniature} src={caracter} />
            <Card.Body className={styles.bodyCard}>
              <Card.Title className={styles.titleCard}>PLAYER</Card.Title>
              <Card.Text>
                Click here if you search informations about a player ...
              </Card.Text>
              <Button
                onClick={onClickSearchPlayerHandler}
                className={styles.buttonCard}
              >
                Search
              </Button>
            </Card.Body>
          </Card>

          <Card className={styles.card}>
            <Card.Img className={styles.miniature} src={patchLists} />
            <Card.Body className={styles.bodyCard}>
              <Card.Title className={styles.titleCard}>FF PATCH</Card.Title>
              <Card.Text>
                Click here if you want to read every patchlist and changes ...
              </Card.Text>
              <Button
                onClick={onClickPatchListHandler}
                className={styles.buttonCard}
              >
                Patch list
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Lodestone;
