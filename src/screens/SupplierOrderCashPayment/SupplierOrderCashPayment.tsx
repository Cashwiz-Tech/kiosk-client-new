import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import RemoveOrderModal from "components/buying/remove-order-modal"
import "./SupplierOrderCashPayment.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";

import insert_matah_icon from "./../../assets/insert_matah_icon.png"
import cash_type_icon from "./../../assets/cash_type_icon.png"
import email_icon from './../../assets/email_white.png'
import phone_icon from './../../assets/phone_white.png'

const SupplierOrderCashPayment = () => {
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
    <div className="container container_dark">
      <div className="currencies-container-d">

        <div className="top_header_cont_cash_payment">
          <p className="title_cont_dark">סה"כ לתשלום</p>
          <div className="cash_payment_price"> 
            <div className="cash_payment_price_text">350</div>
            <div className="cash_payment_price_subtext">ש”ח</div>
          </div>
         
        </div>

        <div className="cash_type_cont">

          <div className="cash_type_title">מקבלים את השטרות והמטבעות הבאים בלבד</div>
          <img src={cash_type_icon} className="cash_type_icon"/>

          <img src={insert_matah_icon} className="insert_matah_icon"/>

          <div>
              <div className="cash_type_pay_btn" onClick={() => {dispatch(setCurrentScreen(Screens.WAIT_LOADING_DATA))}}> 
                <div className="cash_type_pay_text">שולם</div>
                <div className="cash_type_pay_pricetext">200</div>
                <div className="cash_type_pay_signtext">₪</div>
              </div>

              <div className="cash_type_itra_btn"> 
                <div className="cash_type_pay_text">יתרה</div>
                <div className="cash_type_pay_pricetext">150</div>
                <div className="cash_type_pay_signtext">₪</div>
              </div>


          </div>

        </div>
      
        <button className="return_payment_btn" onClick={() => {dispatch(setCurrentScreen(Screens.CHOOSE_SUPPLIER))}}>החזר תשלום</button>


        <div className="footer_cash_payment">
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

export default SupplierOrderCashPayment;
