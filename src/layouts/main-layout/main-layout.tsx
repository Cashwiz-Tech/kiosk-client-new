import { ReactNode } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import  PowerBy  from "assets/smart_kiosk_logo.png";
import styles from "./main-layout.module.css";
import settings_icon from 'assets/settings_icon.png'
type Props = {
  setShow: (val: boolean) => void;
  children: ReactNode;
};

export default function MainLayout({ children, setShow }: Props) {
  return (
    <div className={styles.layout}>
      <header>
        {/* <div className={styles.logo}>{<Logo />}</div> */}
      </header>
      <div className={styles.children} dir="rtl">
        {children}
      </div>
      <footer className={styles.footer}>
        <div className={styles.contacts}>
          <p
            className={styles.link + " white-text"}
            onClick={() => setShow(true)}
          >
            צריך עזרה?
          </p>
          <p className={styles.stick + " white-text"}>|</p>
          <p className="white-text">077225643</p>
          <p className={styles.stick + " white-text"}>|</p>
          <p className="white-text">בקרו אותנו באתר: www.cashwis.co.il</p>
        </div>
       
        <div className={styles.powerBy}>
          <img src={PowerBy} />
           :Power by
        </div>
        
         <div className={styles.settings_icon_cont}> <img src={settings_icon} /></div>
      </footer>
    </div>
  );
}
