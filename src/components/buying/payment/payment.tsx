import { ReactComponent as BuyingSVG } from "assets/buying/buying.svg"
import { ReactComponent as ExchangeSVG } from "assets/buying/exchange.svg"
import { ReactComponent as CardSVG } from "assets/buying/card.svg"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import PaymentsCard from "components/buying/payments-card"
import Button from "lib/button"
import styles from "./payment.module.css"

type Props = {
	setStep: (step: number) => void
	setIsShowOnBoarding: (v: boolean) => void
}

export default function Payment({ setStep, setIsShowOnBoarding }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>{"קניית מט״ח\n באמצעות כרטיס אשראי ובתשלומים"}</div>
				<div className={styles.buyingSVG}>
					<BuyingSVG />
				</div>
				<div className={styles.operations}>
					<div className={styles.operation}>
						<ExchangeSVG />
						<span className={styles.text}>שערי המרה משתלמים במיוחד!</span>
					</div>
					<div className={styles.operation}>
						<CardSVG />
						<span className={styles.text}>אפשרות לפריסה עד 12 תשלומים.</span>
					</div>
				</div>
				<div className={styles.paymentsCard}>
					<PaymentsCard />
				</div>
				<div className={styles.buttons}>
					<Button onClick={() => setIsShowOnBoarding(true)} type="outline">
						איך זה עובד?
					</Button>
					<Button onClick={() => setStep(1)}>
						אני רוצה לבצע רכישה <Arrow />
					</Button>
				</div>
			</div>
		</div>
	)
}
