import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import "./GetMatah.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import is_icon from './../../assets/israel.png'
import insert_matah_icon from './../../assets/insert_matah_icon.png'
import united_states from './../../assets/united states.png'
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
import get_matah_icon from './../../assets/get_matah.png'
import email_icon from './../../assets/email_icon.png'
import phone_icon from './../../assets/phone_s.png'




const GetMatahScreen = () => {
  const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);
  const typeScreen = useAppSelector((state) => state.navigation.typeScreen);
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
  


  function cancel_btn() {
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  }

  return (
    <div className="main_cont">
    <Header></Header>
    <div className="container">
      <div className="currencies-container">
        <p className="title">
        המתן להוצאת השטרות
        </p>

        {/* <p className="subtitle">
        ברגעים אלו נשלח אליך מסרון עם פרטי העסקה
        </p> */}
      
       <img src={get_matah_icon} className="get_matah_icon" onClick={()=>typeScreen=='matah'? dispatch(setCurrentScreen(Screens.FINISH_MATAH)): dispatch(setCurrentScreen(Screens.CHECKOUT_FINISH))}/>


      <div className="footer_matah">
        <div> לכל שאלה אנחנו זמינים עבורך</div>

        <div><img src={email_icon} className="e_icom"/>support@cashwiz.co.il
        
        </div>

        <div><img src={phone_icon}  className="e_icom"/>03-55555555
        
        </div>


      </div>


      </div>
    
    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      

    </div>

  );
};

export default GetMatahScreen;
