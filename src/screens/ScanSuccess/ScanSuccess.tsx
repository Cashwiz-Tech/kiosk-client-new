

import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanSuccess.module.css"
import {setCurrentScreen, setPhoneNum } from "store/navigationSlice"
import { useAppDispatch, useAppSelector } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import scand_tz from '../../assets/scand_tz.png'
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"
import { Screens } from "types/Screens"
type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanSuccess({ onNext, onBack }: Props) {
		const dispatch = useAppDispatch();   
	const [showScreenError, setshowScreenError] = useState(false);
	
							
						
    const [timeoutID, settimeoutID] = useState<any>();
	
									
	useEffect(() => {
		setTimeout(()=>{
      setshowScreenError(true);
      settimeoutID(setTimeout(()=>{
        dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) 
      }, 30000));

    }, 60000);
	}, []);

    useEffect(() => {
        if(showScreenError==false){
            clearTimeout(timeoutID)
        }
    }, [showScreenError]);
	

   
	const UserDoc = useAppSelector(
		(state) => state.register.UserDoc
	);
	
	return (
		<div className={styles.main_cont}>
		<Header></Header>
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> הסריקה בוצעה בהצלחה </h3>
			
			
				{/* <img src={scand_tz} className={styles.scand_tz}/> */}
				<img src={UserDoc} className={styles.scand_tz}/>
				
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					סריקה חוזרת
				</Button>
				<Button onClick={() =>{onNext()}} >
					אני מאשר את התעודה
					<Arrow />
				</Button>
			</div>
		</div>
		<ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
				
		</div>

	)
}
