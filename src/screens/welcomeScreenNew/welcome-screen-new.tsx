import "./welcome-screen-new.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon from './../../assets/change_icon.png'
import credit_card_icon from './../../assets/credit_card_icon.png'
import smart_kiosk from './../../assets/smart_kiosk.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen, setTypeScreen } from "store/navigationSlice";
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
import buyme from './../../assets/buyme.png'
import passportcard from './../../assets/passportcard.png'
import w_finance from './../../assets/w_finance.png'
import rewire from './../../assets/rewire.png'
import w_union from './../../assets/w_union.png'
import mony_send from './../../assets/mony_send.png'
import { useState } from "react";
import arrow_r from './../../assets/arrow_r.png'
import arrow_l from './../../assets/arrow_l.png'
import progress_p from './../../assets/progress_p.png'
import progress_w from './../../assets/progress_w.png'

const WelcomeScreenNew = () => {
  const dispatch = useAppDispatch();

  const handleCashwiz = () => {
    dispatch(setService(Services.Cashwiz));
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN_SECOND));
  }

    const [top_part, settop_part] = useState<boolean>(true)

  return (
    <div className="WelcomeScreenNew">
      <header className="header_cont">
        <img src={smart_kiosk} className="smart_kiosk" />
        <h1 className="head_title"> היי, מה ברצונך לבצע? </h1>
      </header>

      <div className="mid_title"> העברות לחו”ל </div>

            

            {top_part? 
      <div className="action_btn_cont_line">

                <img src={arrow_r} className="arrow_r" onClick={()=>settop_part(!top_part)}/>

        <div className="action_btn_cont">
          <div className="action_btn">
            <img src={ICT} className="ict" />
          </div>
          <div className="action_btn_text"> העברות כספים לחו”ל</div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">
                        <img src={w_finance} className="w_finance"/>          </div>

          <div className="action_btn_text"> העברות כספים לחו”ל</div>
        </div>

        <div className="action_btn_cont">
          <div className="action_btn">
                        <img src={rewire} className="rewire"/>
                    </div>

                    <div className="action_btn_text"> העברות כספים לחו”ל</div>
                </div>

                <img src={arrow_l} className="arrow_l"  onClick={()=>settop_part(!top_part)}/>
            </div>:



            <div className="action_btn_cont_line"> 
              <img src={arrow_r} className="arrow_r" onClick={()=>settop_part(!top_part)}/>
                <div className="action_btn_cont"> 
                    <div className="action_btn">
                        <img src={w_union} className="w_union"/>
                    </div>
                    <div className="action_btn_text"> העברות כספים לחו”ל</div>
                </div>

                <div className="action_btn_cont"> 
                    <div className="action_btn">
                        <img src={mony_send} className="mony_send"/>          </div>

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
     <img src={buyme} className="buyme"/>
          </div>

          <div className="action_btn_text">מתנות לכל אירוע</div>
        </div>


        <div className="action_btn_cont">
          <div className="action_btn">
                    <img src={passportcard} className="passportcard"/>
          </div>

          <div className="action_btn_text">ביטוח נסיעות לחו"ל</div>
          {/* <div className="action_btn_text_small"> תשלומים, תחבורה טעינת סלולר</div> */}
        </div>

      </div>

    </div>
  );
};

export default WelcomeScreenNew;

