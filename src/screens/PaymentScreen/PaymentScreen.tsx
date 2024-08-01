import React, { useEffect } from "react";
import "./PaymentScreen.css";
import Button from "lib/button";
import { useAppDispatch, useAppSelector } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import { makePayment } from "api/paymentProviderApi";

const PaymentScreen = () => {
  const dispatch = useAppDispatch();
  const numberOfPayments = useAppSelector(
    (state) => state.payments.selectedPayments
  );
  const { selectedCurrency, selectedCurrencyAmount } = useAppSelector(
    (state) => state.currency
  );
  useEffect(() => {
    if (!selectedCurrency || !selectedCurrencyAmount) {
      dispatch(setCurrentScreen(Screens.ORDER_SUMMARY));
      return;
    }
    makePayment({
      numberOfPayments,
      amount: selectedCurrencyAmount,
      currency: selectedCurrency,
    }).then((data) => {
      console.log(data);
      if (data.success) {
        dispatch(setCurrentScreen(Screens.PAYMENT_SUCCESS));
      }
    });
  }, []);
  return (
    <div className="main-container">
      <p className="title">נא להעביר כרטיס</p>
      <div
        onClick={() => dispatch(setCurrentScreen(Screens.PAYMENT_SUCCESS))} // TODO: Remove in PROD
        className="total-container"
      >
        <p className="total-container-text">{`סה״כ לתשלום ${"50₪"}`}</p>
      </div>
      <div className="options-container">
        <p className="options-title">לנוחיותך 3 אפשרויות תשלום</p>
        <div className="credit-options-container">
          <div className="option-container">
            <img
              src={`/credit-option.svg`}
              className="option-icon"
              alt="credit-companies"
            />
            <p className="option-text">הכנס את הכרטיס</p>
          </div>
          <div className="option-container">
            <img
              src={`/credit-nfc-option.svg`}
              className="option-icon nfc-option"
              alt="credit-companies"
            />
            <p className="option-text">הצמד את הכרטיס</p>
          </div>
        </div>
        <div>
          <div className="option-container">
            <img
              src={`/phone-option.svg`}
              className="option-icon"
              alt="credit-companies"
            />
            <p className="option-text">הצמד את הנייד</p>
          </div>
        </div>
      </div>
      <p className="options-title bottom-text">
        לאחר ההודעה על אישור התשלום המתן לסום העסקה וקבלת השטרות
      </p>
      <div className="payment-bottom-container">
        <img src={`/phone-watch.svg`} alt={"phone-watch"} />
        <div>
          <p className="options-title promotion-text">
            משלמים באופן בטוח, בקלות ובמהירות עם הנייד
          </p>
          <img src={`/credit-companies.svg`} alt="credit-companies" />
        </div>
      </div>
      <div className="button-container">
        <Button
          style={{ border: "none" }}
          onClick={() => dispatch(setCurrentScreen(Screens.ORDER_SUMMARY))}
          type="outline"
        >
          <img
            src={"/chevron-right.svg"}
            className="button-icon"
            alt="right arrow"
          />
          חזרה
        </Button>
      </div>
    </div>
  );
};

export default PaymentScreen;
