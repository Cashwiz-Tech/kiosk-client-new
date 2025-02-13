import { sendOtp } from "api/auth/otp";
import { ReactComponent as Arrow } from "assets/arrow.svg";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { Screens } from "types/Screens";
import { formatPhoneNumber } from "utils/formatPhoneNumber";
import styles from "./SendOTPExisted.module.css";

type Props = {
  onBack: () => void;
};

export default function SendOTPExisted({ onBack }: Props) {
  const dispatch = useAppDispatch();

  const phoneNum = useAppSelector((state) => state.navigation.phoneNum);

  const identityNumber = useAppSelector((state) => state.register.IDNum);

  function not_my_num() {
    dispatch(setCurrentScreen(Screens.NOT_MY_NUM));
  }

  async function handleSendOtp(channel: "sms" | "call") {
    const phoneFormatted = formatPhoneNumber(phoneNum, true);

    const { error, validationErrors } = await sendOtp({
      phoneNumber: phoneFormatted,
      channel,
    });

    if (error || validationErrors) {
      console.error(`Errors when sending OTP`);
      return;
    }

    // dispatch(setOTP(res.data.otp));
    // dispatch(setCurrentScreen(Screens.SEND_OTP_EXISTED));
    dispatch(setCurrentScreen(Screens.INSERT_CODE));
  }

  return (
    <div className={styles.main_cont}>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}> קוד אימות ישלח אליך למספר שאתו נרשמת לשירות </h3>
          <p className={styles.subtitle}> הקוד ישלח לנייד שמסתיים: </p>

          <div className={styles.code_place}>
            <p className={styles.phone_to_send}>
              {" "}
              {phoneNum[0] + phoneNum[1] + phoneNum[2] + "****" + phoneNum[8] + phoneNum[9] + (phoneNum[10] ? phoneNum[10] : "")}{" "}
            </p>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button onClick={() => handleSendOtp("call")} type="outline">
            <div className={styles.arrowRight}>
              <Arrow />
            </div>
            קוד בהודעה קולית
          </Button>
          <Button onClick={() => handleSendOtp("sms")}>
            שלח לי קוד
            <Arrow />
          </Button>
        </div>

        <div className={styles.buttons + " " + styles.buttons_bottom}>
          <Button onClick={onBack} type="outline">
            <div className={styles.arrowRight}>
              <Arrow />
            </div>
            חזרה
          </Button>
          <Button onClick={() => not_my_num()}>
            אני לא מזהה את המספר שלי
            <Arrow />
          </Button>
        </div>
      </div>

      <ErrorScrenLeftModal show={showScreenError} setShow={setshowScreenError} />
    </div>
  );
}
