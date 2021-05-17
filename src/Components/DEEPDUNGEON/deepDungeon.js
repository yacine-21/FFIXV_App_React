/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect} from 'react'

import styles from './deepDungeon.module.css';


const deepDungeon = () => {

    useEffect(() => {
    }, [])


    return(
        <>
            <div className={styles.fantome}></div>
            <div className={styles.container}>
                <h1>DeepDungeon</h1>
                <ul>
                    <li>The Palace of the Dead 1 - 60</li>
                    <li>DEBUFF  : DeepDungeonBan</li>
                    <li> brume du néant :DeepDungeonDanger/1</li>
                    <li>Poterie : DeepDungeonItem</li>

                </ul>
                <ul>
                    <li>Heaven on High 60 - 70</li>
                    <li>deepDungeonstatus buff et debuff</li>
                    <li>magic stone : DeepDungeonMagicStone </li>
                    <li>DeepDungeonItem : poterie</li>
                </ul>
            </div>
        </>
    )
}

export default deepDungeon;