import Counter from "lib/counter"
import styles from "./currency-row.module.css"
import { formatPriceComma } from "utils/format-price.ts/format-price"

type Props = {
	currency: string
	value: number
	conversion?: string
	type?: "select" | "confirm"
}

export default function CurrencyRow({ currency, conversion, value, type = "select" }: Props) {
	return (
		<div className={styles.container}>
			<div className={`${styles.currencyRow} ${styles[type]}`}>
				<div className={styles.currencyBlock}>
					<div className={`${styles.currency} ${styles[type]}`}>
						<img src={`/currencies/${currency}.svg`} className={styles.valutaImg} alt="Currency" />
						{currency}
					</div>
					{type !== "confirm" && <div className={styles.conversion}>{`שער המרה: ${conversion}`}</div>}
				</div>
				{type === "confirm" ? (
					<div className={styles.price}>{`$ ${formatPriceComma(value)}`}</div>
				) : (
					<Counter value={value} setValue={() => null} />
				)}
			</div>
			<hr className={`${styles.lineDividers} ${styles[type]}`} />
		</div>
	)
}
