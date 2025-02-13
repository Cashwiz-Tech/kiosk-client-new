import "./welcome-screen-new.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon from './../../assets/change_icon.png'
import credit_card_icon from './../../assets/credit_card_icon.png'
import smart_kiosk from './../../assets/smart_kiosk.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import ICT from './../../assets/ICT-logo-blue 2.png'
import coins from './../../assets/coins.png'
import cash_icon from './../../assets/cash_icon.png'
import take_icon from './../../assets/take_icon.png'
import load_card_icon from './../../assets/load_card_icon.png'
import once_code_icon from './../../assets/once_code_icon.png'
import virtual_coin_icon from './../../assets/virtual_coin_icon.png'
import pay_express_icon from './../../assets/pay_express_icon.png'
import { setService } from "store/serviceSlice";
import { Services } from "types/Services";

const WelcomeScreenNew = () => {
  const dispatch = useAppDispatch();

  const handleCashwiz = () => {
    dispatch(setService(Services.Cashwiz));
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN_SECOND));
  }

  return (
    <div className="WelcomeScreenNew">
      <header className="header_cont">
        <img src={smart_kiosk} className="smart_kiosk" />
        <h1 className="head_title"> היי, מה ברצונך לבצע? </h1>
      </header>

      <div className="mid_title"> העברות לחו”ל </div>

      <div className="action_btn_cont_line">
        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={ICT} className="ict" />
          </div>
          <div className="action_btn_text"> העברות כספים לחו”ל</div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">
          </div>

          <div className="action_btn_text"> העברות כספים לחו”ל</div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">
          </div>

          <div className="action_btn_text"> העברות כספים לחו”ל</div>
        </div>
      </div>

      <div className="mid_title"> רכישות מט”ח</div>

      <div className="action_btn_cont_line">
        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={coins} className="ict" />
          </div>
          <div className="action_btn_text">המרת מטבע</div>
        </div>

        <div className="action_btn_cont" onClick={handleCashwiz}>
          <div className="action_btn">
            <img src={cash_icon} className="ict" />
          </div>

          <div className="action_btn_text"> לרכוש מט"ח בכרטיס אשראי</div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={take_icon} className="ict" />
          </div>

          <div className="action_btn_text">לאסוף את מט"ח שרכשתי באתר</div>
        </div>

      </div>

      <div className="mid_title">הטענה כרטיסי אשראי</div>

      <div className="action_btn_cont_line">
        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={load_card_icon} className="ict" />
          </div>
          <div className="action_btn_text">  להטעין כרטיס פריפייד </div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={once_code_icon} className="ict" />
          </div>

          <div className="action_btn_text"> משיכה באמצעות קוד חד פעמי</div>
        </div>


        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={virtual_coin_icon} className="ict" />
          </div>

          <div className="action_btn_text"> מטבעות וירטואליות רכישה/מכירה</div>
        </div>

      </div>

      <div className="mid_title"> תשלומים </div>

      <div className="action_btn_cont_line">
        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={pay_express_icon} className="pay_express_icon" />
          </div>
          <div className="action_btn_text"> לשלם חשבונות</div>
          <div className="action_btn_text_small"> תשלומים, תחבורה טעינת סלולר</div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">

          </div>

          <div className="action_btn_text"> לשלם חשבונות</div>
        </div>


        <div className="action_btn_cont">
          <div className="action_btn">

          </div>

          <div className="action_btn_text"> לשלם חשבונות</div>
          <div className="action_btn_text_small"> תשלומים, תחבורה טעינת סלולר</div>
        </div>

      </div>

    </div>
  );
};

export default WelcomeScreenNew;

