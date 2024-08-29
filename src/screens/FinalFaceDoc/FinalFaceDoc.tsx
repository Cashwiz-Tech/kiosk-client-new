

import { useState } from "react"

import Button from "lib/button"

import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./FinalFaceDoc.module.css"

import {  useAppSelector } from "store/store"
import axios from "axios";

import scand_tz from '../../assets/scand_tz.png'
import scan_face from '../../assets/scan_face.png'

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function FinalFaceDoc({ onNext, onBack }: Props) {

	const [israel_prefix, setisrael_prefix] = useState('+972')
	const [show_error, setshow_error] = useState('')

	const fullName = useAppSelector(
		(state) => state.register.fullName
	);

	
	const email = useAppSelector(
		(state) => state.register.email
	);

	const teudatZehot = useAppSelector(
		(state) => state.register.IDNum
	);

	const darkon = useAppSelector(
		(state) => state.register.DarkonNum
	);

	const documentType = useAppSelector(
		(state) => state.register.documentType
	);

	const phoneNumber = useAppSelector(
		(state) => state.navigation.phoneNum
	);

	async function go_to_next_page(){
	
		let firstName=fullName.split(' ')[0];
		let lastName=fullName.split(' ')[1];


		let phone_num_international = israel_prefix + phoneNumber.substring(1);

		let id_to_request = (documentType=="darkon"? darkon :teudatZehot );
		  
		let params = "fName="+firstName+"&lName="+lastName +"&email="+email+"&personalId="+id_to_request+"&phoneNumber="+phone_num_international+"&documentType="+documentType ;
		
		await axios({
            url: "http://18.219.223.53/kiosk_stage/register.php?"+params,
            method: "GET",
			headers: {
				'Content-Type': 'application/json'
			}
        }).then((res:any) => {
			debugger;
			if (res.data.error_code==0) {
				onNext()
			} else {
				setshow_error(res.data.error);
			}
			
		})
		.catch((err:any) => {});

	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> תעודה מזהה ותצלום פנים</h3>
			
				
				<img src={scand_tz} className={styles.scand_tz}/>
				<img src={scan_face} className={styles.scand_tz}/>
				
				
				{show_error? <p className={styles.error}> {show_error} </p>: <></>}
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button>
				<Button onClick={() =>{go_to_next_page()}} >
					המשך
					<Arrow />
				</Button>
			</div>
		</div>
	)
}
