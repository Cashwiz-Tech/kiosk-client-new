

import { useCallback, useEffect, useRef, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanDoc.module.css"
import {setCurrentScreen, setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import camera_icon from '../../assets/camera_icon.png'
import { setUserDoc } from "store/registerSlice"
import Webcam from "react-webcam"
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"
import { Screens } from "types/Screens"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanDoc({ onNext, onBack }: Props) {
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


	const FACING_MODE_USER = "user";
	const FACING_MODE_ENVIRONMENT = "environment";
	  
	const [facingMode, setFacingMode] = useState(FACING_MODE_ENVIRONMENT);
	const [devises, setdevises] = useState<any>([]);
	const [imgSrc, setImgSrc] = useState(null);
	const webcamRef = useRef(null);

	useEffect(() => {
		navigator.mediaDevices.enumerateDevices().then(devices => {setdevises(devices); console.log(devices)});
		
	}, []);

	let videoConstraints = {
		deviceId:'a18e0e86417ef43121f31fb6cdfb4d51f3653f3bda343d96bf3f9b9c7a69c222',
		facingMode: facingMode
	};

	let capture =useCallback(() => {

	if(webcamRef.current){
		let web_info:any=webcamRef.current;
		const imageSrc:any = web_info.getScreenshot();
		dispatch(setUserDoc(imageSrc));
		onNext();
	}
	}, [webcamRef, setImgSrc]);

	return (
		<div className={styles.main_cont}>
		<Header></Header>
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> אנא סרקו את 
				תעודת הזהות במכשיר </h3>
			
				<div className={styles.webcam_cont}>
					<Webcam
		
						audio={false}
						ref={webcamRef}
						screenshotFormat="image/jpeg"
						videoConstraints={{
						...videoConstraints,
						facingMode
						}}
					/>
				
				</div>
				
				{/* <div className={styles.video_place}> 

					
				<img src={camera_icon} className={styles.camera_icon}/>
					<p className={styles.subtitle}> לחצו וסרקו </p>
				</div> */}
				
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button>
				<Button onClick={() =>{capture();onNext()}} >
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
