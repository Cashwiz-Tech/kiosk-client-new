import { useAppDispatch, useAppSelector } from "store/store";
import PaymentsButton from "../../PaymentsButton/PaymentsButton";
import { setPayments } from "store/paymentsSlice";
import "./currency-summary.css";

interface CurrencySummaryProps {
  type: "SELECT_PAYMENTS" | "PAYMENTS_SUMMARY";
}

const CurrencySummary = ({ type }: CurrencySummaryProps) => {
  const dispatch = useAppDispatch();
  const selectedPayments = useAppSelector(
    (state) => state.payments.selectedPayments
  );
  const { selectedCurrencyAmount, selectedCurrencyRate } = useAppSelector(
    (state) => state.currency
  );

  const getTotalAmount = () => {
    const baseAmount =
      selectedCurrencyAmount *
      (selectedCurrencyRate ? selectedCurrencyRate : 1);
    return baseAmount;
  };

  const totalAmount = getTotalAmount();

  return (
    <div className="currency-summary-container">
      <div className="currency-summary-payments-container">
        <p className="choose-payments-text">
          {type === "SELECT_PAYMENTS"
            ? "מספר התשלומים לבחירה"
            : "מספר התשלומים שבחרת:"}
        </p>
        <div className="currency-summary-payments-buttons-container">
          {type === "SELECT_PAYMENTS" ? (
            <div className="currency-summary-payments-buttons-container">
              <PaymentsButton
                disabled={selectedPayments === 1}
                height={60}
                width={60}
                type="DEC"
                onClick={() => dispatch(setPayments(selectedPayments - 1))}
              />
              <p className="currency-summary-payments-text">
                {selectedPayments}
              </p>
              <PaymentsButton
                disabled={selectedPayments === 12}
                height={60}
                width={60}
                type="INC"
                onClick={() => dispatch(setPayments(selectedPayments + 1))}
              />
            </div>
          ) : (
            <p>{selectedPayments} תשלומים</p>
          )}
        </div>
      </div>
      <div className="currency-summary-bottom-container">
        <div className="intrest-text-container dashed-border">
          <p className="total-text">סה״כ לתשלום</p>
          <p className="total-text">{`${totalAmount} ₪`}</p>
        </div>
        <div className="intrest-text-container">
          <p className="intrest-text">{`סך כל תשלום ${
            totalAmount / selectedPayments
          }`}</p>
          <p className="intrest-text">{`(עמלת כרטיס אשראי ${"25 ₪"})`}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencySummary;
