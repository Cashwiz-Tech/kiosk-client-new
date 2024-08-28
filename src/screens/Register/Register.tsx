

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./Register.module.css"
import {setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function Register({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();

	const [emailAddress, setemailAddress] = useState<string>("")
	
    const [userName, setuserName] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
    const [errorMessageIdentity, seterrorMessageIdentity] = useState("")

	const [isVisitedID, setisVisitedID] = useState(false)
	const [isVisitedEmail, setisVisitedEmail] = useState(false)
	
	const [focusisVisitedID, setfocusisVisitedID] = useState(true)
	
    const validateName = () => {
		
		let HebrewChars = new RegExp("^[\u0590-\u05FF ]*$");

		if(userName.length>=1 ){
			setisVisitedID(true);
			if (!HebrewChars.test(userName)) {
				seterrorMessageIdentity('שם מלא צריך להיות בעברית')
			} else {
				seterrorMessageIdentity("")
			}
		}
	}

	function validateEmail(){
		
		let email =emailAddress.trim();

		if(email.length>=1 ){
			setisVisitedEmail(true);

			if( String(email)
				.toLowerCase()
				.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)){
					setErrorMessage("")
				} else {
					setErrorMessage('כתובת דוא"ל לא תקינה')
				}
		}
	}

	function cancel_caracter(){
		let str = emailAddress.substring(0, emailAddress.length - 1);
		setemailAddress(str)
	}

    function cancel_caracter_user(){
		let str = userName.substring(0, userName.length - 1);
		setuserName(str)
    }

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> הרשמה לשירות </h3>
				<div className={styles.phoneInput}>

                    <Input
						type="userName"
						value={userName}
						setValue={(v) => setuserName(v)}
						label="שם מלא בעברית של בעל הכרטיס"
						errorMessage={errorMessageIdentity}
						isVisited={isVisitedID}
						validate={validateName}
                        focus_func={()=>{setfocusisVisitedID(true)}} 
					/>

					<Input
						type="email"
						value={emailAddress}
						setValue={(v) => setemailAddress(v)}
						label="דואל"
						errorMessage={errorMessage}
						isVisited={isVisitedEmail}
						validate={validateEmail}
                        focus_func={()=>{setfocusisVisitedID(false)}} 
					/>

					{!focusisVisitedID ?<LettersKeypad  setValue={(v:any) => setemailAddress((prev) => prev + v)} cancel_caracter={cancel_caracter}/> :
					<LettersKeypad  setValue={(v:any) => setuserName((prev) => prev + v)} cancel_caracter={cancel_caracter_user}/>}

				</div>
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button>
				<Button onClick={() =>{onNext()}} disabled={(!!errorMessage || !isVisitedEmail) || (!!errorMessageIdentity || !isVisitedID)}>
					המשך
					<Arrow />
				</Button>
			</div>
		</div>
	)
}
