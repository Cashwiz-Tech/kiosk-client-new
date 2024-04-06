import styles from "./numeric-keypad.module.css"

type Props = {
	setValue: (v: string) => void
}

export default function NumericKeypad({ setValue }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.keypad} dir="ltr">
				{Array.from({ length: 9 }, (v, idx) => (
					<div className={styles.key} key={idx} onClick={() => setValue(`${idx + 1}`)}>
						{idx + 1}
					</div>
				))}
				<div className={styles.key} onClick={() => setValue("+")}>
					+
				</div>
				<div className={styles.key} onClick={() => setValue("0")}>
					0
				</div>
				<div className={styles.key} onClick={() => setValue("#")}>
					#
				</div>
			</div>
		</div>
	)
}
