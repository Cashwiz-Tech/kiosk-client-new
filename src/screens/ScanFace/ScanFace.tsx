

import { useCallback, useEffect, useRef, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanFace.module.css"
import {setCurrentScreen, setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import scan_face from '../../assets/scan_face.png'
import Webcam from "react-webcam";
import { setUserImage } from "store/registerSlice"
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"
import { Screens } from "types/Screens"



type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanFace({ onNext, onBack }: Props) {
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
			dispatch(setUserImage(imageSrc));
			onNext();
		}
	  }, [webcamRef, setImgSrc]);

	return (
		<div className={styles.main_cont}>
		<Header></Header>
		<div className={styles.container}>

			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					סריקת פנים חוזרת
				</Button>
				<Button onClick={() =>{capture()}} >
					אישור תמונה
					<Arrow />
				</Button>
			</div>

			<div className={styles.content}>
				
				{/* <img src={scan_face} className={styles.scand_tz}/> */}

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

			</div>
			<h3 className={styles.title}> כעט נבצע סריקת פנים. עמוד מול המצלמה:</h3>
		
		</div>
		<ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
				
		</div>
	)
}
