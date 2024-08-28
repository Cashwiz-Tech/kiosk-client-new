

import { useState } from "react"
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
type Props = {
	onNext: () => void
	onBack: () => void
}

export default function ScanDoc({ onNext, onBack }: Props) {
	const dispatch = useAppDispatch();
   
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}> אנא סרקו את 
				תעודת הזהות במכשיר </h3>
			
				<div className={styles.video_place}> 
				<img src={camera_icon} className={styles.camera_icon}/>
					<p className={styles.subtitle}> לחצו וסרקו </p>
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
	)
}
