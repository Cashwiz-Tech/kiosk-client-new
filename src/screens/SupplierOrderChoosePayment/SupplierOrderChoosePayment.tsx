import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import RemoveOrderModal from "components/buying/remove-order-modal"
import "./SupplierOrderChoosePayment.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import { setSelectedCurrency, setSelectedCurrencyAmount } from "store/currencySlice";
import cash_blue from "./../../assets/cash_blue.png"
import card_blue from "./../../assets/card_blue.png"

const SupplierOrderChoosePayment = () => {
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

        <div className="top_header_cont_choose_payment">
          <p className="title_cont_dark">בחר אמצעי תשלום</p>
          <button className="add_another_product_btn" onClick={() => {dispatch(setCurrentScreen(Screens.CHOOSE_SUPPLIER))}}>הוספת מוצר נוסף +</button>
        </div>

        <div className="cash_btn_cont">

          <div className="cash_btn" onClick={() => {dispatch(setCurrentScreen(Screens.SUPPLIER_ORDER_CASH_PAYMENT))}}> 
              <img src={cash_blue} className="cash_icon"/>
              <div className="cash_btn_text">מזומן</div>
          </div>


          <div className="cash_btn"  onClick={() => {

                dispatch(
                  setSelectedCurrencyAmount(1)
                );

                dispatch(
                  setSelectedCurrency("USD")
                );

                dispatch(setCurrentScreen(Screens.PAYMENT))}}> 
              <img src={card_blue} className="cash_icon"/>
              <div className="cash_btn_text">אשראי</div>
          </div>

        </div>

      </div>


    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      
    </div>

  );
};

export default SupplierOrderChoosePayment;
