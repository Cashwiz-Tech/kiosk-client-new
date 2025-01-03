

import { useEffect, useState } from "react"

import Button from "lib/button"

import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./FinalFaceDoc.module.css"

import {  useAppDispatch, useAppSelector } from "store/store"
import axios from "axios";

import scand_tz from '../../assets/scand_tz.png'
import scan_face from '../../assets/scan_face.png'
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function FinalFaceDoc({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);
	
							
						
    const [timeoutID, settimeoutID] = useState<any>();
							
	    
	useEffect(() => {
		setTimeout(()=>{
            setshowScreenError(true);
        }, 60000);
	}, []);


    useEffect(() => {
        if(showScreenError==false){
            clearTimeout(timeoutID)
        } else {
            settimeoutID(setTimeout(()=>{
                dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) 
            }, 30000));
        }
    }, [showScreenError]);
	
	
	const [israel_prefix, setisrael_prefix] = useState('972')
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


	const userImage = useAppSelector(
		(state) => state.register.UserImage
	);

	const UserDoc = useAppSelector(
		(state) => state.register.UserDoc
	);

	
	async function go_to_next_page(){
	
		let firstName=fullName.split(' ')[0];
		let lastName=fullName.split(' ')[1];

		let phone_num=phoneNumber.trim();
		
		if ( phone_num.includes("-")) {
			phone_num=phoneNumber.slice(0,3)+phoneNumber.slice(4,11);
		}

		let phone_num_international = israel_prefix + phone_num.substring(1);

		let id_to_request = (documentType=="darkon"? darkon :teudatZehot );
		  
	//	let params = "fName="+firstName+"&lName="+lastName +"&email="+email+"&personalId="+id_to_request+"&phoneNumber="+phone_num_international+"&documentType="+documentType; //+"&photo="+userImage ;
		
		// let params_to_post={
		// 	fName : firstName,
		// 	lName : lastName,
		// 	email : email,
		// 	personalId : id_to_request,
		// 	phoneNumber : phone_num_international,
		// 	documentType : documentType,
		// 	photo : userImage
		// }
		
		var formData = new FormData();
		formData.append('fName', firstName);
		formData.append('lName', lastName);
		// formData.append('email', email);
		formData.append('address', email);
		formData.append('personalId', id_to_request);
		formData.append('phoneNumber', phone_num_international);
		formData.append('documentType', documentType);
		formData.append('photo', userImage);

		await axios({
            url: "https://backend.no1currency.co.il/kiosk_stage/register.php",
            method: "POST",
			data: formData,
        }).then((res:any) => {

			if (res.data.error_code==0) {
				onNext()
			} else {
				setshow_error(res.data.error);
			}
			
		})
		.catch((err:any) => {});

	}

	return (
		<div className={styles.main_cont}>
		<Header></Header>
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> תעודה מזהה ותצלום פנים</h3>
			
				
				<img src={UserDoc} className={styles.scand_tz}/>
				<img src={userImage} className={styles.scand_tz}/>
				
				
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
		
		<ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
									
									
									
		</div>
	)
}
function dispatch(arg0: any) {
	throw new Error("Function not implemented.")
}

