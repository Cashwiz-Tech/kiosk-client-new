import Modal from "lib/modal"

import styles from "./error-modal-times.module.css"
import error_image from "../../../assets/error_img.png"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
	
}

export default function ErrorTimesModal({ show, setShow }: Props) {

	return (
		<Modal show={show} setShow={setShow}>
			<div className={styles.modal}>
				<img src={error_image} />
				<div className={styles.contact}> הקוד לא תקין </div>

				<p className={styles.subTitle}>עברת את מספר הנסיונות המותר,
				אנא הכנס מחדש את מספר הטלפון </p>
			
				<button className={styles.try_again} onClick={()=>setShow(false)}> אישור </button>
			</div>
		</Modal>
	)
}
