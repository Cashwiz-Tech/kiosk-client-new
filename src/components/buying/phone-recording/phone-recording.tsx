import { useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./phone-recording.module.css"

type Props = {
	onNext: (phoneNumber: string) => void
	onBack: () => void
}

export default function PhoneRecording({ onNext, onBack }: Props) {
	const [phoneNumber, setPhoneNumber] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [isVisited, setIsVisited] = useState(false)

	const validate = (v: string) => {
		setIsVisited(true)
		if (v.length !== 10) {
			setErrorMessage("מספר הטלפון אינו תקין")
		} else {
			setErrorMessage("")
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>קניית מט״ח באמצעות כרטיס אשראי ובתשלומים</h3>
				<div className={styles.phoneInput}>
					<Input
						type="phoneNumber"
						value={phoneNumber}
						setValue={(v) => setPhoneNumber(v)}
						label="נייד"
						errorMessage={errorMessage}
						isVisited={isVisited}
						validate={validate}
					/>
					<NumericKeypad setValue={(v) => setPhoneNumber((prev) => prev + v)} />
				</div>
			</div>
			<div className={styles.buttons}>
				<Button onClick={onBack} type="outline">
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					ביטול
				</Button>
				<Button onClick={() => onNext(phoneNumber)} disabled={!!errorMessage || !isVisited}>
					אישור
					<Arrow />
				</Button>
			</div>
		</div>
	)
}
