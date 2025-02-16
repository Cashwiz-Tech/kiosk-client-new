import styles from "./letters-keypad.module.css"
import approve from '../../../assets/approve.png'
import cancel from '../../../assets/cancel.png'
import { useState } from "react"
type Props = {
	setValue: (v: string) => void
	cancel_caracter?: (v: string) => void
	gray_color?: string
}

export default function LettersKeypad({ setValue, cancel_caracter,gray_color }: Props) {

	const [lenguage, setlenguage] = useState("he");

	return (
		<div className={styles.container +' ' +(gray_color && gray_color=="gray_color" ? styles.container_gray: '')}>
			<div className={styles.line}>
			
				{/* <div  className={styles.btn_letter} onClick={() => setValue('@')}> @</div> */}
				<div  className={styles.btn_letter} onClick={() => setValue('1')}> 1</div>
				<div  className={styles.btn_letter} onClick={() => setValue('2')}> 2</div>
				<div  className={styles.btn_letter} onClick={() => setValue('3')}> 3</div>
				<div  className={styles.btn_letter} onClick={() => setValue('4')}> 4</div>
				<div  className={styles.btn_letter} onClick={() => setValue('5')}> 5</div>
				<div  className={styles.btn_letter} onClick={() => setValue('6')}> 6</div>
				<div  className={styles.btn_letter} onClick={() => setValue('7')}> 7</div>
				<div  className={styles.btn_letter} onClick={() => setValue('8')}> 8</div>
				<div  className={styles.btn_letter} onClick={() => setValue('9')}> 9</div>
				<div  className={styles.btn_letter} onClick={() => setValue('0')}> 0</div>
				
				{/* <div  className={styles.backspace} onClick={() =>cancel_caracter && cancel_caracter('')}> </div> */}
			</div>
		{lenguage=='he'? <>
			<div className={styles.line}>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ק')}> ק</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ר')}> ר</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('א')}> א</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ט')}> ט</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ו')}> ו</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ן')}> ן</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ם')}> ם</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('פ')}> פ</div>
			</div>

			<div className={styles.line}>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ש')}> ש</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ד')}> ד</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ג')}> ג</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('כ')}> כ</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ע')}> ע</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('י')}> י</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ח')}> ח</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ל')}> ל</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ך')}> ך</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ף')}> ף</div>
			</div>


			<div className={styles.line}>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ז')}> ז</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ס')}> ס</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ב')}> ב</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ה')}> ה</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('נ')}> נ</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('מ')}> מ</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('צ')}> צ</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ת')}> ת</div>
				<div  className={styles.btn_letter_1} onClick={() => setValue('ץ')}> ץ</div>
				<div  className={styles.backspace} onClick={() =>cancel_caracter && cancel_caracter('')}> </div>
				{/* <div  className={styles.btn_letter_1} onClick={() => setlenguage('en')}> en</div> */}
			</div>
		</>
		: <>
		<div className={styles.line}>
			<div  className={styles.btn_letter_1} onClick={() => setValue('q')}> q</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('w')}> w</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('e')}> e</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('r')}> r</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('t')}> t</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('y')}> y</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('u')}> u</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('i')}> i</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('o')}> o</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('p')}> p</div>
		</div>

		<div className={styles.line}>
			<div  className={styles.btn_letter_1} onClick={() => setValue('a')}> a</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('s')}> s</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('d')}> d</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('f')}> f</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('g')}> g</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('h')}> h</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('j')}> j</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('k')}> k</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('l')}> l</div>
	
		</div>


		<div className={styles.line}>
			<div  className={styles.btn_letter_1} onClick={() => setValue('z')}> z</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('x')}> x</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('c')}> c</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('v')}> v</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('b')}> b</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('n')}> n</div>
			<div  className={styles.btn_letter_1} onClick={() => setValue('m')}> m</div>

			<div  className={styles.btn_letter_1} onClick={() => setlenguage('he')}> עב</div>
		</div>
	</>}

		<div className={styles.line}>
		{lenguage=='he'? <div  className={styles.long_space} onClick={() => setValue(' ')}>רווח</div> :  <div  className={styles.long_space} onClick={() => setValue(' ')}>space</div>  }
			{/* <div  className={styles.btn_letter} onClick={() => setValue('.')}> .</div> */}
		</div>

		</div>
	)
}
