import OrderCurrencySummary from "components/OrderSummaryScreen/OrderCurrencySummary/OrderCurrencySummary";
import { useAppDispatch, useAppSelector } from "store/store";
import "./order-summary-screen.css";
import CurrencySummary from "components/ChooseCurrencyAmountScreen/CurrencySummary/CurrencySummary";
import Button from "lib/button";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import { useState } from "react";
import Modal from "lib/modal";
import Header from "layouts/header/Header";

const OrderSummaryScreen = () => {
  const dispatch = useAppDispatch();
  const { selectedCurrency, selectedCurrencyAmount, selectedCurrencyRate } =
    useAppSelector((state) => state.currency);
  const [error, setError] = useState(false);
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleContinue = () => {
    if (!termsAccepted) {
      setError(true);
      return;
    }
    dispatch(setCurrentScreen(Screens.PAYMENT));
  };
  return (
    <>
      <Header></Header>
      <Modal
        show={error}
        setShow={() => setError(false)}
        children={
          <div className="modal-inner-container">
            <img
              width={360}
              height={450}
              src={`/error-guy.svg`}
              alt={"error-guy"}
            />
            <p className="modal-text">עליך לאשר את התנאים</p>
          </div>
        }
      />

      <Modal
        show={termsModalVisible}
        setShow={() => setTermsModalVisible(false)}
        children={
          <div
            className="modal-inner-container"
            id="terms-modal-inner-container"
          >
            <p className="title">תקנון תנאי שימוש</p>
            <ul className="terms-list">
              <li className="terms-list-item">
                ידוע ללקוח / מחזיק הכרטיס כי ייתכן ויחוייב בנוסף על ידי המנפיק /
                חברת כרטיסי האשראי בעמלת רכישת מט״ח על פי תעריפוניהם וכי ייתכן
                שהחיוב יהיה מידי.
              </li>
              <li className="terms-list-item">
                שיעור ריבית הפיגורים - ככל שתהיה תגבה ע״י חברת כרטיסי האשראי
                ולפי תנאיה מול מחזיק הכרטיס.
              </li>
              <li className="terms-list-item">
                שיעור ריבית פיגורים מרבי - ככל שתהיה תגבה ע״י חברת כרטיסי האשראי
                ולפי תנאיה מול מחזיק הכרטיס
              </li>
            </ul>
            <Button
              style={{
                backgroundColor: "#F8A801",
              }}
              onClick={() => setTermsModalVisible(false)}
              type="primary"
            >
              הבנתי תודה
            </Button>
          </div>
        }
      />

      <div className="container">
        <div className="order-summary-top">
          <p className="title">סיכום הזמנתך לאישור</p>
          <div className="order-summary-card-container">
            <p className="order-summary-subtitle">מט״ח שרכשת</p>
            <OrderCurrencySummary
              amount={selectedCurrencyAmount}
              currency={selectedCurrency ?? "USD"}
              rate={selectedCurrencyRate}
            />
          </div>
        </div>
        <div className="order-summary-bottom-container">
          <CurrencySummary type="PAYMENTS_SUMMARY" />
          <div className="terms-outer-container">
            <div className="terms-container">
              <input
                checked={termsAccepted}
                onClick={() => setTermsAccepted(!termsAccepted)}
                type="checkbox"
                className="checkbox"
              />
              <p className="terms-text">
                קראתי ואני מסכימ/ה{" "}
                <span
                  onClick={() => setTermsModalVisible(true)}
                  className="terms-link-text"
                >
                  לתקנון תנאי השימוש
                </span>
              </p>
            </div>
          </div>
          <div className="buttons-container">
            <Button
              style={{
                borderColor: "#fff",
              }}
              onClick={() => dispatch(setCurrentScreen(Screens.CHOOSE_AMOUNT))}
              type="outline"
            >
              <img
                src={"/chevron-right.svg"}
                className="button-icon"
                alt="right arrow"
              />
              חזרה
            </Button>
            <Button
              style={{
                borderColor: "#fff",
                backgroundColor: "#F8A801",
              }}
              onClick={handleContinue}
              type="primary"
            >
              לתשלום
              <img
                src={"/white-chevron-right.svg"}
                className="button-icon left-arrow"
                alt="left arrow"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummaryScreen;
