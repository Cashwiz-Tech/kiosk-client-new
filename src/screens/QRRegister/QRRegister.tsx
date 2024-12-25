import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { Screens } from "types/Screens";
import register_qr from "../../assets/register_qr.png";
import styles from "./QRRegister.module.css";
import Header from "layouts/header/Header";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import { useEffect, useState } from "react";

const QRRegister = () => {
  const dispatch = useAppDispatch();

  const [showScreenError, setshowScreenError] = useState(false);
	
	useEffect(() => {
		setTimeout(()=>{
      setshowScreenError(true);
      setTimeout(()=>{
        dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) 
      }, 30000);

    }, 60000);
	}, []);


  function back_to_main() {
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  }

  function scan_qr_register() {
    dispatch(setCurrentScreen(Screens.USER_DETAILS));
  }

  return (
    <div className={styles.main_cont}>
		<Header></Header>
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}> סרוק את הקוד והמשך את ההרשמה במכשירך האישי </h3>

        <img src={register_qr} className={styles.register_qr} />
      </div>

      <button className={styles.back_to_main} onClick={() => back_to_main()}>
        {" "}
        חזרה למסך הבית{" "}
      </button>
    </div>

    <ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
    </div>
  );
};

export default QRRegister;
