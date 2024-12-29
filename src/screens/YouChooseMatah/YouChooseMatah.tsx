import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import "./YouChooseMatah.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import is_icon from './../../assets/israel.png'
import insert_matah_icon from './../../assets/insert_matah_icon.png'
import united_states from './../../assets/united states.png'
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
import up_down from './../../assets/up_down.png'

const YouChooseMatahScreen = () => {
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
    <Header></Header>
    <div className="container">
      <div className="currencies-container">
        <p className="title"> בחרת לרכוש

        <img src={united_states} className="us_icon"/>
        </p>
      
        <div className="subtitle_m">
          <div>סכום שהוכנס</div>
          <div className="price_cont">
            <img src={is_icon} /> 
            <div>2000 ₪</div> 
          </div>

        </div>

        <img src={up_down} className="up_down"/>

        <div className="subtitle_r">
          <div  className="subtitle_sm">
            <div>סכום שהתקבל בתמורה</div>
            <div className="price_cont"> 
              <img src={united_states} /> 
              <div>500 $</div>
            </div>
          </div>

          <div  className="subtitle_s">
            <div> מקסימום רכישה: 1000 $ | ניתן לרכוש בכפולות של 100 </div>
            <div> שער המרה: 3.7500  </div> 
          </div>

        </div>


        <div className="subtitle_m">
          <div>עודף</div>
          <div className="price_cont">
            <img src={is_icon} /> 
            <div>125 ₪</div>
          </div>

        </div>

      </div>
      <div className="buttons-container-currency">

      <Button onClick={()=>dispatch(setCurrentScreen(Screens.TOTAL_MATAH))} >
      אישור
        <Arrow/>
				
				</Button>

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

export default YouChooseMatahScreen;
