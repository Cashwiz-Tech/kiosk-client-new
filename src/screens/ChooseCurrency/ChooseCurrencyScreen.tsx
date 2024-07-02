import "./choose-currency-screen.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Button from "lib/button";
import { PossibleCurrencies } from "types/Currencies";

const possibleCurrencies: PossibleCurrencies[] = ["USD", "EUR"];

const ChooseCurrencyScreen = () => {
  const currenciesElements = possibleCurrencies.map((currency) => (
    <CurrencyBox currency={currency} />
  ));
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
          onClick={() => {}}
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
