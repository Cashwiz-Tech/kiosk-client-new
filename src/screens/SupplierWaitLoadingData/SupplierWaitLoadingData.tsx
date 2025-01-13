import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import RemoveOrderModal from "components/buying/remove-order-modal"
import "./SupplierWaitLoadingData.css";
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
import wait_time_icon from './../../assets/wait_time_icon.png'

const SupplierWaitLoadingData = () => {
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
    <div className="container container_white">
      <div className="currencies-container-d">

        <div className="top_header_cont_cash_payment">
          <p className="title_cont_wait">טוען נתונים, רק רגע...</p>
          <img src={wait_time_icon} className="wait_time_icon" onClick={() => {dispatch(setCurrentScreen(Screens.TAKE_REST_PAYMENT))}}/>
          
        </div>


      </div>
    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      
    </div>

  );
};

export default SupplierWaitLoadingData;
