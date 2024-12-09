import { useEffect } from "react";
import Lottie from "react-lottie";
import { setCheckoutStatus } from "store/checkoutSlice";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { CheckoutStatus } from "types/CheckoutStatus";
import { Screens } from "types/Screens";
import "./payment-success-screen.css";

const PaymentSuccessScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setCheckoutStatus(CheckoutStatus.SUCCESS));
      dispatch(setCurrentScreen(Screens.CHECKOUT_FINISH));
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="main-container">
      <div className="header">
        <p className="title">המתן להוצאת השטרות</p>
        <p className="message-text">ברגעים אלו נשלח אליך מסרון עם פרטי העסקה</p>
      </div>

      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: require("../../assets/animations/payment-success-animation.json"),
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={900}
        width={900}
      />

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
  );
};

export default PaymentSuccessScreen;
