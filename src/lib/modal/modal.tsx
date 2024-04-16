import { ReactNode } from "react"
import { createPortal } from "react-dom"
import { ReactComponent as CrossSVG } from "assets/cross.svg"
import styles from "./modal.module.css"

type Props = {
	show: boolean
	setShow: (v: boolean) => void
	children: ReactNode
	header?: JSX.Element
}

export default function Modal({ children, header, show, setShow }: Props) {
	const modalHeader = header || (
		<>
			<div className={styles.crossSVG} onClick={() => setShow(false)}>
				<CrossSVG />
			</div>
		</>
	)

	return createPortal(
		<>
			{show && (
				<div className={`${styles.modal} ${!show ? styles.close : ""}`}>
					<div className={styles.container}>
						<header className={styles.header}>{modalHeader}</header>
						<div className={styles.content}>{children}</div>
					</div>
					<div className={styles.overflow} onClick={() => setShow(false)} />
				</div>
			)}
		</>,
		document.body
	)
}
