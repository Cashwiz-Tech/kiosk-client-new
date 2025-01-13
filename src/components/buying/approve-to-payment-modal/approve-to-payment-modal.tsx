import Modal from "lib/modal"

import styles from "./approve-to-payment-modal.module.css"
import error_image from "../../../assets/error_img.png"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
	setShowApprove: (v: boolean) => void
}

export default function ApproveToPaymentModal({ show, setShow,setShowApprove }: Props) {

	return (
		<Modal show={show} setShow={setShow}>
			<div className={styles.modal}>
			
				<div className={styles.contact}> את/ה רוצה להמשיך לתשלום? </div>
			
				<div className={styles.buttons_cont}>
					<button className={styles.try_again} onClick={()=>setShowApprove(false)}>כן</button>
					<button className={styles.try_again_no} onClick={()=>setShow(false)}>לא</button>
				</div>
			</div>
		</Modal>
	)
}
