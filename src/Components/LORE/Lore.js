import { useState } from "react";

import { Carousel } from "react-bootstrap";
import styles from "./Lore.module.css";
import Arr from "../../Assets/images/arr.png";
import Hv from "../../Assets/images/hv.png";
import Sb from "../../Assets/images/sb.png";
import Shb from "../../Assets/images/shb.png";
import Ew from "../../Assets/images/Ew.png";
import vSb from "../../Assets/videos/sb.mp4"

const Lore = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("A REALM REBORN");

  const onSelectHandler = (e) => {
    console.log(e);
    setIndex(e);
    switch (index) {
      case 0:
        setText("HEAVENSWARD");
        break;
      case 1:
        setText("SB");
        break;
      case 2:
        setText("SHW");
        break;
      case 3:
        setText("EW");
        break;
      case 4:
        setText("A REALM REBORN");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.fantome}></div>
      <div className={styles.container}>
        <h1>LORE</h1>
        <Carousel
          controls={true}
          onSelect={onSelectHandler}
          indicators={true}
          keyboard={true}
          touch={true}
          slide={true}
          className={styles.carousel}
        >
          <Carousel.Item interval={5000}>
            <img className={styles.carouselImage} src={Arr} alt="First slide" />
            <Carousel.Caption className={styles.item}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className={styles.carouselImage} src={Hv} alt="second slide" />
            <Carousel.Caption className={styles.item}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className={styles.carouselImage} src={Sb} alt="third slide" />
            <Carousel.Caption className={styles.item}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className={styles.carouselImage}
              src={Shb}
              alt="fourth slide"
            />
            <Carousel.Caption className={styles.item}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className={styles.carouselImage} src={Ew} alt="five slide" />
            <Carousel.Caption className={styles.item}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <video src={vSb} autoPlay loop className={styles.carouselImage}></video>
            <Carousel.Caption className={styles.item}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Lore;
