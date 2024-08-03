import React from "react";
import { useAppDispatch, useAppSelector } from "store/store";
import "./ChooseAmountCard.css";
import PaymentsButton from "components/PaymentsButton/PaymentsButton";
import { setSelectedCurrencyAmount } from "store/currencySlice";
import { getCurrencySymbol } from "utils/format-price.ts/format-price";

const ChooseAmountCard = () => {
  const dispatch = useAppDispatch();
  const { selectedCurrency, selectedCurrencyRate, selectedCurrencyAmount } =
    useAppSelector((state) => state.currency);
  return (
    <div className="choose-amount-card-container">
      <div className="choose-amount-card-top-container">
        <div className="choose-amount-card-currency-container">
          <img
            src={`/currencies/${selectedCurrency}.svg`}
            alt={selectedCurrency ?? "currency-icon"}
          />
          <div className="currency-details-container">
            <p className="currency-name">{selectedCurrency}</p>
            <p className="currency-rate">{`שער המרה: ${selectedCurrencyRate.toFixed(
              3
            )}`}</p>
          </div>
        </div>
        <div>
          <p className="amount-title">סכום</p>
          <div className="change-currency-amount-container">
            <PaymentsButton
              height={80}
              width={80}
              onClick={() =>
                dispatch(
                  setSelectedCurrencyAmount(selectedCurrencyAmount - 100)
                )
              }
              type="DEC"
              disabled={selectedCurrencyAmount === 0}
            />
            <p className="selected-currency-amount">{selectedCurrencyAmount}</p>
            <PaymentsButton
              height={80}
              width={80}
              onClick={() =>
                dispatch(
                  setSelectedCurrencyAmount(selectedCurrencyAmount + 100)
                )
              }
              type="INC"
              disabled={selectedCurrencyAmount === 2000}
            />
          </div>
        </div>
      </div>
      <div className="choose-amount-card-bottom-container">
        <p className="max-disclaimer">
          <span className="max-disclaimer-bold">{`מקסימום 2000 ${getCurrencySymbol(
            selectedCurrency ?? "USD"
          )}`}</span>{" "}
          לרכישה בכל פעולה
        </p>
      </div>
    </div>
  );
};

export default ChooseAmountCard;
