import Modal from "lib/modal"

import styles from "./not-equal-modal.module.css"
import error_image from "../../../assets/err_not_equal.png"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
}

export default function NotEqualModal({ show, setShow }: Props) {

	return (
		<Modal show={show} setShow={setShow}>
			<div className={styles.modal}>
				<img src={error_image} className="err_img"/>
				<div className={styles.contact}> המספרים לא זהים </div>
				<div className={styles.contact}> נא להקליד מספר שנית! </div>
			
			
			</div>
		</Modal>
	)
}
