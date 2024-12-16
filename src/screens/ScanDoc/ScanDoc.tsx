

import { useCallback, useRef, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanDoc.module.css"
import {setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import camera_icon from '../../assets/camera_icon.png'
import { setUserDoc } from "store/registerSlice"
import Webcam from "react-webcam"
import Header from "layouts/header/Header"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanDoc({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
	const FACING_MODE_USER = "user";
	const FACING_MODE_ENVIRONMENT = "environment";
	  
	const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

	const videoConstraints = {
		// width: 1080,
		// height: 720,
		facingMode: facingMode
	  };

	  const webcamRef = useRef(null);
	  const [imgSrc, setImgSrc] = useState(null);
	
	  const capture =useCallback(() => {


		if(webcamRef.current){
			let web_info:any=webcamRef.current;
			const imageSrc:any = web_info.getScreenshot();
			
			// setImgSrc(imageSrc);
			dispatch(setUserDoc(imageSrc));
			onNext();
		}
	  }, [webcamRef, setImgSrc]);
	  
	return (
		<>
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
		</>
	)
}
