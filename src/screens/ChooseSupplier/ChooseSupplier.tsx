import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import "./ChooseSupplier.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";

import partner from './../../assets/partner.png'
import pelephon from './../../assets/pelephon.png'
import cellcom from './../../assets/cellcom.png'
import talk_012 from './../../assets/012_talk.png'
import golan from './../../assets/golan.png'
import smile_012 from './../../assets/smile_012.png'
import text_vioce from './../../assets/text_vioce.png'
import global_sim from './../../assets/global_sim.png'
import jawwal from './../../assets/jawwal.png'
import Carmel_Tunnels_logo from './../../assets/Carmel_Tunnels_logo.png'
import load_elec from './../../assets/load_elec.png'
import pay_elec from './../../assets/pay_elec.png'
import Kevish_6 from './../../assets/Kevish_6.png'
import arrow_l_blue from './../../assets/arrow_l_blue.png'
import arrow_r from './../../assets/arrow_r.png'

import arrow_l from './../../assets/arrow_l.png'
import NumericKeypad from "components/buying/numeric-keypad/numeric-keypad";
import NotEqualModal from "components/buying/not-equal-modal/not-equal-modal";



const ChooseSupplier = () => {
  const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);
  const [showNumToLoad, setshowNumToLoad] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("")
	const [phoneNumber2, setPhoneNumber2] = useState<string>("")
  const [show_err_not_equal, setshow_err_not_equal] = useState(false);
  const [show_my_orders, setshow_my_orders] = useState(false);
  
  const [timeoutID, settimeoutID] = useState<any>();

  useEffect(() => {
    if (phoneNumber==phoneNumber2 && phoneNumber2.length==10){
      setshowNumToLoad(false);
      setshow_my_orders(true);
    }

    if (phoneNumber!=phoneNumber2 && phoneNumber2.length==10 && phoneNumber.length==10){
      setshow_err_not_equal(true);
    }
	}, [phoneNumber,phoneNumber2]);

						
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


  function cancel_caracter(){
		let str = phoneNumber.substring(0, phoneNumber.length - 1);
		setPhoneNumber(str)
	}


  function cancel_caracter2(){
		let str = phoneNumber2.substring(0, phoneNumber2.length - 1);
		setPhoneNumber2(str)
	}


  return (
    <div className="main_cont">
    <Header show_logo={false}></Header>
    <div className="container container_dark">
      <div className="currencies-container-d">
        <p className="title_cont_dark">בחירת ספק שירות</p>
        
        <div className="choose_supplier_cont">
            <div className="celular_bil_cont_supplier">
              <div className="celular_bil_icon partner">
                  <img src={partner} className="partner_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={pelephon} className="pelephon_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={cellcom} className="cellcom_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={talk_012} className="talk_012_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={golan} className="golan_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={smile_012} className="smile_012_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={text_vioce} className="text_voice_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={global_sim} className="global_sim_icon"/>
              </div>

              <div className="celular_bil_icon">
                  <img src={jawwal} className="jawwal_icon"/>
              </div>

            </div>

            <div className="supplier_option_cont">
                <div className="supplier_option_box" onClick={()=>setshowNumToLoad(true)}> 
                    <div className="supplier_option_box_top"> 
                      <div className="supplier_option_box_top_title">Bigtalk Private 5G</div>
                      <div className="supplier_option_box_top_subtitle">גלישה</div>

                      <div className="supplier_option_box_gb">225GB</div>
                    </div>

                    <div className="price_cont">
                      <div  className="price_box"> 64.90 </div>
                      <div  className="price_subbox"> ש”ח</div>
                    </div>


                    <div className="box_text_info">
                    3,500 דקות בישראל <br/>
                    1,500 הודעות SMS בישראל<br/>
                    בתוקף ל-30 ימים ממועד טעינת הכרטיס
                    </div>


                    <button className="insert_btn">הזן מספר לטעינה</button>

                    <div className="add_to_order">הוסף להזמנה</div>

                </div>

                <div className="supplier_option_box"> 
                    <div className="supplier_option_box_top"> 
                      <div className="supplier_option_box_top_title">Bigtalk Private 5G</div>
                      <div className="supplier_option_box_top_subtitle">גלישה</div>

                      <div className="supplier_option_box_gb">300GB</div>
                    </div>

                    <div className="price_cont">
                      <div  className="price_box"> 69.90 </div>
                      <div  className="price_subbox"> ש”ח</div>
                    </div>


                    <div className="box_text_info">
                    3,500 דקות בישראל <br/>
                    1,500 הודעות SMS בישראל<br/>
                    בתוקף ל-30 ימים ממועד טעינת הכרטיס
                    </div>


                    <button className="insert_btn">הזן מספר לטעינה</button>

                    <div className="add_to_order">הוסף להזמנה</div>

                </div>


                <div className="supplier_option_box"> 
                    <div className="supplier_option_box_top"> 
                      <div className="supplier_option_box_top_title">Bigtalk Private 5G</div>
                      <div className="supplier_option_box_top_subtitle">גלישה</div>

                      <div className="supplier_option_box_gb">400GB</div>
                    </div>

                    <div className="price_cont">
                      <div  className="price_box"> 79.90 </div>
                      <div  className="price_subbox"> ש”ח</div>
                    </div>


                    <div className="box_text_info">
                    3,500 דקות בישראל <br/>
                    1,500 הודעות SMS בישראל<br/>
                    בתוקף ל-30 ימים ממועד טעינת הכרטיס
                    </div>


                    <button className="insert_btn">הזן מספר לטעינה</button>

                    <div className="add_to_order">הוסף להזמנה</div>

                </div>



                <div className="supplier_option_box"> 
                    <div className="supplier_option_box_top"> 
                      <div className="supplier_option_box_top_title">Bigtalk Private 5G</div>
                      <div className="supplier_option_box_top_subtitle">גלישה</div>

                      <div className="supplier_option_box_gb">5500GB</div>
                    </div>

                    <div className="price_cont">
                      <div  className="price_box"> 99.90 </div>
                      <div  className="price_subbox"> ש”ח</div>
                    </div>


                    <div className="box_text_info">
                    3,500 דקות בישראל <br/>
                    1,500 הודעות SMS בישראל<br/>
                    בתוקף ל-30 ימים ממועד טעינת הכרטיס
                    </div>


                    <button className="insert_btn">הזן מספר לטעינה</button>

                    <div className="add_to_order">הוסף להזמנה</div>

                </div>


                
                <div className="supplier_option_box"> 
                    <div className="supplier_option_box_top"> 
                      <div className="supplier_option_box_top_title">Bigtalk Private 5G</div>
                      <div className="supplier_option_box_top_subtitle">גלישה</div>

                      <div className="supplier_option_box_gb">1,000GB</div>
                    </div>

                    <div className="price_cont">
                      <div  className="price_box"> 149.90 </div>
                      <div  className="price_subbox"> ש”ח</div>
                    </div>


                    <div className="box_text_info">
                    3,500 דקות בישראל <br/>
                    1,500 הודעות SMS בישראל<br/>
                    בתוקף ל-30 ימים ממועד טעינת הכרטיס
                    </div>


                    <button className="insert_btn">הזן מספר לטעינה</button>

                    <div className="add_to_order">הוסף להזמנה</div>

                </div>

                
                <div className="supplier_option_box"> 
                    <div className="supplier_option_box_top"> 
                      <div className="supplier_option_box_top_title">Bigtalk Private 5G</div>
                      <div className="supplier_option_box_top_subtitle">גלישה</div>

                      <div className="supplier_option_box_gb">1,000GB</div>
                    </div>

                    <div className="price_cont">
                      <div  className="price_box"> 150 </div>
                      <div  className="price_subbox"> ש”ח</div>
                    </div>


                    <div className="box_text_info">
                    3,500 דקות בישראל <br/>
                    1,500 הודעות SMS בישראל<br/>
                    בתוקף ל-30 ימים ממועד טעינת הכרטיס
                    </div>


                    <button className="insert_btn">הזן מספר לטעינה</button>

                    <div className="add_to_order">הוסף להזמנה</div>

                </div>



            </div>


        </div>


        {show_my_orders?<div className="my_order_cont"> 
            <div className="my_order_1_cont"> 
              <div className="my_order_1_title">ההזמנה שלי</div>
              <div  className="my_order_1_subtitle"> 1 חבילות </div>
            </div>

            <div className="my_order_2_cont">
              <img src={arrow_r} className="arrow_r"/>

              <div className="order_info_cont">
                <div className="order_info_title">חבילת גלישה</div>
                <div className="order_info_gb">225GB</div>

                <div className="order_info_price"> 59.90 ש”ח </div>
                <div className="order_info_cancel"> ביטול </div>
              </div>

              <img src={arrow_l} className="arrow_l"/>

            </div>


            <div className="my_order_3_cont">
                <img src={arrow_l_blue} className="arrow_l_blue"/>
                <div className="my_order_3_title">לתשלום</div>

                <div className="my_order_3_price_cont"> 
                  <div className="my_order_3_subtitle">350</div>
                  <div className="my_order_3_subtitle_small">ש”ח</div>
                </div>


            </div>

        </div>:<></>}

      </div>

    </div>
      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>

    <NotEqualModal show={show_err_not_equal}
            setShow={setshow_err_not_equal}/>


    <NotEqualModal show={show_err_not_equal}
            setShow={setshow_err_not_equal}/>


                      
    {showNumToLoad? <>
        <div className="layout"> </div>

        <div className="on_layout_cont">

          {phoneNumber.length<10?
            <>
              <div className="on_layout_title">הזן מספר לטעינה</div>

              <div className="num_cont"> 
                  <input type="text"  className="code_small_input" value={phoneNumber[0]?phoneNumber[0]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[1]?phoneNumber[1]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[2]?phoneNumber[2]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[3]?phoneNumber[3]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[4]?phoneNumber[4]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[5]?phoneNumber[5]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[6]?phoneNumber[6]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[7]?phoneNumber[7]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[8]?phoneNumber[8]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber[9]?phoneNumber[9]:''} />
              </div>

              <div className="keypad_cont">
                <NumericKeypad color="white" setValue={(v:any) => setPhoneNumber((prev) => prev + v)} cancel_caracter={cancel_caracter} /> 

              </div>
            </>

           : <>
           
              <div className="on_layout_title">הזן שנית מספר לטעינה</div>

              <div className="num_cont"> 
                  <input type="text"  className="code_small_input" value={phoneNumber2[0]?phoneNumber2[0]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[1]?phoneNumber2[1]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[2]?phoneNumber2[2]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[3]?phoneNumber2[3]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[4]?phoneNumber2[4]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[5]?phoneNumber2[5]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[6]?phoneNumber2[6]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[7]?phoneNumber2[7]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[8]?phoneNumber2[8]:''} />
                  <input type="text"  className="code_small_input" value={phoneNumber2[9]?phoneNumber2[9]:''} />
              </div>

              <div className="keypad_cont">
                <NumericKeypad color="white" setValue={(v:any) => setPhoneNumber2((prev) => prev + v)} cancel_caracter={cancel_caracter2} /> 

              </div>
           
           </>}

    
          <div className="buttons-container-currency-select-matah">
            <Button
              style={{
            
                borderColor: "#fff",
              }}
              onClick={() => {
                setshowNumToLoad(false);
              }}
              type="outline"
            >
              <img
                src={"/chevron-right.svg"}
                className="button-icon"
                alt="right arrow"
              />
              ביטול
            </Button>
            </div>

        </div>
      
    </> : <></>}

    </div>

  );
};

export default ChooseSupplier;
