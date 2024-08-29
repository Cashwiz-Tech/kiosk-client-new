

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanSuccess.module.css"
import {setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import scand_tz from '../../assets/scand_tz.png'
type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanSuccess({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
   
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> הסריקה בוצעה בהצלחה </h3>
			
			
				<img src={scand_tz} className={styles.scand_tz}/>
			
				
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
	)
}
