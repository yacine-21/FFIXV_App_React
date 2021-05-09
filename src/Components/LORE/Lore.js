/* eslint-disable jsx-a11y/anchor-has-content */
import { useState,useEffect } from "react";

import { Carousel } from "react-bootstrap";
import styles from "./Lore.module.css";
import Arr from "../../Assets/images/arr.png";
import Hv from "../../Assets/images/hv.png";
import Sb from "../../Assets/images/sb.png";
import Shb from "../../Assets/images/shb.png";
import Ew from "../../Assets/images/Ew.png";
import vArr from "../../Assets/videos/arr.mp4";
import vHv from "../../Assets/videos/hv.mp4";
import vSb from "../../Assets/videos/sb.mp4";
import vShb from "../../Assets/videos/shb.mp4";

const Lore = () => {
  const [index, setIndex] = useState();
  const [text, setText] = useState("EXTENSION : A REALM REBORN");
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=39j5v8jlndM&ab_channel=FINALFANTASYXIV");

  const onSelectHandler = (e) => {
    console.log(e);
    setIndex(e);
  };


  useEffect(() => {
    switch (index) {
      case 0:
        setText("EXTENSION : A REALM REBORN");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=39j5v8jlndM&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      case 1:
        setText("A REALM REBORN TRAILER");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=39j5v8jlndM&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      case 2:
        setText("EXTENSION : HEAVENSWARD");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=4phUCJlomPo&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      case 3:
        setText("HEAVENSWARD TRAILER");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=4phUCJlomPo&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      case 4:
        setText("EXTENSION : STORMBLOOD");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=Jt1h1MinlLI&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      case 5:
        setText("STORMBLOOD TRAILER");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=Jt1h1MinlLI&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      case 6:
        setText("EXTENSION : SHADOWBRINGERS");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=NjPVSF2dpUE&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
        case 7:
        setText("SHADOWBRINGERS TRAILER");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=NjPVSF2dpUE&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
        case 8:
        setText("EXTENSION : ENDWALKER : ");
        setUrl(JSON.parse(JSON.stringify(<a href="https://www.youtube.com/watch?v=HsVraq-v0JI&ab_channel=FINALFANTASYXIV"></a>)).props.href);
        break;
      default:
        break;
    }
  },[index, url])
  
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
          </Carousel.Item>

          <Carousel.Item interval={9100}>
            <video 
              src={vArr} 
              autoPlay 
              loop 
              className={styles.carouselImage}>
            </video>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img className={styles.carouselImage} src={Hv} alt="second slide" />
          </Carousel.Item>

          <Carousel.Item interval={9100}>
            <video 
              src={vHv} 
              autoPlay 
              loop 
              className={styles.carouselImage}>
            </video>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img 
              className={styles.carouselImage} 
              src={Sb} 
              alt="third slide" 
            />
          </Carousel.Item>

          <Carousel.Item interval={9100}>
            <video 
              src={vSb} 
              autoPlay 
              loop 
              className={styles.carouselImage}>
            </video>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className={styles.carouselImage}
              src={Shb}
              alt="fourth slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={9100}>
            <video 
              src={vShb} 
              autoPlay 
              loop 
              className={styles.carouselImage}>
            </video>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img 
              className={styles.carouselImage} 
              src={Ew} alt="five slide" 
            />
          </Carousel.Item>

        </Carousel>
        <p className={styles.textCarousel}>{text}</p>
        <a className={styles.link}  target="blank" href={url}>Watch the full trailer</a>
      </div>
    </>
  );
};

export default Lore;
