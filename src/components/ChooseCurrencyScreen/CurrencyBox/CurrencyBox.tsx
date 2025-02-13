import { getCurrencyExchangeRate } from "api/currencyApi";
import { getPaymentsDetails } from "api/paymentsApi";
import { useParams } from "react-router-dom";
import { setSelectedCurrency, setSelectedCurrencyRate } from "store/currencySlice";
import { setCurrentScreen } from "store/navigationSlice";
import { setPayments, setPercentageProfit } from "store/paymentsSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import "./currency-box.css";

interface CurrencyBoxProps {
  currency: PossibleCurrencies;
}

const CurrencyBox = ({ currency }: CurrencyBoxProps) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const chooseCurrency = async () => {
    try {
      const exchangeRate = await getCurrencyExchangeRate(currency);
      const paymentsDetails = await getPaymentsDetails(1, params?.partnerId);
      if (!exchangeRate || !paymentsDetails) {
        return;
      }
      dispatch(setPercentageProfit(paymentsDetails.data.paymentsDetails.percentageProfit));
      dispatch(setPayments(paymentsDetails.data.paymentsDetails.numberOfPayments));
      dispatch(setSelectedCurrency(exchangeRate.data.exchangeRate.currency));
      dispatch(
        setSelectedCurrencyRate(
          exchangeRate.data.exchangeRate.rate + (exchangeRate.data.exchangeRate.rate * paymentsDetails.data.paymentsDetails.rateProfit) / 100
        )
      );
      dispatch(setCurrentScreen(Screens.CHOOSE_AMOUNT));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={chooseCurrency} className="currency-box-container">
      <img src={`/currencies/${currency}.svg`} className="currency-box-icon" alt={currency} />
    </button>
  );
};

export default CurrencyBox;
