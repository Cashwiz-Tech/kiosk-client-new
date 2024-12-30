import "./welcome-screen-matah.css";
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
import usd_icon from './../../assets/united states.png'
import euro_icon from './../../assets/euro_icon.png'
import Header from "layouts/header/Header";
import { useEffect, useState } from "react";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";

const WelcomeScreenMatah = () => {
    const dispatch = useAppDispatch();
    
    const [showScreenError, setshowScreenError] = useState(false);
    const [timeoutID, settimeoutID] = useState<any>();

    
	useEffect(() => {
		setTimeout(()=>{
            setshowScreenError(true);
        }, 60000);
	}, []);


    useEffect(() => {
        if(showScreenError==false){
            clearTimeout(timeoutID)
        } else {
            settimeoutID(setTimeout(()=>{
                dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) 
            }, 30000));
        }
    }, [showScreenError]);
        

    return (
        <>
            <Header></Header>
            <div className="WelcomeScreenMatah">
                <div className="WelcomeScreenSecond_first_part">
                    <div className="mid_title">קנייה ומכירת מט"ח</div>
                    

                    <div> 
                        <div className="small_title_cont">
                            <div className="small_title">Sell</div>
                            <div className="small_title">Buy</div>
                            <div className="small_title"></div>
                        </div>
                        <div className="small_title_cont">
                            <div className="b_title">₪ 3,9200</div>
                            <div className="b_title">₪ 3,6800</div>
                            <div className="b_title b_title_one">
                                € 1
                            </div>
                            <img src={euro_icon} className="euro_icon"/>
                        </div>
                        
                        <div className="small_title_cont">
                            <div className="b_title">₪ 3,7000</div>
                            <div className="b_title">₪ 3,4900</div>
                            <div className="b_title b_title_one">
                            $ 1
                            </div>
                            <img src={usd_icon} className="euro_icon"/>
                        </div>
                        

                    </div>


                    <div className="secong_screen_title_cont"> 
                        <img src={change_icon_orange} />
                        <div className="secong_screen_title">שערי המרה משתלמים במיוחד! </div>
                    </div>

                    <button className="start_buy_btn"  onClick={() => { dispatch(setCurrentScreen(Screens.USER_DETAILS))}}> אני רוצה נתחיל ברכישה </button>

                </div>


            </div>

                   <ErrorScrenLeftModal show={showScreenError}
                            setShow={setshowScreenError}/>
                            
        </>
    );

};

export default WelcomeScreenMatah;

