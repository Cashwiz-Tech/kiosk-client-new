import { ReactNode } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import  PowerBy  from "assets/smart_kiosk_logo.png";
import styles from "./main-layout.module.css";
import settings_icon from 'assets/settings_icon.png'
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import { useAppDispatch } from "store/store";
type Props = {
  setShow: (val: boolean) => void;
  children: ReactNode;
};

export default function MainLayout({ children, setShow }: Props) {
    const dispatch = useAppDispatch();
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
          <p className="white-text">03-3851420</p>
          <p className={styles.stick + " white-text"}>|</p>
          <p className="white-text">בקרו אותנו: www.smartech.co.il</p>
        </div>
       
        <div className={styles.powerBy}>
          <img src={PowerBy} className={styles.PowerBy}/>
           :Power by
        </div>
        
         <div className={styles.settings_icon_cont} onClick={() => { dispatch(setCurrentScreen(Screens.OPERATION_SYSTEM))}}> <img src={settings_icon} /></div>
      </footer>
    </div>
  );
}
