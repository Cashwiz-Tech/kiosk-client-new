import { useEffect, useState } from "react"
import { ReactComponent as SuccessSVG } from "assets/success.svg"
import styles from "./input.module.css"

type Props = {
	value: string
	setValue: (v: string) => void
	placeholder?: string
	label?: string
	validate?: (v: string) => void
	errorMessage?: string
	isVisited?: boolean
	type?: "phoneNumber" | "identityNumber" | "email" | "userName" | "darkon"| "address" | "no_type"
	focus_func?: (v: boolean) => void
}

export default function Input({ value, setValue, placeholder, label, errorMessage, validate, isVisited, type,focus_func }: Props) {
	const [focus, setFocus] = useState(false)

	const success = isVisited && !errorMessage

	useEffect(() => {
		if (type === "email" || type === "userName" || "darkon"){
			setValue(value)
			validate && validate(value)
		} else 
		if (type === "phoneNumber" || value.length > 10) {
			const val = value.replace(/\D/g, "").slice(0, 10)
			setValue(val)
			
			val.length === 10 && validate && validate(value)
		} else if (type === "identityNumber" || value.length > 9) {
			const val = value.replace(/\D/g, "").slice(0, 9)
			setValue(val)
			val.length === 9 && validate && validate(value)
		} else if (!type) {
			setValue(value)
		}
	}, [setValue, type, validate, value])

	const getValue = () => {
		if (type === "phoneNumber") {
			const x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,7})/)
			return x && x[1] ? (!x[2] ? x[1] : x[1] + "-" + x[2]) : ""
		} else {
			return value
		}
	}

	return (
		<div className={styles.inputContainer}>
			{label && <label className={(type=="no_type" ? styles.label_white : styles.label)}>{label}</label>}
			<input
				className={`${styles.input} ${type ? styles[type] : ""}  ${
					errorMessage?.length && !focus ? styles.error : ""
				} ${success ? styles.success : ""}`}
				value={getValue()}
				placeholder={placeholder || ""}
				onChange={(e) => setValue(e.target.value)}
				onFocus={() => {setFocus(true);
					focus_func && focus_func(true)}}
				onBlur={() => {
					setFocus(false)
					validate && validate(value)
				}}
			/>
			{errorMessage && !focus && <p className={styles.errorMessage}>{errorMessage}</p>}
			{success && (
				<div className={(type=="no_type" ? styles.successIcon_no_type : styles.successIcon)}>
					<SuccessSVG />
				</div>
			)}
		</div>
	)
}
