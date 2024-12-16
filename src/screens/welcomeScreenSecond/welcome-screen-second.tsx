import "./welcome-screen-second.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon_orange from './../../assets/change_icon_orange.png'
import card_icon from './../../assets/card_icon.png'
import smart_kiosk from './../../assets/smart_kiosk.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import ICT from './../../assets/ICT-logo-blue 2.png'
import coins from './../../assets/coins.png'
import cash_icon from './../../assets/cash_icon.png' 
import take_icon from './../../assets/take_icon.png' 
import qrcode_icon from './../../assets/qrcode_icon.png'
import left_arrow_orange from './../../assets/left_arrow_orange.png'
import phones_icon from './../../assets/phones_icon.png'

import Header from "layouts/header/Header";

const WelcomeScreenSecond = () => {
    const dispatch = useAppDispatch();
    
    return (
        <>
            <Header></Header>
            <div className="WelcomeScreenSecond">
                <div className="WelcomeScreenSecond_first_part">
                    <div className="mid_title"> קניית מט״ח באמצעות כרטיס אשראי ובתשלומים</div>
                    <img src={usd_eur} />

                    <div className="secong_screen_title_cont"> 
                        <img src={change_icon_orange} />
                        <div className="secong_screen_title">שערי המרה משתלמים במיוחד! </div>

                    </div>

                    <div className="secong_screen_title_cont"> 
                        <img src={card_icon} />
                        <div className="secong_screen_title"> אפשרות לפריסה עד 12 תשלומים. </div>

                    </div>

                    <button className="start_buy_btn"  onClick={() => { dispatch(setCurrentScreen(Screens.USER_DETAILS))}}> אני רוצה נתחיל ברכישה </button>

                </div>


                <div className="WelcomeScreenSecond_sec_part">
                <div className="mid_title">ניתן גם לבצע את הרכישה באתר 
                ולאסוף את הכסף בזמן שנוח עבורך </div>

                    <div className="images_phones_cont"> 
                        <img src={phones_icon} />
                        <img src={left_arrow_orange}  className="left_arrow_orange"/>
                        <div className="qrcode_icon_cont"> 
                            <img src={qrcode_icon} />
                            <div className="site_address">www.cashwiz.co.il</div>
                        </div> 
                    </div>

                </div>
               
            </div>
        </>
    );

};

export default WelcomeScreenSecond;

