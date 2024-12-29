import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import "./FinishMatah.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import is_icon from './../../assets/israel.png'
import insert_matah_icon from './../../assets/insert_matah_icon.png'
import united_states from './../../assets/united states.png'
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
import get_matah_icon from './../../assets/get_matah.png'
import email_icon from './../../assets/email_icon.png'
import success_icon from './../../assets/success.png'




const FinishMatahScreen = () => {
  const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);


  function cancel_btn() {
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  }

  return (
    <div className="main_cont">
    <Header></Header>
    <div className="container">
      <div className="currencies-container">
        <p className="title">
        העסקה בוצעה בהצלחה
        </p>

        <p className="subtitle subtitle_mm">
        ברגעים אלו נשלח אליך מסרון עם פרטי העסקה
        </p>
      
       <img src={success_icon} className="success_icon" />


        <div className="btn_cont">
          <button className="matah_again"> אני רוצה לבצע משיכה נוספת </button>
          <button className="matah_exit" onClick={()=>dispatch(setCurrentScreen(Screens.WELCOME_SCREEN))}> יציאה מהמערכת </button>
        </div>

      </div>
    
    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      

    </div>

  );
};

export default FinishMatahScreen;
