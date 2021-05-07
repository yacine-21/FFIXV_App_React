import React   from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import lore from "../../Assets/images/lore.jpg"
import boutique from '../../Assets/images/boutique.png'
import lodestone from '../../Assets/images/lodestone.png'

import styles from "./main.module.css";

const main = () => {


  return (
    <>
      <div className={styles.fantome}></div>
      <div className={styles.container}>

        <Card className={styles.card}>
          <Card.Img className={styles.miniature} src={lore} />
          <Card.Body className={styles.bodyCard}>
            <Card.Title className={styles.titleCard}>LORE</Card.Title>
            <Card.Text>
              Discover the history of Final Fantasy XIV, through the 4 main extensions !
            </Card.Text>
            <Button className={styles.buttonCard}>LEARN</Button>
          </Card.Body>
        </Card>

        <Card className={styles.card}>
          <Card.Img className={styles.miniature} src={boutique} />
          <Card.Body className={styles.bodyCard}>
            <Card.Title className={styles.titleCard}>Shop Online</Card.Title>
            <Card.Text>
              Here the Shop Online of Final Fantasy XIV,
              where you can buy items that can help you in the game !
            </Card.Text>
            <a href="https://store.finalfantasyxiv.com/ffxivstore/en-gb/" target="_blank" rel="noopener noreferrer"><Button className={styles.buttonCard}>SHOP</Button></a>
          </Card.Body>
        </Card>

        

        <Card className={styles.card}>
          <Card.Img className={styles.miniature} src={lodestone} />
          <Card.Body className={styles.bodyCard}>
            <Card.Title className={styles.titleCard}>Lodestone</Card.Title>
            <Card.Text>
              The lodestone is the place where you can learn any informations about the games and players !
            </Card.Text>
            <Button className={styles.buttonCard}>Lodestone</Button>
          </Card.Body>
        </Card>

      </div>
    </>
  );
};

export default main;
