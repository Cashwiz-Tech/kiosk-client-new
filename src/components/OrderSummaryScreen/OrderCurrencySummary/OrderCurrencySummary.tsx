import { PossibleCurrencies } from "types/Currencies";
import { getCurrencySymbol } from "utils/format-price.ts/format-price";
import "./order-currency-summary.css";

interface OrderCurrencySummaryProps {
  currency: PossibleCurrencies;
  amount: number;
  rate: number;
}

const OrderCurrencySummary = ({
  amount,
  currency,
  rate,
}: OrderCurrencySummaryProps) => {
  return (
    <div className="order-currency-summary-container">
      <div className="currency-container">
        <img
          width={80}
          height={80}
          src={`/currencies/${currency}.svg`}
          alt={currency}
        />
        <div className="currency-text">
          <p className="summary-currency-big-text">{currency}</p>
          <p className="summary-rate-text">{`שער המרה: ${rate.toFixed(3)}`}</p>
        </div>
      </div>
      <div className="summary-currency-container">
        <p className="summary-currency-text">{`רכשת ${amount} ${getCurrencySymbol(
          currency ?? "USD"
        )}`}</p>
      </div>
    </div>
  );
};

export default OrderCurrencySummary;
