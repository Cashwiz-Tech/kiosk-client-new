

import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./SendOTPExisted.module.css"
import {setCurrentScreen, setOTP, setPhoneNum, setUserExist } from "store/navigationSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import axios from "axios";
import { Screens } from "types/Screens"
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"

type Props = {
	onNext: (phoneNumber: string) => void
	onBack: () => void
}

export default function SendOTPExisted({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
	const [phoneNumber, setPhoneNumber] = useState<string>("")
   // const [identityNumber, setidentityNumber] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
    const [errorMessageIdentity, seterrorMessageIdentity] = useState("")
	const [isVisited, setIsVisited] = useState(false)
	const [isVisitedID, setisVisitedID] = useState(false)
    const [israel_prefix, setisrael_prefix] = useState('972')
   
	const [showScreenError, setshowScreenError] = useState(false);
							
						
    const [timeoutID, settimeoutID] = useState<any>();
	
									
	useEffect(() => {
		setTimeout(()=>{
      setshowScreenError(true);
      settimeoutID(setTimeout(()=>{
        dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) 
      }, 30000));

    }, 60000);
	}, []);

    useEffect(() => {
        if(showScreenError==false){
            clearTimeout(timeoutID)
        }
    }, [showScreenError]);
	
	const phoneNum = useAppSelector(
		(state) => state.navigation.phoneNum
	);

	const identityNumber = useAppSelector(
		(state) => state.register.IDNum
	);

	function not_my_num(){

		dispatch(setCurrentScreen(Screens.NOT_MY_NUM));
	}

	async function send_code(){

		let phone_num=phoneNum.trim();
		//phone_num=phoneNum.slice(0,3)+phoneNum.slice(4,11);

		if ( phone_num.includes("-")) {
			phone_num = phone_num.slice(0, 3) + phone_num.slice(4, phone_num.length)
		}


		let phone_num_international = israel_prefix + phone_num.substring(1);

		await axios({
            url: "https://backend.no1currency.co.il/kiosk_stage/send_otp_exist.php?personalId="+identityNumber+"&phoneNumber="+phone_num_international,
            method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
        }).then((res:any) => {

			dispatch(setPhoneNum(phoneNumber));

			if (res.data.error_code==0) {
				dispatch(setOTP(res.data.otp));
				dispatch(setCurrentScreen(Screens.SEND_OTP_EXISTED));
				dispatch(setCurrentScreen(Screens.INSERT_CODE));
			} else if (res.data.error_code==504) { // custumer not found
				onNext(phoneNumber); 
			}
			
		})
		.catch((err:any) => {});

	  }

	  function voice_code(){

	  }

	return (
		<div className={styles.main_cont}>
		<Header></Header>
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> קוד אימות ישלח אליך למספר שאתו נרשמת לשירות  </h3>
				<p className={styles.subtitle}> הקוד ישלח לנייד שמסתיים: </p>

				<div className={styles.code_place}>
				<p className={styles.phone_to_send}> {phoneNum[0]+phoneNum[1]+phoneNum[2]+'****'+phoneNum[8]+phoneNum[9]+(phoneNum[10]?phoneNum[10]: '' )} </p>
				</div>

			</div>

			<div className={styles.buttons}>
				<Button onClick={voice_code} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					קוד בהודעה קולית
				</Button>
				<Button onClick={() =>send_code()} >
					שלח לי קוד
					<Arrow />
				</Button>
			
			</div>


			<div className={styles.buttons +' ' + styles.buttons_bottom}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button>
				<Button onClick={() =>not_my_num()} >
					אני לא מזהה את המספר שלי
					<Arrow />
				</Button>
			</div>
		</div>
		
		<ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
									
		</div>
	)
}
