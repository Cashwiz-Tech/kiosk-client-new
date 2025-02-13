import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import RemoveOrderModal from "components/buying/remove-order-modal"
import "./SupplierTakeRestPayment.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";

import insert_matah_icon from "./../../assets/insert_matah_icon.png"
import phone_icon from "./../../assets/phone_s.png"
import email_icon from './../../assets/email_icon.png'
import take_rest_icon from './../../assets/take_rest_icon.png'

const SupplierTakeRestPayment = () => {
  const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);
	
  const [timeoutID, settimeoutID] = useState<any>();
  const [fake, setfake] = useState(false);



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
    <div className="main_cont">
    <Header show_logo={false}></Header>
    <div className="container container_white_rest">
      <div className="currencies-container-d">

        <div className="top_header_cont_cash_payment">
          <p className="title_cont_rest">בבקשה לקחת את העודף</p>
          <img src={take_rest_icon} className="take_rest_icon"/>
          

          
              <div className="cash_type_itra_btn" onClick={() => {dispatch(setCurrentScreen(Screens.FINISH_MATAH))}}> 
                <div className="cash_type_pay_text">יתרה</div>
                <div className="cash_type_pay_pricetext">150</div>
                <div className="cash_type_pay_signtext">₪</div>
              </div>


              <div className="footer_matah">
                <div> לכל שאלה אנחנו זמינים עבורך</div>

                <div><img src={email_icon} className="e_icom"/>support@cashwiz.co.il
                
                </div>

                <div><img src={phone_icon}  className="e_icom"/>03-55555555
                
                </div>


              </div>

        </div>


      </div>
    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      
    </div>

  );
};

export default SupplierTakeRestPayment;
