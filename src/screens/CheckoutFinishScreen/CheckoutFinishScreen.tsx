import Button from "lib/button";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { CheckoutStatus } from "types/CheckoutStatus";
import { Screens } from "types/Screens";
import "./checkout-finish-screen.css";
import Header from "layouts/header/Header";

const CheckoutFinishScreen = () => {
  const checkoutStatus = useAppSelector((state) => state.checkout.checkoutStatus);
  const dispatch = useAppDispatch();

  const getCheckoutConfig = () => {
    switch (checkoutStatus) {
      case CheckoutStatus.SUCCESS:
        return {
          header: (
            <div className="checkout-header">
              <p className="title">העסקה בוצעה בהצלחה
         
              </p>
              <p className="message-text">
              ברגעים אלו נשלח אליך מסרון עם פרטי העסקה
      
              </p>
            </div>
          ),
          icon: "/success.svg",
        };

      case CheckoutStatus.CREDIT_CARD_ERROR:
        return {
          header: (
            <div className="checkout-header">
              <p className="title">אופסס..
              <br />
              מתנצלים אירעה תקלה 
              </p>
              <p className="message-text">
              אבל אין דאגה חשבונך לא חויב
       
              </p>
            </div>
          ),
          icon: "/success.svg",

        };
      case CheckoutStatus.TECHNICAL_ERROR:
        return {
          header: (
            <div className="checkout-header">
              <p className="title">המתן להוצאת השטרות</p>
              <p className="message-text">
                לצערנו לא ניתן להשלים את הפעולה
                <br /> אבל אין דאגה לא בוצע חיוב בכרטיסך
                <br />
                <br />
                אנא נסה שוב מאוחר יותר או פנה לשירות הלקוחות
              </p>
            </div>
          ),
          icon: "/error-person.svg",
        };
      default:
        return {
          header: (
            <div className="checkout-header">
              <p className="title">לא התקבל אישור על העסקה</p>
              <p className="message-text">
                לצערנו לא קיבלנו אישור מחברת האשראי
                <br />
                <br />
                אנא נסה שוב מאוחר יותר או פנה לחברת האשראי לבירור
              </p>
            </div>
          ),
          icon: "/error-person.svg",
        };
    }
  };

  const { header, icon } = getCheckoutConfig();
  return (
    
    <div className="main_cont">
 
      <Header></Header>
      <div className="container">
      {header}
      <img src={icon} className={""} alt="Currency" />
      <div className="checkout-buttons-container">
        <Button style={{ width: 660 }} type="primary" onClick={() => dispatch(setCurrentScreen(Screens.CHOOSE_CURRENCY))}>
          אני רוצה לבצע רכישה נוספת
        </Button>
        <Button style={{ width: 660, border: "none" }} type="outline" onClick={() => dispatch(setCurrentScreen(Screens.WELCOME_SCREEN))}>
          יציאה מהמערכת
        </Button>
      </div>
      <div className="bottom-container">
        <p>לכל שאלה אנחנו זמינים עבורך</p>
        <div className="contact-info-container">
          <img src={"/mail.svg"} alt="right arrow" />
          <p>support@cashwiz.co.il</p>
        </div>
        |
        <div className="contact-info-container">
          <img src={"/phone.svg"} alt="right arrow" />
          <p>03-5555555</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CheckoutFinishScreen;
