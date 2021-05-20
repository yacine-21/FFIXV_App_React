/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import styles from "./searchPlayer.module.css"
import { sendDataName } from "../../Services/getData";
import { sendDataID } from "../../Services/getData";
import { Card } from 'react-bootstrap';


const searchPlayer = () => {

    // STATES
    const [Qname, setQName] = useState("");
    const [ID, setID] = useState("");
    const [result, setResult] = useState();
    const [result2, setResult2] = useState();
    

    // FUNCTIONS FORMS
    const onChangeHandlerName =  (e) =>{
        setQName(e.target.value);
    }

    const onClickHandler = async (e) =>{
        e.preventDefault();
        setResult(await sendDataName(Qname));

    }

    const onChangeHandlerNameID = (e) =>{
        setID(e.target.value);
    }

    const onClickHandlerID = async (e) =>{
        e.preventDefault();
        setResult2(await sendDataID(ID));
    }

    return(
        <>
            <div className={styles.fantome}></div>


            <div className={styles.container}>

                <div className={styles.from_1}>
                    <h2 className={styles.title}>SEARCH PLAYER BY NAME</h2>
                    <form className={styles.form}>
                            <div className={styles.form_bloc}>
                                <label htmlFor="name">Name : </label>
                                <input
                                    onChange={onChangeHandlerName}
                                    value={Qname}
                                    autoComplete="username"
                                    type="text"
                                    name="name"
                                    id="name" 
                                    placeholder="Enter your name ..." 
                                    required
                                />
                            </div>
                                <button
                                    onClick={onClickHandler}
                                    className={styles.submit} 
                                    value="Search !"
                                >
                                    search
                                </button>
                            <div className={styles.test}>


                                {result === undefined ? null :  result.Results.map(player =>{
                                    return(
                                        <div className={styles.result}>

                                            <Card className={styles.card}>
                                                <Card.Img className={styles.miniature} src={player.Avatar} />
                                                <Card.Body className={styles.bodyCard}>
                                                    <Card.Title className={styles.titleCard}>{result === undefined ? null : "NAME : " + player.Name}</Card.Title>
                                                    <Card.Text>
                                                        <li>{result === undefined ? null : "SERVER : " + player.Server}</li>
                                                        <li>{result === undefined ? null : "ID : " + player.ID}</li>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>

                                        </div>
                                    )
                                })}

                            </div>
                        </form>
                </div>
                <div className={styles.from_2}>
                    <h2 className={styles.title}>SEARCH PLAYER BY ID</h2>
                    <form className={styles.form}>
                            <div className={styles.form_bloc}>
                                <label htmlFor="id">ID : </label>
                                <input
                                    onChange={onChangeHandlerNameID}
                                    value={ID}
                                    type="text"
                                    name="id"
                                    id="id" 
                                    placeholder="Enter your ID ..." 
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    onClick={onClickHandlerID}
                                    className={styles.submit} 
                                    value="Search !"
                                >
                                search
                                </button>
                                <div className={styles.test}>
                                    {result2 === undefined? null : <img className={styles.portrait} src={result2.Character.Portrait} alt="photo"/>}
                                    {result2 === undefined ? null : 
                                    <ul className={styles.info}>
                                        <li>{result2 === undefined ? null : result2.Character.Bio === "-" ? "NO BIO" : "BIO : " + result2.Character.Bio}</li>
                                        <li>{result2 === undefined ? null : "NAMEDAY : " + result2.Character.Nameday}</li> 
                                        <li>{result2 === undefined ? null : "DATABASE : " + result2.Character.DC}</li>
                                        <li>{result2 === undefined ? null : "SERVER : " + result2.Character.Server}</li>
                                        <li>{result2 === undefined ? null : "LEVEL : " + result2.Character.GearSet.Level}</li>
                                    </ul>
                                    }
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}

export default searchPlayer;

