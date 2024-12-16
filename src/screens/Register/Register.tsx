

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"

import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./Register.module.css"

import { useAppDispatch } from "store/store"

import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import { setEmail, setFullName } from "store/registerSlice"
import Header from "layouts/header/Header"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function Register({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();

	const [Address, setAddress] = useState<string>("")
	
    const [userName, setuserName] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
    const [errorMessageIdentity, seterrorMessageIdentity] = useState("")

	const [isVisitedID, setisVisitedID] = useState(false)
	const [isVisitedAddress, setisVisitedAddress] = useState(false)
	
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

	function validateAdress(){
		let address =Address.trim();
		if(address.length>=1 ){
			setisVisitedAddress(true);
			if(address.length>=5){
		
				setErrorMessage("")
			} else {
				setErrorMessage('יש להכניס כתובת')
			}
		} 
			
		
	}

	function cancel_caracter(){
		let str = Address.substring(0, Address.length - 1);
		setAddress(str)
	}

    function cancel_caracter_user(){
		let str = userName.substring(0, userName.length - 1);
		setuserName(str)
    }

	function go_to_next_page(){

		dispatch(setFullName(userName));
		dispatch(setEmail(Address));
		
		onNext();
	}

	return (
		<>
		<Header></Header>
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
						type="address"
						value={Address}
						setValue={(v) => setAddress(v)}
						label="כתובת (רחוב ומספר, עיר)"
						errorMessage={errorMessage}
						isVisited={isVisitedAddress}
						validate={validateAdress}
                        focus_func={()=>{setfocusisVisitedID(false)}} 
					/>

					{!focusisVisitedID ?<LettersKeypad  setValue={(v:any) => setAddress((prev) => prev + v)} cancel_caracter={cancel_caracter}/> :
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
				<Button onClick={() =>{go_to_next_page();}} disabled={(!!errorMessage || !isVisitedAddress) || (!!errorMessageIdentity || !isVisitedID)}>
					המשך
					<Arrow />
				</Button>
			</div>
		</div>
		</>
	)
}
