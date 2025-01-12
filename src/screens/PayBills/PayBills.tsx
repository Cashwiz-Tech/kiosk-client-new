import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import "./PayBills.css";
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
import north_6 from './../../assets/north_6.png'
import ravkav from './../../assets/ravkav.png'

import cello from './../../assets/cello.png'

const PayBills = () => {
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
  
  function cancel_btn() {
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  }

  return (
    <div className="main_cont">
    <Header show_logo={false}></Header>
    <div className="container container_dark">
      <div className="currencies-container-d">
        <p className="title_cont_dark">טעינת סלולר</p>
        
        <div className="celular_bil_cont">
          <div className="celular_bil_icon partner" onClick={() => {dispatch(setCurrentScreen(Screens.CHOOSE_SUPPLIER))}}>
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


        <p className="title_cont_dark">תשלום חשבונות</p>


      
        <div className="celular_bil_cont">
          <div className="celular_bil_icon ">
              <img src={Carmel_Tunnels_logo} className="carmel_tunel_icon"/>
          </div>

          <div className="celular_bil_icon">
              <img src={load_elec} className="pelephon_icon"/>
          </div>

          <div className="celular_bil_icon">
              <img src={pay_elec} className="pelephon_icon"/>
          </div>

          <div className="celular_bil_icon">
              <img src={Kevish_6} className="Kevish_6_icon"/>
          </div>

          <div className="celular_bil_icon">
              <img src={north_6} className="north_6_icon"/>
          </div>


        </div>

        <p className="title_cont_dark">תחבורה</p>

        <div className="celular_bil_cont">
          <div className="celular_bil_icon ravkav">
              <img src={ravkav} className="ravkav_icon"/>
          </div>

          <div className="celular_bil_icon">
              <img src={cello} className="cello_icon"/>
          </div>


        </div>

      </div>


      <div className="buttons-container-currency-select-matah">
        <Button
          style={{
        
            borderColor: "#fff",
          }}
          onClick={() => {
            cancel_btn();
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

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      

    </div>

  );
};

export default PayBills;
