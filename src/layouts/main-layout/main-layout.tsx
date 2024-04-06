import { ReactNode } from "react"
import { ReactComponent as Logo } from "assets/logo.svg"
import { ReactComponent as PowerBy } from "assets/power-by.svg"
import styles from "./main-layout.module.css"

type Props = {
	children: ReactNode
}

export default function MainLayout({ children }: Props) {
	return (
		<div className={styles.layout}>
			<header>
				<div className={styles.logo}>{<Logo />}</div>
			</header>
			<div className={styles.children} dir="rtl">
				{children}
			</div>
			<footer className={styles.footer}>
				<div className={styles.contacts}>
					<p className={styles.link}>צריך עזרה?</p>
					<p className={styles.stick}>|</p>
					<p>077225643</p>
					<p className={styles.stick}>|</p>
					<p>בקרו אותנו באתר: www.cashwis.co.il</p>
				</div>
				<div className={styles.powerBy}>
					<PowerBy /> :Power by
				</div>
			</footer>
		</div>
	)
}
