import { useEffect, useState } from "react"
import styles from "./LinkRegister.module.css"
import { useAppDispatch, useAppSelector } from "store/store"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"
import well_icon from "../../assets/well_icon.png"

const LinkRegister = () => {
    const dispatch = useAppDispatch();


    const phoneNum = useAppSelector(
        (state) => state.navigation.phoneNum
      );


    function back_to_main(){
        dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
    }


    return (
        <div className={styles.container}>
        <div className={styles.content}>
            <img src={well_icon} />
            <h3 className={styles.title}> מצויין,</h3>
            <p className={styles.sub_title}> קישור להרשמה נשלח אליך
            למספר הנייד: </p>    
           
           <div className={styles.phone_place}>
               <p className={styles.phone_number}>{phoneNum} </p> 
            </div>

            <p className={styles.sub_text}> בסיום התהליך חזור לכאן ותוכל לבצע את הרכישה. </p>
        </div>
       
        <button className={styles.back_to_main} onClick={()=>back_to_main()}>  למסך הבית </button>

    </div>
    )

};

export default LinkRegister;
