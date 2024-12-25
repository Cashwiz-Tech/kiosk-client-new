import Modal from "lib/modal"

import styles from "./error-modal-screen-left.module.css"
import error_image from "../../../assets/error_img.png"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"
import { useAppDispatch } from "store/store"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
	
}

export default function ErrorScrenLeftModal({ show, setShow }: Props) {
  const dispatch = useAppDispatch();
	return (
		<Modal show={show} setShow={setShow}>
			<div className={styles.modal}>
				{/* <img src={error_image} /> */}
				<div className={styles.contact}> עדיין כאן? </div>
				<div className={styles.contact}> ברצונך להמשיך? </div>

				<div className={styles.buttons_cont}>
					<button className={styles.try_again} onClick={()=>setShow(false)}> כן </button>
					<button className={styles.try_again_no} onClick={()=>{setShow(false); dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) }}> לא </button>
				</div>
			</div>
		</Modal>
	)
}
