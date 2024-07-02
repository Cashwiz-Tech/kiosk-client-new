import { CSSProperties, ReactNode } from "react"
import styles from "./button.module.css"

type Props = {
	children: ReactNode
	onClick: () => void
	disabled?: boolean
	type?: "primary" | "outline"
	style?: CSSProperties
}

export default function Button({ children, onClick, disabled, type = "primary", style }: Props) {
	return (
		<button className={`${styles.button} ${styles[type]}`} style={style} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}
