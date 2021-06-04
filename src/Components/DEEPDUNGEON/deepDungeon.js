/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Card } from "react-bootstrap";

import styles from "./deepDungeon.module.css";
import {
  sendDeepDungeonOne,
  sendDeepDungeonTwo,
  getPommander,
} from "../../Services/getData";

const deepDungeon = () => {
  // STATES

  const [resultOne, setResultOne] = useState();
  const [resultTwo, setResultTwo] = useState();
  const [resultThree, setResultThree] = useState();
  const [clickOne, setClickOne] = useState(false);
  const [clickTwo, setClickTwo] = useState(false);

  // HANDLER FUNCTIONS

  const onClickHandlerDeepDungeon = async () => {
    setClickOne(true);
    setResultOne(await sendDeepDungeonOne());
    setResultTwo(await sendDeepDungeonTwo());
  };

  const onClickPommander = async () => {
    setClickTwo(true);
    setResultThree(await getPommander());
  };

  const onClickHandlerDeepDungeonHide = () => {
    setClickOne(false);
    setClickTwo(false);
  };

  return (
    <>
      <div className={styles.fantome}></div>
      <div className={styles.container}>
        <h1>DeepDungeon</h1>
        {clickOne === false ? (
          <>
            <button
              className={styles.buttonCardShow}
              onClick={onClickHandlerDeepDungeon}
            >
              SHOW DEBUFF
            </button>
            <button
              className={styles.buttonCardShow}
              onClick={onClickPommander}
            >
              SHOW Pommander
            </button>
          </>
        ) : null}

        {clickOne === true ? (
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

        {clickTwo === true ? (
          resultThree === undefined ? null : (
            <div className={styles.allResults}>
              {resultThree.Results.map((pommander) => {
                return (
                  <ul key={pommander.ID}>
                    <>
                      <Card className={styles.cardOne}>
                        <Card.Img
                          className={styles.miniature}
                          src={`https://xivapi.com${pommander.Icon}`}
                        />
                        <Card.Body className={styles.bodyCard}>
                          <Card.Title>{<li>{pommander.Name}</li>}</Card.Title>
                          <Card.Text>
                            <li>{`https://xivapi.com${pommander.Url}`}</li>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </>
                  </ul>
                );
              })}
            </div>
          )
        ) : null}

        {clickOne === true || clickTwo ? (
          <button
            className={styles.buttonCardShow}
            onClick={onClickHandlerDeepDungeonHide}
          >
            HIDE RESULTS
          </button>
        ) : null}
      </div>
    </>
  );
};

export default deepDungeon;
