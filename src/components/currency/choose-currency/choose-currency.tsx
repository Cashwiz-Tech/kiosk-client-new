import CurrencyRow from "../currency-row"
import TotalCurrency from "../total-currency"
import styles from "./choose-currency.module.css"

const selectCurrencies = [
	{
		currency: "USD",
		conversion: "3.6545",
		value: 500,
	},
	{
		currency: "EUR",
		conversion: "3.6545",
		value: 0,
	},
]

const confirmCurrencies = [
	{
		currency: "USD",
		conversion: "3.6545",
		value: 1000,
	},
]

type Props = {
	type?: "select" | "confirm"
	totalPayable: number
	totalPayment: number
	countPayments: number
}

export default function ChooseCurrency({ type = "select", totalPayable, totalPayment, countPayments }: Props) {
	return (
		<div className={styles.container}>
			{type === "confirm" && <p className={styles.heading}>סכום הרכישה במט”ח</p>}
			<div className={styles.currencies}>
				{(type === "confirm" ? confirmCurrencies : selectCurrencies).map((c) => (
					<CurrencyRow key={c.currency} currency={c.currency} conversion={c.conversion} value={c.value} type={type} />
				))}
			</div>
			<TotalCurrency
				totalPayable={totalPayable}
				totalPayment={totalPayment}
				countPayments={countPayments}
				type={type}
			/>
		</div>
	)
}
