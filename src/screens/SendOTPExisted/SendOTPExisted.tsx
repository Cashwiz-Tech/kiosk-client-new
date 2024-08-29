

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./SendOTPExisted.module.css"
import {setCurrentScreen, setOTP, setPhoneNum } from "store/navigationSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import axios from "axios";
import { Screens } from "types/Screens"

type Props = {
	onNext: (phoneNumber: string) => void
	onBack: () => void
}

export default function SendOTPExisted({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
	const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [identityNumber, setidentityNumber] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
    const [errorMessageIdentity, seterrorMessageIdentity] = useState("")
	const [isVisited, setIsVisited] = useState(false)
	const [isVisitedID, setisVisitedID] = useState(false)

	const phoneNum = useAppSelector(
		(state) => state.navigation.phoneNum
	  );
	  

	  function not_my_num(){
		debugger;;
		dispatch(setCurrentScreen(Screens.NOT_MY_NUM));
	  }

	  
	  function send_code(){
		dispatch(setCurrentScreen(Screens.INSERT_CODE));
	  }

	  function voice_code(){

	  }

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> קוד אימות ישלח אליך למספר שאתו נרשמת לשירות  </h3>
				<p className={styles.subtitle}> הקוד ישלח לנייד שמסתיים: </p>

				<div className={styles.code_place}>
					<p className={styles.phone_to_send}> {phoneNum[0]+phoneNum[1]+phoneNum[2]+'****'+phoneNum[9]+phoneNum[10]} </p>
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
	)
}
