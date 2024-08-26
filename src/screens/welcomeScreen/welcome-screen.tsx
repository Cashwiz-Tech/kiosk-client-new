import "./welcome-screen.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon from './../../assets/change_icon.png'
import credit_card_icon from './../../assets/credit_card_icon.png'
import barcode from './../../assets/barcode.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";

const WelcomeScreen = () => {
    const dispatch = useAppDispatch();
    
    return (
        <div className="WelcomeScreen">
            <p className="title"> קניית מט״ח באמצעות כרטיס אשראי ובתשלומים</p>
            <img src={usd_eur} className="usd_eur" />

            <div className="small_title_cont"> 
                <p className="small_title"> שערי המרה משתלמים במיוחד! </p>
                <img src={change_icon} />
            </div>
            
            <div className="small_title_cont"> 
                <p className="small_title">אפשרות לפריסה עד 12 תשלומים. </p>
                <img src={credit_card_icon} />
            </div>

            <div className="mid_box"> 
                <p className="mid_title"> ניתן גם לבצע את הרכישה באתר 
                ולאסוף את הכסף בזמן שנוח עבורך  </p>

                <img src={barcode} />

                <p className="mid_title"> www.cashwiz.co.il </p>    
            </div>

            <div className="all_btns">
                <div className="top_btn_cont"> 
                    <button className="how_work"> ?איך זה עובד</button>
                    <button  className="start" onClick={() => { dispatch(setCurrentScreen(Screens.USER_DETAILS))}}> אני רוצה  נתחיל ברכישה </button>
                </div>

                <button className="qr_btn"> איסוף באמצעות קוד  QR </button>

            </div>



         </div>
    );

};

export default WelcomeScreen;

