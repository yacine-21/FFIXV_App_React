/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import styles from "./patchList.module.css"
import { sendPatchList } from "../../Services/getData";


const patchList = () => {

    const [result, setResult] = useState("");
    const [click, setClick] = useState(false);
    
    const onClickHandlerPatchList = async (e) =>{
        e.preventDefault();
        setResult(await sendPatchList());
        setClick(true);
    }

    const onClickHandlerPatchListFalse =  () =>{
        setClick(false);
    }


    if(result !== undefined && click === true){
        console.log(result[18]);
        console.log(result);
    }


    return(
        <>
            <div className={styles.fantome}></div>
            <div className={styles.container}>
                <h1>PATCHLIST</h1>
                {click === false ? <button className={styles.buttonCardShow} onClick={onClickHandlerPatchList}>SHOW PATCHLIST</button> : null}
                <div className={styles.resultPatchList}>
                    {
                        click === true ? result === undefined ? null : result.map(patchlistRes =>{
                            return(
                                <div key={patchlistRes.ID}>
        
                                    <Card className={styles.card}>
                                        <Card.Img className={styles.miniature} src={patchlistRes.Banner} />
                                        <Card.Body className={styles.bodyCard}>
                                            <Card.Title>{patchlistRes.ExName}</Card.Title>
                                            <Card.Text>
                                                <li>NAME : {patchlistRes.Name_en}</li>
                                                <li>VERSION : {patchlistRes.Version}</li>
                                            </Card.Text>
                                            {patchlistRes.PatchNotes_en === "" || patchlistRes.PatchNotes_en === undefined ? null : <Button className={styles.buttonCard}><a className={styles.a} target="blank" href={patchlistRes.PatchNotes_en}>GO TO</a> </Button>}
                                        </Card.Body>
                                    </Card>
        
                                </div>
                            )
                        }) : ""
                    }
                </div>
                {click === true ? <button className={styles.buttonCardShow} onClick={onClickHandlerPatchListFalse}>HIDE PATCHLIST</button> : null}
            </div>
        </>
    )
}

export default patchList;