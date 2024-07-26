import { PossibleCurrencies } from "types/Currencies";
import "./currency-box.css";
import { useAppDispatch } from "store/store";
import {
  setSelectedCurrency,
  setSelectedCurrencyRate,
} from "store/currencySlice";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import { getCurrencyExchangeRate } from "api/currencyApi";
import { getPaymentsDetails } from "api/paymentsApi";
import { setPayments, setPercentageProfit } from "store/paymentsSlice";

interface CurrencyBoxProps {
  currency: PossibleCurrencies;
}

const CurrencyBox = ({ currency }: CurrencyBoxProps) => {
  const dispatch = useAppDispatch();
  const chooseCurrency = async () => {
    try {
      const exchangeRate = await getCurrencyExchangeRate(currency);
      const paymentsDetails = await getPaymentsDetails(1);
      if (!exchangeRate || !paymentsDetails) {
        return;
      }
      dispatch(
        setPercentageProfit(
          paymentsDetails.data.paymentsDetails.percentageProfit
        )
      );
      dispatch(
        setPayments(paymentsDetails.data.paymentsDetails.numberOfPayments)
      );
      dispatch(setSelectedCurrency(exchangeRate.data.exchangeRate.currency));
      dispatch(
        setSelectedCurrencyRate(
          exchangeRate.data.exchangeRate.rate +
            (exchangeRate.data.exchangeRate.rate *
              paymentsDetails.data.paymentsDetails.rateProfit) /
              100
        )
      );
      dispatch(setCurrentScreen(Screens.CHOOSE_AMOUNT));
    } catch (error) {
      console.log(error);
    }
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
