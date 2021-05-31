/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Card } from "react-bootstrap";

import styles from "./deepDungeon.module.css";
import { sendDeepDungeonOne, sendDeepDungeonTwo } from "../../Services/getData";

const deepDungeon = () => {
  const [resultOne, setResultOne] = useState();
  const [resultTwo, setResultTwo] = useState();
  const [click, setClick] = useState(false);

  const onClickHandlerDeepDungeon = async () => {
    setClick(true);
    setResultOne(await sendDeepDungeonOne());
    setResultTwo(await sendDeepDungeonTwo());
  };

  const onClickHandlerDeepDungeonHide = () => {
    setClick(false);
  };
  if (resultTwo !== undefined && click === true) {
    console.log(resultTwo);
    console.log(`https://xivapi.com${resultTwo.Results[0].Name.IconHD}`);
  }

  return (
    <>
      <div className={styles.fantome}></div>
      <div className={styles.container}>
        <h1>DeepDungeon</h1>
        {click === false ? (
          <button
            className={styles.buttonCardShow}
            onClick={onClickHandlerDeepDungeon}
          >
            SHOW DEBUFF
          </button>
        ) : null}
        <ul>
          <li>The Palace of the Dead 1 - 60</li>
          <li>DEBUFF : DeepDungeonBan</li>
          <li> brume du néant :DeepDungeonDanger/1</li>
          {click === true ? (
            resultOne === undefined ? null : (
              <div className={styles.allResults}>
                {resultOne.Results.map((danger) => {
                  return (
                    <ul key={danger.ID}>
                      <>
                        <Card className={styles.card}>
                          <Card.Img
                            className={styles.miniature}
                            src={`https://xivapi.com${danger.Name.IconHD}`}
                          />
                          <Card.Body className={styles.bodyCard}>
                            <Card.Title>
                              {<li>{danger.Name.Name_en}</li>}
                            </Card.Title>
                            <Card.Text>
                              <li>{danger.Name.Description_en}</li>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </>
                    </ul>
                  );
                })}
                {resultTwo === undefined ? (
                  "UNDEFINED"
                ) : (
                  <Card className={styles.card}>
                    <Card.Img
                      className={styles.miniature}
                      src={`https://xivapi.com${resultTwo.Results[0].Name.IconHD}`}
                    />
                    <Card.Body className={styles.bodyCard}>
                      <Card.Title>
                        {<li>{resultTwo.Results[0].Name.Name_en}</li>}
                      </Card.Title>
                      <Card.Text>
                        <li>{resultTwo.Results[0].Name.Description_en}</li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </div>
            )
          ) : null}
          <li>Poterie : DeepDungeonItem</li>
        </ul>
        <ul>
          <li>Heaven on High 60 - 70</li>
          <li>deepDungeonstatus buff et debuff</li>
          <li>magic stone : DeepDungeonMagicStone </li>
          <li>DeepDungeonItem : poterie</li>
        </ul>
        {click === true ? (
          <button
            className={styles.buttonCardShow}
            onClick={onClickHandlerDeepDungeonHide}
          >
            HIDE DEBUFF
          </button>
        ) : null}
      </div>
    </>
  );
};

export default deepDungeon;
