import { makePayment } from "api/paymentProviderApi";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setCheckoutStatus } from "store/checkoutSlice";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { CheckoutStatus } from "types/CheckoutStatus";
import { Screens } from "types/Screens";
import "./PaymentScreen.css";

const PaymentScreen = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const partnerData = useAppSelector((state) => state.partner.partnerData);
  const customerId = useAppSelector((state) => state.register.IDNum);
  const totalAmount = useAppSelector((state) => state.payments.totalAmount);
  const numberOfPayments = useAppSelector((state) => state.payments.selectedPayments);
  const { selectedCurrency, selectedCurrencyAmount } = useAppSelector((state) => state.currency);

  const handleCreditCardError = (status: CheckoutStatus) => {
    dispatch(setCurrentScreen(Screens.CHECKOUT_FINISH));
    dispatch(setCheckoutStatus(status));
  };

  const makePaymentRequest = async () => {
    try {
      if (!selectedCurrency || !selectedCurrencyAmount) {
        dispatch(setCurrentScreen(Screens.ORDER_SUMMARY));
        return;
      }
      const makePaymentResponse = await makePayment({
        numberOfPayments,
        amount: selectedCurrencyAmount,
        currency: selectedCurrency,
        customerId,
        // @ts-ignore
        pinpadId: partnerData?.data?.partnerData?.pinpadId ?? "",
        partnerId: Number(params?.partnerId) ?? 0,
      });
      console.log(makePaymentResponse);
      if (makePaymentResponse.success) {
        dispatch(setCurrentScreen(Screens.PAYMENT_SUCCESS));
      } else {
        if (makePaymentResponse.message === "STACK_ERROR") {
          handleCreditCardError(CheckoutStatus.TECHNICAL_ERROR);
        } else {
          handleCreditCardError(CheckoutStatus.CREDIT_CARD_ERROR);
        }
      }
    } catch (error) {
      handleCreditCardError(CheckoutStatus.CREDIT_CARD_ERROR);
    }
  };
  useEffect(() => {
    makePaymentRequest();
  }, []);
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <p className="title">נא להעביר כרטיס</p>
        <div
          onClick={() => dispatch(setCurrentScreen(Screens.PAYMENT_SUCCESS))} // TODO: Remove in PROD
          className="total-container"
        >
          <p className="total-container-text">{`סה״כ לתשלום ${totalAmount.toFixed(2)}₪`}</p>
        </div>
        <div className="options-container">
          <p className="options-title">לנוחיותך 3 אפשרויות תשלום</p>
          <div className="credit-options-container">
            <div className="option-container">
              <img src={`/credit-option.svg`} className="option-icon" alt="credit-companies" />
              <p className="option-text">הכנס את הכרטיס</p>
            </div>
            <div className="option-container">
              <img src={`/credit-nfc-option.svg`} className="option-icon nfc-option" alt="credit-companies" />
              <p className="option-text">הצמד את הכרטיס</p>
            </div>
          </div>
          <div>
            <div className="option-container">
              <img src={`/phone-option.svg`} className="option-icon" alt="credit-companies" />
              <p className="option-text">הצמד את הנייד</p>
            </div>
          </div>
        </div>
        <p className="options-title bottom-text">לאחר ההודעה על אישור התשלום המתן לסום העסקה וקבלת השטרות</p>
        <div className="payment-bottom-container">
          <img src={`/phone-watch.svg`} alt={"phone-watch"} />
          <div>
            <p className="options-title promotion-text">משלמים באופן בטוח, בקלות ובמהירות עם הנייד</p>
            <img src={`/credit-companies.svg`} alt="credit-companies" />
          </div>
        </div>
        <div className="button-container">
          <Button style={{ border: "none" }} onClick={() => dispatch(setCurrentScreen(Screens.ORDER_SUMMARY))} type="outline">
            <img src={"/chevron-right.svg"} className="button-icon" alt="right arrow" />
            חזרה
          </Button>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
