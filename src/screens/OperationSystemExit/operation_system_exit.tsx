import "./operation_system_exit.css";
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
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
//import  Arrow  from "./../../assets/left.png"


import usd_icon from './../../assets/united states.png'
import euro_icon from './../../assets/euro_icon.png'
import Header from "layouts/header/Header";
import { useEffect, useState } from "react";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import cancel_white from '../../assets/cancel_white.png'
import Button from "lib/button";
import err_icon from './../../assets/err_icon.png'

const OperationSystemExit = () => {
    const dispatch = useAppDispatch();
    
    const [showScreenError, setshowScreenError] = useState(false);
    const [timeoutID, settimeoutID] = useState<any>();
    const [Value, setValue] = useState<any>();
   
    function cancel_caracter(){
        let Value_temp = Value;
        let str = Value_temp.substring(0, Value_temp.length - 1);

        setValue(str);
    }

    function validate_code(){

        if (Value=='111111') { 
           dispatch(setCurrentScreen(Screens.OPERATION_SYSTEM_TABS));
        } else {
            dispatch(setCurrentScreen(Screens.CODE_ERR));
        }

    }
    return (
        <>
            <Header show_logo={false}></Header>
            <div className="CodeErr">
                <div className="WelcomeScreenSecond_first_part">
                    <div className="mid_title">
                    ביקשת לצאת מהמערכת?
                    </div>
                    
                    <img src={err_icon} />
                   
                    <div className="buttons-container-currency-total">

                    <Button  onClick={()=>dispatch(setCurrentScreen(Screens.OPERATION_SYSTEM))}  style={{
                        width:'344px'}}>
                    כן
                    <Arrow/>
                            
                            </Button>

                    <Button onClick={()=>dispatch(setCurrentScreen(Screens.OPERATION_SYSTEM_TABS))}
                        style={{
                        width:'344px',
                        borderColor: "#fff",
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

            </div>
         
        </>
    );

};

export default OperationSystemExit;

