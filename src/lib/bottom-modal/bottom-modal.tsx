import { ReactNode } from "react"
import { ReactComponent as CrossSVG } from "assets/cross.svg"
import styles from "./bottom-modal.module.css"

type Props = {
	children: ReactNode
	show: boolean
	setShow: (v: boolean) => void
	header?: JSX.Element
	footer?: JSX.Element
}

export default function BottomModal({ children, show, setShow, header, footer }: Props) {
	const modalHeader = header || (
		<>
			<div className={styles.crossSVG} onClick={() => setShow(false)}>
				<CrossSVG />
			</div>
		</>
	)

	return (
		<div className={`${styles.modal} ${!show ? styles.close : ""}`}>
			<div className={styles.container}>
				<header className={styles.header}>{modalHeader}</header>
				<div className={styles.content}>{children}</div>
				{footer && <footer className={styles.footer}>{footer}</footer>}
			</div>
			<div className={styles.overflow} />
		</div>
	)
}
