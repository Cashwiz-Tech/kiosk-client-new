import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ChooseRegisterOption.module.css"
import { useAppDispatch } from "store/store"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"


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
        <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.subtitle}> עליך להרשם תחילה לשירות. <br/>
            לאחר הרשמה קצרה נאפשר לך לבצע רכישה </p>
            <h3 className={styles.title}>כיצד ברצונך לבצע את ההרשמה?</h3>
    
             <button className={styles.register_btn_option}  onClick={link_register}> שליחת קישור לנייד שלי </button>   

             <button className={styles.register_btn_option} onClick={scan_qr_register}> לסרוק קוד QR </button>   

             <button className={styles.register_btn_option} onClick={register_here}> הרשמה במכשיר זה </button>   

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
    )

};

export default ChooseRegisterOption;
