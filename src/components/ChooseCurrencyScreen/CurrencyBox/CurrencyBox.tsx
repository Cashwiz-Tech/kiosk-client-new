import { PossibleCurrencies } from "types/Currencies";
import "./currency-box.css";
import { useAppDispatch } from "store/store";
import { setSelectedCurrency } from "store/currencySlice";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";

interface CurrencyBoxProps {
  currency: PossibleCurrencies;
}

const CurrencyBox = ({ currency }: CurrencyBoxProps) => {
  const dispatch = useAppDispatch();
  const chooseCurrency = () => {
    dispatch(setSelectedCurrency(currency));
    dispatch(setCurrentScreen(Screens.CHOOSE_AMOUNT));
  };
  return (
    <button onClick={chooseCurrency} className="currency-box-container">
      <img
        src={`/currencies/${currency}.svg`}
        className="currency-box-icon"
        alt={currency}
      />
    </button>
  );
};

export default CurrencyBox;
