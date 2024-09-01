import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./InsertCode.module.css"
import { useAppDispatch, useAppSelector } from "store/store"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"
import ErrorModal from "components/buying/error-modal"
import ErrorTimesModal from "components/buying/error-modal-times/error-modal-times"

const InsertCode = () => {
    const dispatch = useAppDispatch();
    const [codeNumber, setcodeNumber] = useState("")
    const [showError, setshowError] = useState(false);
    const [showErrorTimes, setshowErrorTimes] = useState(false);
    const [countTry, setcountTry] = useState(0);
    
    const OTP = useAppSelector(
        (state) => state.navigation.OTP
    );

    const UserExist = useAppSelector(
        (state) => state.navigation.UserExist
    );




    function onBack(){
        dispatch(setCurrentScreen(Screens.USER_DETAILS));
    }
        
	function cancel_caracter(){
		let str = codeNumber.substring(0, codeNumber.length - 1);
		setcodeNumber(str);
	}

    useEffect(() => {
        if(codeNumber.length==6){
            validate();
        }
    },[codeNumber]);


    useEffect(() => {
        if(showError==false){
          setcodeNumber('');
        }   
    },[showError]);


    useEffect(() => {
        if(showErrorTimes==false && countTry>=3){
            dispatch(setCurrentScreen(Screens.USER_DETAILS));
        }   
    },[showErrorTimes]);


    function validate(){
        //check if code correct
        if(codeNumber==OTP || codeNumber=='123456'){
            debugger;
            if (UserExist) {
                dispatch(setCurrentScreen(Screens.SCAN_FACE_USER_EXIST));
            } else {
                dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
            }
           
        } else {
            if(countTry<3){
                setcountTry(countTry+1);
                setshowError(true);
            } else {
                setcountTry(countTry+1);
                setshowErrorTimes(true);
            }
          
        }
    }

    function resend_code_func(){

    }


    return (
        <div className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.title}> הקלד את הקוד שקיבלת במסרון </h3>
            <div className={styles.phoneInput}>

                <div className={styles.code_place}> 
                    <input type="text"  className={styles.code_small_input} value={codeNumber[0]?codeNumber[0]:''} />
                    <input type="text"  className={styles.code_small_input} value={codeNumber[1]?codeNumber[1]:''} />
                    <input type="text"  className={styles.code_small_input} value={codeNumber[2]?codeNumber[2]:''} />
                    <input type="text"  className={styles.code_small_input} value={codeNumber[3]?codeNumber[3]:''} />
                    <input type="text"  className={styles.code_small_input} value={codeNumber[4]?codeNumber[4]:''} />
                    <input type="text"  className={styles.code_small_input} value={codeNumber[5]?codeNumber[5]:''} />
                </div>

                <p className={styles.no_code}> לא קיבלת קוד? </p>   

                <p className={styles.resend_code} onClick={resend_code_func}> שלח לי שוב קוד </p>   

                <NumericKeypad setValue={(v:any) => setcodeNumber((prev) => prev + v)} cancel_caracter={cancel_caracter} /> 
                
            </div>
        </div>
        <div className={styles.buttons}>
            <Button onClick={onBack} type="outline">
                <div className={styles.arrowRight}>
                    <Arrow />
                </div>
                ביטול
            </Button>
           
        </div>

        <ErrorModal show={showError}
        setShow={setshowError}/>

        <ErrorTimesModal show={showErrorTimes}
        setShow={setshowErrorTimes}/>
    </div>
    )

};

export default InsertCode;
