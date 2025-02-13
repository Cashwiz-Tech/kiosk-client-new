import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import "./SelectMatah.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";

const SelectMatah = () => {
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
      <div className="currencies-container-s">
        <p className="title">בחר את השירות המבוקש</p>
        <button className="currency-box-container-matah" onClick ={()=>dispatch(setCurrentScreen(Screens.CHOOSE_CURRENCY))}>
          <span className="currency_text_matah">רכישת מט”ח</span>
        </button>

        <button className="currency-box-container-matah">
          <span className="currency_text_matah">מכירת מט”ח</span>
        </button>

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

export default SelectMatah;
