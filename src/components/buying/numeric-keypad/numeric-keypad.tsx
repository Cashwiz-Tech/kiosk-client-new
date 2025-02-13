import styles from "./numeric-keypad.module.css"
import approve from '../../../assets/approve.png'
import cancel from '../../../assets/key_del.png'
type Props = {
	setValue: (v: string) => void
	cancel_caracter: (v: string) => void
	color?:string

}

export default function NumericKeypad({color, setValue, cancel_caracter }: Props) {

	return (
		<div className={(color && color=="white"? styles.container_white: styles.container)}>
			<div className={styles.keypad} dir="ltr">
				{Array.from({ length: 9 }, (v, idx) => (
					<div className={styles.key} key={idx} onClick={() => setValue(`${idx + 1}`)}>
						{idx + 1}
					</div>
				))}
				<div  onClick={() => setValue("")}>
					{/* <div className={styles.approve}>
						<img src={approve} />
					</div> */}
				</div>
				<div className={styles.key} onClick={() => setValue("0")}>
					0
				</div>
				<div  onClick={() => cancel_caracter('')}>
					<div className={styles.cancel}>
						<img src={cancel} />
					</div>
				</div>
			</div>
		</div>
	)
}
