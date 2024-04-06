import { ReactComponent as Circles } from "assets/buying/payments-card/circles.svg"
import { ReactComponent as Emblem } from "assets/buying/payments-card/emblem.svg"
import { ReactComponent as Visa } from "assets/buying/payments-card/visa.svg"
import { ReactComponent as Lock } from "assets/buying/payments-card/lock.svg"
import styles from "./payments-card.module.css"

export default function PaymentsCard() {
	return (
		<div className={styles.paymentsCard}>
			<Emblem />
			<Circles />
			<Visa />
			<Lock />
		</div>
	)
}
