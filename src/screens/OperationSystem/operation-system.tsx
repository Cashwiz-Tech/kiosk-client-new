import "./operation-system.css";
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
import NumericKeypadSmall from "components/buying/numeric-keypad-small/numeric-keypad-small";

const OperationSystem = () => {
    const dispatch = useAppDispatch();
    
    const [showScreenError, setshowScreenError] = useState(false);
    const [timeoutID, settimeoutID] = useState<any>();
    const [Value, setValue] = useState<any>('');
   
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


    function setValuefunc(v:string){
        let Value_temp = Value ;
        Value_temp+=v; 
        setValue(Value_temp);
    }


    return (
        <>
            <Header show_logo={false}></Header>
            <div className="OperationSystem">
                <div className="WelcomeScreenSecond_first_part">
                    <div className="mid_title">
                        הכנס קוד
                    </div>
                    
                    <input type="text" className="operation_code_input" value={Value} onChange={(e)=>setValue(e.target.value)}/>

                 
                    <NumericKeypadSmall  setValue={(v:any) => setValuefunc(v)} cancel_caracter={cancel_caracter}/> 


                    <div className="buttons-container-currency-total">

                    <Button onClick={()=>validate_code()}  style={{
                        width:'344px'}}>
                    אישור
                    <Arrow/>
                            
                            </Button>

                    <Button onClick={()=>dispatch(setCurrentScreen(Screens.WELCOME_SCREEN))}
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

export default OperationSystem;

