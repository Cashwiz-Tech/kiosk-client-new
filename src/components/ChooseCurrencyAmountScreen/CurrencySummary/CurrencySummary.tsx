import { useAppDispatch, useAppSelector } from "store/store";
import PaymentsButton from "../../PaymentsButton/PaymentsButton";
import { setPayments, setPercentageProfit } from "store/paymentsSlice";
import "./currency-summary.css";
import { getPaymentsDetails } from "api/paymentsApi";

interface CurrencySummaryProps {
  type: "SELECT_PAYMENTS" | "PAYMENTS_SUMMARY";
}

const CurrencySummary = ({ type }: CurrencySummaryProps) => {
  const dispatch = useAppDispatch();
  const selectedPayments = useAppSelector(
    (state) => state.payments.selectedPayments
  );
  const percentageProfit = useAppSelector(
    (state) => state.payments.percentageProfit
  );
  const { selectedCurrencyAmount, selectedCurrencyRate } = useAppSelector(
    (state) => state.currency
  );

  const handlePaymentsChange = async (direction: "INC" | "DEC" | "INTIAL") => {
    const tempValue = selectedPayments;
    try {
      const value =
        direction === "INTIAL"
          ? selectedPayments
          : selectedPayments + (direction === "INC" ? 1 : -1);
      direction === "DEC"
        ? dispatch(setPayments(value))
        : dispatch(setPayments(value));
      const paymentsDetails = await getPaymentsDetails(value);

      if (!paymentsDetails) {
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
    } catch (error) {
      dispatch(setPayments(tempValue));
      console.log(error);
    }
  };

  const getTotals = () => {
    const baseAmount =
      selectedCurrencyAmount *
      (selectedCurrencyRate ? selectedCurrencyRate : 1);
    const intrest = (baseAmount * percentageProfit) / 100;
    return { baseAmount, intrest };
  };

  const { baseAmount, intrest } = getTotals();
  const totalAmount = baseAmount + intrest;

  return (
    <div className="currency-summary-container">
      <div
        style={{
          padding: type === "SELECT_PAYMENTS" ? "30px 50px" : "40px 50px",
        }}
        className="currency-summary-payments-container"
      >
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
                onClick={async () => await handlePaymentsChange("DEC")}
              />
              <p className="currency-summary-payments-text">
                {selectedPayments}
              </p>
              <PaymentsButton
                disabled={selectedPayments === 12}
                height={60}
                width={60}
                type="INC"
                onClick={async () => await handlePaymentsChange("INC")}
              />
            </div>
          ) : (
            <p className="payments-number-text">{selectedPayments} תשלומים</p>
          )}
        </div>
      </div>
      <div className="currency-summary-bottom-container">
        <div className="intrest-text-container dashed-border">
          <p className="total-text">סה״כ לתשלום</p>
          <p className="total-text">{`${totalAmount.toFixed(2)} ₪`}</p>
        </div>
        <div className="intrest-text-container">
          <p className="intrest-text">{`סך כל תשלום ${(isNaN(
            totalAmount / selectedPayments
          )
            ? 0
            : totalAmount / selectedPayments
          ).toFixed(2)}`}</p>
          <p className="intrest-text">{`(עמלת כרטיס אשראי ${intrest.toFixed(
            2
          )} ₪)`}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencySummary;
