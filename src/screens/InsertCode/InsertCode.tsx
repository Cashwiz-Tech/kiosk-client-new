import { useEffect, useState } from "react"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./InsertCode.module.css"
import { useAppDispatch, useAppSelector } from "store/store"
import { setCurrentScreen } from "store/navigationSlice"
import { Screens } from "types/Screens"
import ErrorModal from "components/buying/error-modal"
import ErrorTimesModal from "components/buying/error-modal-times/error-modal-times"
import Header from "layouts/header/Header"
import { validateOtp } from "api/auth/otp"
import { formatPhoneNumber } from "utils/formatPhoneNumber"
import { setAuthData } from "store/authSlice"

const InsertCode = () => {
  const dispatch = useAppDispatch();
  const phoneNumber = useAppSelector(state => state.navigation.phoneNum);
  const [codeNumber, setCodeNumber] = useState("")
  const [showError, setShowError] = useState(false);
  const [showErrorAttempts, setShowErrorAttempts] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const OTP = useAppSelector(
    (state) => state.navigation.OTP
  );

  const UserExist = useAppSelector(
    (state) => state.navigation.UserExist
  );

  function onBack() {
    dispatch(setCurrentScreen(Screens.USER_DETAILS));
  }

  function cancelCharacter() {
    let str = codeNumber.substring(0, codeNumber.length - 1);
    setCodeNumber(str);
  }

  useEffect(() => {
    if (codeNumber.length === 6) {
      validate();
    }
  }, [codeNumber]);


  useEffect(() => {
    if (!showError) {
      setCodeNumber('');
    }
  }, [showError]);


  useEffect(() => {
    if (!showErrorAttempts && attempts >= 3) {
      dispatch(setCurrentScreen(Screens.USER_DETAILS));
    }
  }, [showErrorAttempts, attempts]);


  async function validate() {
    const { error, validationErrors, token } = await validateOtp({
      phoneNumber: formatPhoneNumber(phoneNumber, true),
      otp: codeNumber,
    });

    if (error || validationErrors) {
      setAttempts(attempts + 1);
      if (attempts < 3) {
        setShowError(true);
      } else {
        setShowErrorAttempts(true);
      }

      return;
    }

    dispatch(setAuthData(token));

    if (UserExist) {
      dispatch(setCurrentScreen(Screens.SCAN_FACE_USER_EXIST));
    } else {
      dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
    }
  }

  function resendCode() { }

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}> הקלד את הקוד שקיבלת במסרון </h3>
          <div className={styles.phoneInput}>

            <form className={styles.code_place}>
              <input type="text" className={styles.code_small_input} value={codeNumber[0] || ''} />
              <input type="text" className={styles.code_small_input} value={codeNumber[1] || ''} />
              <input type="text" className={styles.code_small_input} value={codeNumber[2] || ''} />
              <input type="text" className={styles.code_small_input} value={codeNumber[3] || ''} />
              <input type="text" className={styles.code_small_input} value={codeNumber[4] || ''} />
              <input type="text" className={styles.code_small_input} value={codeNumber[5] || ''} />
            </form>

            <p className={styles.no_code}> לא קיבלת קוד? </p>

            <p className={styles.resend_code} onClick={resendCode}> שלח לי שוב קוד </p>

            <NumericKeypad setValue={(v) => setCodeNumber((prev) => prev + v)} cancel_caracter={cancelCharacter} />

          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={onBack} type="outline">
            <div className={styles.arrowRight}>
              <Arrow />
            </div>
            ביטול
          </Button>

        </div>

        <ErrorModal show={showError}
          setShow={setShowError} />

        <ErrorTimesModal show={showErrorAttempts}
          setShow={setShowErrorAttempts} />
      </div>
    </>
  )
};

export default InsertCode;
