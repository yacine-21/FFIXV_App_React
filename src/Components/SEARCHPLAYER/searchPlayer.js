/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from 'react'
import styles from "./searchPlayer.module.css"


const searchPlayer = () => {

    // STATES
    const [Qname, setQName] = useState("");
    const [ID, setID] = useState("");
    const [result, setResult] = useState();
    const [result2, setResult2] = useState();
    

    // FUNCTIONS FORMS
    const onChangeHandlerName = (e) =>{
        setQName(e.target.value)
    }

    const onClickHandler = (e) =>{
        e.preventDefault();
        getDataByName();
    }

    const onChangeHandlerNameID = (e) =>{
        setID(e.target.value)
    }

    const onClickHandlerID = (e) =>{
        e.preventDefault();
        getDataByID();
    }

    // REQUEST SERVER NODE

    const getDataByName = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: Qname })
        };
        const response = await fetch('http://localhost:3100/api/SearchCaracterName', requestOptions);
        const data = await response.json();
        setResult(data);
    }

    const getDataByID = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: ID })
        };
        const response = await fetch('http://localhost:3100/api/SearchCaracterByID', requestOptions);
        const data = await response.json();
        setResult2(data);
    }



    // TEST INFORMATIONS
    if(result2 === undefined){
        console.log("");
    } else{
        console.log(result2.Character);
    }








    return(
        <>
            <div className={styles.fantome}></div>
            <div className={styles.container}>
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
                    <div>
                        <button
                            onClick={onClickHandler}
                            className={styles.submit} 
                            value="Search !"
                        >
                            search
                        </button>
                        {result === undefined? "" : <img src={result.Results[2].Avatar} alt="photo"/>}
                        <ul className={styles.info}>
                            <li>{result === undefined ? null : "NAME : " + result.Results[2].Name}</li>
                            <li>{result === undefined ? null : "SERVER : " + result.Results[2].Server}</li>
                            <li>{result === undefined ? null : "ID : " + result.Results[2].ID}</li>
                        </ul>
                    </div>
                </form>
                
                <h2 className={styles.title}>SEARCH PLAYER BY ID</h2>
            <form className={styles.form}>
                    <div className={styles.form_bloc}>
                        <label htmlFor="id">ID : </label>
                        <input
                            onChange={onChangeHandlerNameID}
                            value={ID}
                            type="number"
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
                        {result2 === undefined? "" : <img className={styles.portrait} src={result2.Character.Portrait} alt="photo"/>}
                        <ul className={styles.info}>
                            <li>{result2 === undefined ? null : "NAMEDAY : " + result2.Character.Nameday}</li> 
                            <li>{result2 === undefined ? null : "DATABASE : " + result2.Character.DC}</li> 
                            <li>{result2 === undefined ? null : "LEVEL : " + result2.Character.GearSet.Level}</li> 
                        </ul>
                    </div>
                </form>
            </div>

        </>
    )
}

export default searchPlayer;