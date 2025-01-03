import Button from "lib/button";
import "./choose-amount-screen.css";
import CurrencySummary from "components/ChooseCurrencyAmountScreen/CurrencySummary/CurrencySummary";
import { useAppDispatch, useAppSelector } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import ChooseAmountCard from "components/ChooseCurrencyAmountScreen/ChooseAmountCard/ChooseAmountCard";
import { useEffect, useState } from "react";
import { ChooseAmountScreenError } from "types/UI";
import Modal from "lib/modal/modal";
import Header from "layouts/header/Header";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";

const ChooseAmountScreen = () => {
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
	
  

  const [error, setError] = useState<ChooseAmountScreenError | null>(null);
  const selectedPayments = useAppSelector(
    (state) => state.payments.selectedPayments
  );
  const selectedCurrencyAmount = useAppSelector(
    (state) => state.currency.selectedCurrencyAmount
  );
  const handleContinue = () => {
    if (!selectedCurrencyAmount) {
      setError("AMOUNT");
      return;
    }
    if (!selectedPayments) {
      setError("PAYMENTS");
      return;
    }
    dispatch(setCurrentScreen(Screens.ORDER_SUMMARY));
  };
  const getErrorText = () => {
    if (error === "AMOUNT") {
      return "עליך לבחור סכום מסוים";
    }
    if (error === "PAYMENTS") {
      return "עליך לבחור מס׳ תשלומים";
    }
  };

  return (
    <div className="main_cont">
 
       <Header></Header>
      <Modal
        show={!!error}
        setShow={() => setError(null)}
        children={
          <div className="modal-inner-container">
            <img
              width={360}
              height={450}
              src={`/error-guy.svg`}
              alt={"error-guy"}
            />
            <p className="modal-text">{getErrorText()}</p>
          </div>
        }
      />
      <div className="container">
        <div className="choose-amount-top-container">
          <div className="choose-amount-header">
            <p className="choose-amount-title">בחרו בסכום המבוקש</p>
            <p className="choose-amount-disclaimer">
              * ניתן לבחור את השטרות בכפולות של 100
            </p>
          </div>
          <ChooseAmountCard />
        </div>
        <CurrencySummary type="SELECT_PAYMENTS" />
        <div className="buttons-container">
          <Button
            style={{
              borderColor: "#fff",
            }}
            onClick={() => dispatch(setCurrentScreen(Screens.CHOOSE_CURRENCY))}
            type="outline"
          >
            <img
              src={"/chevron-right.svg"}
              className="button-icon"
              alt="right arrow"
            />
            חזרה
          </Button>
          <Button
            style={{
              borderColor: "#fff",
            }}
            onClick={handleContinue}
            type="primary"
          >
            המשך
            <img
              src={"/white-chevron-right.svg"}
              className="button-icon left-arrow"
              alt="left arrow"
            />
          </Button>
        </div>
      </div>
      
	
			<ErrorScrenLeftModal show={showScreenError}
				setShow={setshowScreenError}/>
									
									
    </div>
  );
};

export default ChooseAmountScreen;
