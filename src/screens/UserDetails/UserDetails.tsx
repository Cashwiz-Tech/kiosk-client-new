

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./UserDetails.module.css"
import {setCurrentScreen, setOTP, setPhoneNum, setUserExist } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import { Screens } from "types/Screens"
import { setIDNum } from "store/registerSlice"

type Props = {
	onNext: (phoneNumber: string) => void
	onBack: () => void
}

export default function UserDetails({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
	const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [identityNumber, setidentityNumber] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
    const [errorMessageIdentity, seterrorMessageIdentity] = useState("")
	const [isVisited, setIsVisited] = useState(false)
	const [isVisitedID, setisVisitedID] = useState(false)

    const [focusisVisitedID, setfocusisVisitedID] = useState(true)

    const [israel_prefix, setisrael_prefix] = useState('972')
	
	const validate = (v: string) => {

		let num = v;

		if (String(num).trim().length>1) {
			setIsVisited(true);

			if ( num.includes("-")) {
				num = num.slice(0, 3) + num.slice(4, num.length)
			}

			if (num.length !== 10 || num[0]!="0") {
				setErrorMessage("מספר הטלפון אינו תקין")
			} else {
				setErrorMessage("")
			}
		}
	}

    const validateId = (id: string) => {

        var id = id.trim();

		if (String(id).trim().length>1) {
			setisVisitedID(true);

			if (id.length ==9 && Array
					.from(id, Number)
					.reduce((counter, digit, i) => {
						const step = digit * ((i % 2) + 1);
								return counter + (step > 9 ? step - 9 : step);
							}) % 10 === 0) {
								seterrorMessageIdentity("")
							} else {
								seterrorMessageIdentity("מספר הת.ז אינו תקין")
							}
					
						}
	}

	function cancel_caracter(){
		let str = phoneNumber.substring(0, phoneNumber.length - 1);
		setPhoneNumber(str)
	}

    function cancel_caracter_id(){
		let str = identityNumber.substring(0, identityNumber.length - 1);
		setidentityNumber(str)
    }

    async function store_phone_number(){
	
		let phone_num=phoneNumber.trim();

		if ( phone_num.includes("-")) {
			phone_num = phone_num.slice(0, 3) + phone_num.slice(4, phone_num.length)
		}

		//phone_num=phoneNumber.slice(0,3)+phoneNumber.slice(4,11);

		let phone_num_international = israel_prefix + phone_num.substring(1);

		await axios({
            url: "https://backend.no1currency.co.il/kiosk_stage/check_user.php?personalId="+identityNumber+"&phoneNumber="+phone_num_international,
            method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
        }).then(async (res:any) => {
		

			dispatch(setPhoneNum(phoneNumber));

			if (res.data.error_code==0) {
				
				dispatch(setUserExist(true));
				// dispatch(setOTP(res.data.otp));
				dispatch(setCurrentScreen(Screens.SEND_OTP_EXISTED));
				dispatch(setIDNum(identityNumber));
			} else if (res.data.error_code==504) { // custumer not found
			
				dispatch(setUserExist(false));
				await axios({
					url: "https://backend.no1currency.co.il/kiosk_stage//send_otp_new.php?phoneNumber="+phone_num_international,
					method: "GET",
					headers: {
						'Content-Type': 'application/json'
					}
				}).then((res_1:any) => {
				

					if (res_1.data.error_code==0){
						
						dispatch(setOTP(res_1.data.otp));
				
						onNext(phoneNumber); 
					} 

				}).catch((err:any) => {});

			}
			
		})
		.catch((err:any) => {});

    }

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>על מנת לקבל שירות עליך לבצע זיהוי קצר</h3>
				<div className={styles.phoneInput}>

                    <Input
						type="identityNumber"
						value={identityNumber}
						setValue={(v) => setidentityNumber(v)}
						label="מספר זהות"
						errorMessage={errorMessageIdentity}
						isVisited={isVisitedID}
						validate={validateId}
                        focus_func={()=>{setfocusisVisitedID(true)}} 
					/>

					<Input
						type="phoneNumber"
						value={phoneNumber}
						setValue={(v) => setPhoneNumber(v)}
						label="נייד"
						errorMessage={errorMessage}
						isVisited={isVisited}
						validate={validate}
                        focus_func={()=>{setfocusisVisitedID(false)}} 
					/>

					{!focusisVisitedID?<NumericKeypad setValue={(v:any) => setPhoneNumber((prev) => prev + v)} cancel_caracter={cancel_caracter} /> :
                    <NumericKeypad setValue={(v:any) => setidentityNumber((prev) => prev + v)} cancel_caracter={cancel_caracter_id}/>}
				</div>
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					ביטול
				</Button>
				<Button onClick={() =>{store_phone_number()}} disabled={(!!errorMessage || !isVisited) || (!!errorMessageIdentity || !isVisitedID)}>
					אישור
					<Arrow />
				</Button>
			</div>
		</div>
	)
}

