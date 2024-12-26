

import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanVideo.module.css"
import {setCurrentScreen, setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"
import { Screens } from "types/Screens"

type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanVideo({ onNext, onBack }: Props) {
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
	
   
	return (
		<div className={styles.main_cont}>
		<Header></Header>
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> הצמד את התעודה לסורק </h3>
			
				<div className={styles.video_place}> 
					<p className={styles.video_place_text}> כאן יבוא וידאו הסבר </p>
				</div>
				
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button>
				<Button onClick={() =>{onNext()}} >
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
