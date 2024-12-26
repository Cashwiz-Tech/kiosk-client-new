

import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./FinishRegister.module.css"
import {setCurrentScreen, setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";

import well_icon from '../../assets/well_icon.png'
import Header from "layouts/header/Header"
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left"
import { Screens } from "types/Screens"


type Props = {
	onNext: () => void
	onBack: () => void
}

export default function FinishRegister({ onNext, onBack }: Props) {
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

				<img src={well_icon} />
				<h3 className={styles.title}> ההרשמה הסתיימה </h3>
			
				
				<p className={styles.sub_title}>כעת אתה לקוח רשום. <br/>
				חזור למסך הבית ותוכל לבצע רכישה </p>
				
				
				
			</div>
			<div className={styles.buttons}>
				{/* <Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					חזרה
				</Button> */}
				<Button onClick={() =>{onNext()}} >
					למסך הבית
					<Arrow />
				</Button>
			</div>
		</div>

		
		<ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
									

		</div>
	)
}
