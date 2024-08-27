

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./UserDetails.module.css"
import {setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";

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

    const [israel_prefix, setisrael_prefix] = useState('+972')
	
	const validate = (v: string) => {
		setIsVisited(true);

		if (v.length !== 10) {
			setErrorMessage("מספר הטלפון אינו תקין")
		} else {
			setErrorMessage("")
		}
	}

    const validateId = (id: string) => {

		setisVisitedID(true);

        var id = String(id).trim();
       
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

	function cancel_caracter(){
		let str = phoneNumber.substring(0, phoneNumber.length - 1);
		setPhoneNumber(str)
	}

    function cancel_caracter_id(){
		let str = identityNumber.substring(0, identityNumber.length - 1);
		setidentityNumber(str)
    }

    async function store_phone_number(){

		// let phone_num_international = israel_prefix + phoneNumber.substring(1);

		// let data ={
		// 	personalId : identityNumber,
		// 	phoneNumber : phone_num_international
		// }

		// await axios({
        //     url: "http://18.219.223.53/kiosk_stage/send_otp_exist.php",
        //     method: "POST",
        //     data: data,
        // }).then((res:any) => {
		// 	onNext(phoneNumber); 
		// 	dispatch(setPhoneNum(phoneNumber));
		// })
		// .catch((err:any) => {});
	

		onNext(phoneNumber); 
		dispatch(setPhoneNum(phoneNumber));

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
