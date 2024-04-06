import { ReactNode } from "react"
import styles from "./button.module.css"

type Props = {
	children: ReactNode
	onClick: () => void
	disabled?: boolean
	type?: "primary" | "outline"
}

export default function Button({ children, onClick, disabled, type = "primary" }: Props) {
	return (
		<button className={`${styles.button} ${styles[type]}`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}
