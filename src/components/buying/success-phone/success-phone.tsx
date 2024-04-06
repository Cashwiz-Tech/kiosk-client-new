import { ReactComponent as SuccessCircle } from "assets/success-circle.svg"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./success-phone.module.css"
import Button from "lib/button"

type Props = {
	onBack: () => void
}

export default function SuccessPhone({ onBack }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<SuccessCircle />
				<h2 className={styles.title}>פנייתך התקבלה, ברגעים אלה נשלח אליך קישור להרשמה</h2>
				<p className={styles.text}>בסיום התהליך חזור לכאן ותוכל לבצע את הרכישה.</p>
			</div>
			<div className={styles.btn}>
				<Button type="outline" onClick={onBack}>
					<div className={styles.arrowRight}>
						<Arrow />
					</div>
					לדף הבית
				</Button>
			</div>
		</div>
	)
}
