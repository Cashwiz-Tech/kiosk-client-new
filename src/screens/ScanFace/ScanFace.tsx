

import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./ScanFace.module.css"
import {setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import axios from "axios";
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import scan_face from '../../assets/scan_face.png'
type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanFace({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
   
	return (
		<div className={styles.container}>

			<div className={styles.content}>
				<h3 className={styles.title}> כעט נבצע סריקת פנים. עמוד מול המצלמה:</h3>
				<img src={scan_face} className={styles.scand_tz}/>
			</div>

			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					סריקת פנים חוזרת
				</Button>
				<Button onClick={() =>{onNext()}} >
					אישור תמונה
					<Arrow />
				</Button>
			</div>
		</div>
	)
}
