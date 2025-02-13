import styles from "./numeric-keypad-small.module.css"

import cancel_white from '../../../assets/cancel_white.png'
type Props = {
	setValue: (v: string) => void
	cancel_caracter: () => void
}

export default function NumericKeypadSmall({ setValue, cancel_caracter }: Props) {

	return (
		<div className={styles.container}>
			
			<div className={styles.keypad} dir="ltr">
                        {Array.from({ length: 9 }, (v, idx) => (
                            <div className={styles.key} key={idx} onClick={() => setValue(`${idx + 1}`)}>
                                {idx + 1}
                            </div>
                        ))}
                       
                        <div className={styles.key} onClick={() => setValue("0")}>
                            0
                        </div>
                        <div  onClick={() => cancel_caracter()}>
                            <div className={styles.key +' ' +styles.cancel_white }>
                                <img src={cancel_white} className={styles.cancel_white_icon}/>
                            </div>
                        </div>
                    </div>
		</div>
	)
}
