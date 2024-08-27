import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./QRRegister.module.css"
import { useAppDispatch } from "store/store"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"
import register_qr from  "../../assets/register_qr.png"

const QRRegister = () => {
    const dispatch = useAppDispatch();

    function back_to_main(){
        dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
    }

    function scan_qr_register(){
        dispatch(setCurrentScreen(Screens.USER_DETAILS));
    }

    return (
        <div className={styles.container}>
        <div className={styles.content}>

            <h3 className={styles.title}> סרוק את הקוד
                והמשך את ההרשמה 
                במכשירך האישי </h3>
    
            <img src={register_qr} className={styles.register_qr}/>

        </div>
       
        <button className={styles.back_to_main} onClick={()=>back_to_main()}> חזרה למסך הבית </button>

    </div>
    )

};

export default QRRegister;
