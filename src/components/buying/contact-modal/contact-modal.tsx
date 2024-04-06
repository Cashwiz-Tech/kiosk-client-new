import Modal from "lib/modal"
import { ReactComponent as Whatsapp } from "assets/whatsapp.svg"
import { ReactComponent as Clock } from "assets/clock.svg"
import styles from "./contact-modal.module.css"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
	phoneNumber: string
}

export default function ContactModal({ show, setShow, phoneNumber }: Props) {
	return (
		<Modal show={show} setShow={setShow}>
			<div className={styles.modal}>
				<Whatsapp />
				<div className={styles.contact}>דברו איתנו ב - Whatsapp</div>
				<div className={styles.phoneNumber}>{phoneNumber}</div>
				<Clock />
				<span className={styles.time}>{"בימים א׳-ה׳ בין\nהשעות 09:00-18:00"}</span>
			</div>
		</Modal>
	)
}
