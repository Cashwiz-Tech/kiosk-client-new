import Modal from "lib/modal"

import styles from "./error-modal.module.css"
import error_image from "../../../assets/error_img.png"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
	
}

export default function ErrorModal({ show, setShow }: Props) {

	return (
		<Modal show={show} setShow={setShow}>
			<div className={styles.modal}>
				<img src={error_image} />
				<div className={styles.contact}> הקוד לא תקין </div>
			
				<button className={styles.try_again} onClick={()=>setShow(false)}> נסה שוב </button>
			</div>
		</Modal>
	)
}
