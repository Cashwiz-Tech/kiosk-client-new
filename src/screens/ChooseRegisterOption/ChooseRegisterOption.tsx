import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ChooseRegisterOption.module.css"
import { useAppDispatch } from "store/store"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"
import Header from "layouts/header/Header"
import link_to_phone_icon from 'assets/link_to_phone_icon.png'
import scna_qr_icon from 'assets/scna_qr_icon.png'
import phone_icon from 'assets/phone_icon.png'

const ChooseRegisterOption = () => {
    const dispatch = useAppDispatch();
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showError, setshowError] = useState(false);
    
    function onBack(){
        dispatch(setCurrentScreen(Screens.USER_DETAILS));
    }

    function scan_qr_register(){
        dispatch(setCurrentScreen(Screens.QR_REGISTER));
    }

    function link_register(){
        dispatch(setCurrentScreen(Screens.LINK_REGISTER));
    }

    function register_here(){
        dispatch(setCurrentScreen(Screens.REGISTER_HERE));
    }

    return (
        <>
        <Header></Header>
        <div className={styles.container}>
        <div className={styles.content}>
            
            <h3 className={styles.title}>כיצד ברצונך לבצע את ההרשמה?</h3>

            <p className={styles.subtitle}> עליך להרשם תחילה לשירות. <br/>
            לאחר הרשמה קצרה נאפשר לך לבצע רכישה </p>
    
             <button className={styles.register_btn_option}  onClick={link_register}> 
                <img src={link_to_phone_icon} className={styles.register_btn_option_icon}/>
                שליחת קישור לנייד שלי </button>   

             <button className={styles.register_btn_option} onClick={scan_qr_register}>
             <img src={scna_qr_icon} className={styles.register_btn_option_icon}/>
                 לסרוק קוד QR </button>   

             <button className={styles.register_btn_option} onClick={register_here}>
             <img src={phone_icon} className={styles.register_btn_option_phone}/>
                 הרשמה במכשיר זה </button>   

        </div>
        <div className={styles.buttons}>
            <Button onClick={onBack} type="outline">
                <div className={styles.arrowRight}>
                    <Arrow />
                </div>
                ביטול
            </Button>
           
        </div>

    </div>
    </>
    )

};

export default ChooseRegisterOption;
