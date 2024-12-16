

import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./DocumentType.module.css"
import {setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import { ReactComponent as SuccessSVG } from "assets/success.svg"
import { setDarkonNum, setDBirth, setdocumentType, setIDNum } from "store/registerSlice"
import Header from "layouts/header/Header"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function DocumentType({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();

	const [emailAddress, setemailAddress] = useState<string>("")
	
    const [userName, setuserName] = useState("")
	const [darkonNum, setdarkonNum] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [ErrorMessageDarkon, setErrorMessageDarkon] = useState("")
	
    const [errorMessageIdentity, seterrorMessageIdentity] = useState("")
    const [errorMessageBDay, seterrorMessageBDay] = useState("")
    const [isVisitedDate, setisVisitedDate] = useState(false)
	
	const [isVisitedID, setisVisitedID] = useState(false)
	const [isVisitedDarkon, setisVisitedDarkon] = useState(false)
	
	const [focusisVisitedID, setfocusisVisitedID] = useState(true)

	const [doc_type, setdoc_type] = useState('id')
	const [date_birth_val, setdate_birth_val] = useState('')
	const [date_birth_valid, setdate_birth_valid] = useState(false)
	
    const validateName = () => {
		
		if (String(userName).trim().length>1) {
			setisVisitedID(true);
		
			var id = String(userName).trim();
		
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

	function validateDarkon(){

		if (darkonNum.length>1){
			setisVisitedDarkon(true);
		
			if (darkonNum.length==9) {
				setErrorMessageDarkon("")
			} else {
				setErrorMessageDarkon('מספר דרכון לא תקין')
			}
		}
	}

	function cancel_caracter(){
		let str = userName.substring(0, userName.length - 1);
		setuserName(str)
	}

    function cancel_caracter_user(){
		let str = date_birth_val.substring(0, date_birth_val.length - 1);
		setdate_birth_val(str)
    }
	
    function cancel_caracter_darkon(){
		let str = darkonNum.substring(0, darkonNum.length - 1);
		setdarkonNum(str)
    }

	useEffect(() => {
		validateDate();
    },[date_birth_val]);


	function validateDate(){
		if (date_birth_val.length>1) {
			setisVisitedDate(true);
			if (date_birth_val.length==8) {
				seterrorMessageBDay('');
				setdate_birth_valid(true);
			} else {
				seterrorMessageBDay('תאריך לידה לא תקין');
				setdate_birth_valid(false);
			}
		}
		
	}

	function go_to_next_page(){

		let birth_format= date_birth_val.substring(4, 8) +  '-' + date_birth_val.substring(2, 4) + '-'+ date_birth_val.substring(0, 2)  ;

		dispatch(setIDNum(userName));
		dispatch(setDarkonNum(darkonNum));
		dispatch(setDBirth(birth_format));
		dispatch(setdocumentType(doc_type));
		onNext()

	}

	return (
		<>
		<Header></Header>
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> הרשמה לשירות </h3>
				<p className={styles.subtitle}> סוג אמצעי הזיהוי שלך </p>

				<div className={styles.doc_type_btn_cont}> 
					<div className={styles.doc_type_btn + (doc_type=='id' ? ' '+ styles.selected_type : '')} onClick={()=>setdoc_type('id')}> תעודת זהות </div>
					<div className={styles.doc_type_btn + (doc_type=='darkon' ? ' '+ styles.selected_type : '')} onClick={()=>setdoc_type('darkon')}> דרכון </div>
					<div className={styles.doc_type_btn + (doc_type=='driver' ? ' '+ styles.selected_type : '')} onClick={()=>setdoc_type('driver')}> רשיון נהיגה </div>
				</div>

				<div className={styles.phoneInput}>

                   {doc_type == "id" ||  doc_type == "driver" ? 
				   <Input
						type="identityNumber"
						value={userName}
						setValue={(v) => setuserName(v)}
						label="מספר זהות"
						errorMessage={errorMessageIdentity}
						isVisited={isVisitedID}
						validate={validateName}
                        focus_func={()=>{setfocusisVisitedID(true)}} 
					/> :
					<Input
						type="darkon"
						value={darkonNum}
						setValue={(v) => setdarkonNum(v)}
						label="מספר דרכון"
						errorMessage={ErrorMessageDarkon}
						isVisited={isVisitedDarkon}
						validate={validateDarkon}
                        focus_func={()=>{setfocusisVisitedID(true)}} 
					/>
				   }



<p className={styles.birth_date_title}> תאריך לידה </p>
				   <div className={styles.date_birth + (date_birth_valid && isVisitedDate ? ' '+ styles.date_valid : (isVisitedDate ? ' ' + styles.date_notvalid : ''))}> 
				   <div className={styles.date_birth_img}> </div>

						<div className={styles.date_birth_input_year}>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[7]?date_birth_val[6]:''} onFocus={()=>{setfocusisVisitedID(false)}}/>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[6]?date_birth_val[6]:''} onFocus={()=>{setfocusisVisitedID(false)}}/>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[5]?date_birth_val[5]:''} onFocus={()=>{setfocusisVisitedID(false)}} />
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[4]?date_birth_val[4]:''} onFocus={()=>{setfocusisVisitedID(false)}} />
							<span className={styles.year_text}>שנה </span>
						</div>

						<div className={styles.date_birth_input_month}>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[3]?date_birth_val[3]:''} onFocus={()=>{setfocusisVisitedID(false)}}/>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[2]?date_birth_val[2]:''} onFocus={()=>{setfocusisVisitedID(false)}}/>
							<span className={styles.month_text}>חודש </span>
						</div>

						<div className={styles.date_birth_input_day}>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[1]?date_birth_val[1]:''} onFocus={()=>{setfocusisVisitedID(false)}}/>
							<input type="text"  className={styles.date_birth_input} value={date_birth_val[0]?date_birth_val[0]:''} onFocus={()=>{setfocusisVisitedID(false)}}/>
							<span className={styles.day_text}>יום </span>
						</div>
						
						{errorMessageBDay=='' && isVisitedDate?<div className={styles.successIcon}>
							<SuccessSVG />
						</div>:''}
				   </div>


				  
				   {errorMessageBDay?<p className={styles.errorMessage}>{errorMessageBDay}</p>:''}

					{focusisVisitedID && doc_type=='id'?<NumericKeypad  setValue={(v:any) => setuserName((prev) => prev + v)} cancel_caracter={cancel_caracter}/> :
					focusisVisitedID && doc_type=='darkon' ?
					<NumericKeypad  setValue={(v:any) => setdarkonNum((prev) => prev + v)} cancel_caracter={cancel_caracter_user}/> : <NumericKeypad  setValue={(v:any) => setdate_birth_val((prev) => prev + v)} cancel_caracter={cancel_caracter_user}/> }

				</div>
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button>
				<Button onClick={() =>{go_to_next_page();}} disabled={(!!errorMessageIdentity || (!isVisitedID && !isVisitedDarkon)) || (!!errorMessageBDay || !isVisitedDate)}>
					המשך
					<Arrow />
				</Button>
			</div>
		</div>
		</>
	)
}
