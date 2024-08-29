import "./choose-currency-screen.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Button from "lib/button";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";

const possibleCurrencies: PossibleCurrencies[] = ["USD", "EUR"];


const ChooseCurrencyScreen = () => {

  const dispatch = useAppDispatch();
  const currenciesElements = possibleCurrencies.map((currency) => (
    <CurrencyBox currency={currency} />
  ));

  function cancel_btn(){
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  }

  return (
    <div className="container">
      <div className="currencies-container">
        <p className="title">בחרו את המטבע שתרצו לרכוש</p>
        {currenciesElements}
      </div>
      <div className="buttons-container">
        <Button
          style={{
            borderColor: "#fff",
          }}
          onClick={() => {cancel_btn()}}
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
  );
};

export default ChooseCurrencyScreen;
