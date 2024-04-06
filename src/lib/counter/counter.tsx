import styles from "./counter.module.css"

type Props = {
	value: number
	setValue: (v: number) => void
	size?: "mini"
}

export default function Counter({ value, setValue, size }: Props) {
	return (
		<div className={`${styles.counter} ${size ? styles[size] : ""}`}>
			<button className={`${styles.button} ${styles.decrement}`} />
			{value}
			<button className={`${styles.button} ${styles.increment}`} />
		</div>
	)
}
