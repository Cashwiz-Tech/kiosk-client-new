import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import RemoveOrderModal from "components/buying/remove-order-modal"
import "./SupplierOrderDetails.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
import x_remove from './../../assets/x_remove.png'
import ApproveToPaymentModal from "components/buying/approve-to-payment-modal/approve-to-payment-modal";

const SupplierOrderDetails = () => {
  const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);
	
  const [timeoutID, settimeoutID] = useState<any>();
  const [fake, setfake] = useState(false);
  const [remove_order_popup, set_remove_order_popup] = useState(false);
  const [show_to_payment_popup, set_show_to_payment_popup] = useState(false);
  
  const [id_remove_order, set_id_remove_order] = useState<any>();
  

  const [orders, setorders] = useState<any>([
    {id:'1',gb:'255GB', price: '64.90' },
    {id:'2',gb:'300GB', price: '69.90' },
    {id:'3',gb:'1,000GB', price: '79.90' }
  ]);

		
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

  function remove_order(){
    set_remove_order_popup(false);
    let orders_t=orders;

      for(let i=0; i<orders_t.length; i++){
        if(id_remove_order==orders_t[i].id){
          orders_t.splice(i, 1);
        }
      }

      setorders(orders_t);
      setfake(!fake);
  }

  function next_page(){
    set_show_to_payment_popup(false);
    dispatch(setCurrentScreen(Screens.SUPPLIER_ORDER_PERSONAL_DETAILS));
  }

  return (
    <div className="main_cont">
    <Header show_logo={false}></Header>
    <div className="container container_dark">
      <div className="currencies-container-d">

        <div className="top_header_cont">
          <p className="title_cont_dark"> פרטי הזמנה</p>
          <button className="add_another_product_btn" onClick={() => {dispatch(setCurrentScreen(Screens.CHOOSE_SUPPLIER))}}>הוספת מוצר נוסף +</button>
        </div>

        {orders.map((item:any, index:any) => 
        <div className="order_box_cont">
          <img src={x_remove} className="x_remove" onClick={()=>{set_remove_order_popup(true); set_id_remove_order(item.id)}}/>
          <div className="order_box">
              <div className="top_sub_text">Bigtalk Private 5G</div>
              <div className="main_box_info_cont">
                  <div>
                    <div className="white_text">גלישה</div>
                    <div className="text_box_blue">{item.gb}</div>
                  </div>

                  <div>
                    <div className="white_text">מספר</div>
                    <div className="text_box_blue">055 568 6978</div>
                  </div>

              </div>

              <div className="price_box_cont">
                  <div className="price_box_text">{item.price}</div>
                  <div className="price_box_subtext">ש”ח</div>
              </div>


          </div>



        </div>
        )}
        
      

      </div>


      <div className="buttons-container-currency-select-matah">

        <button className="to_payment_btn" onClick={()=>set_show_to_payment_popup(true)}>לתשלום</button>

      </div>
    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      
    <RemoveOrderModal show={remove_order_popup} setShowApprove={remove_order}
    setShow={set_remove_order_popup}/>

    <ApproveToPaymentModal show={show_to_payment_popup} setShowApprove={next_page}
    setShow={set_show_to_payment_popup}/>

    </div>

  );
};

export default SupplierOrderDetails;
