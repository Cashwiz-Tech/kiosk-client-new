import "./payment-success-screen.css";
import Lottie from "react-lottie";

const PaymentSuccessScreen = () => {
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
