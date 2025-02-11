import { checkUser } from "api/checkUser";
import { ReactComponent as Arrow } from "assets/arrow.svg";
import Header from "layouts/header/Header";
import Button from "lib/button";
import Input from "lib/input";
import { useState } from "react";
import { setCurrentScreen, setOTP, setPhoneNum, setUserExist } from "store/navigationSlice";
import { setIDNum } from "store/registerSlice";
import { useAppDispatch } from "store/store";
import { Screens } from "types/Screens";
import { formatPhoneNumber } from "utils/formatPhoneNumber";
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad";
import styles from "./UserDetails.module.css";

type Props = {
  onNext: (phoneNumber: string) => void;
  onBack: () => void;
};

export default function UserDetails({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [identityNumber, setidentityNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageIdentity, seterrorMessageIdentity] = useState("");
  const [isVisited, setIsVisited] = useState(false);
  const [isVisitedID, setisVisitedID] = useState(false);

  const [focusisVisitedID, setfocusisVisitedID] = useState(true);

  const [israel_prefix, setisrael_prefix] = useState("972");

  const validate = (v: string) => {
    let num = v;

    if (String(num).trim().length > 1) {
      setIsVisited(true);

      if (num.includes("-")) {
        num = num.slice(0, 3) + num.slice(4, num.length);
      }

      if (num.length !== 10 || num[0] != "0") {
        setErrorMessage("מספר הטלפון אינו תקין");
      } else {
        setErrorMessage("");
      }
    }
  };

  const validateId = (id: string) => {
    var id = id.trim();

    if (String(id).trim().length > 1) {
      setisVisitedID(true);

      if (
        id.length == 9 &&
        Array.from(id, Number).reduce((counter, digit, i) => {
          const step = digit * ((i % 2) + 1);
          return counter + (step > 9 ? step - 9 : step);
        }) %
        10 ===
        0
      ) {
        seterrorMessageIdentity("");
      } else {
        seterrorMessageIdentity("מספר הת.ז אינו תקין");
      }
    }
  };

  function cancel_caracter() {
    let str = phoneNumber.substring(0, phoneNumber.length - 1);
    setPhoneNumber(str);
  }

  function cancel_caracter_id() {
    let str = identityNumber.substring(0, identityNumber.length - 1);
    setidentityNumber(str);
  }

  async function handleCheckUser() {
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber, true);

    const { error, validationErrors, customer } = await checkUser({
      phoneNumber: formattedPhoneNumber,
      personalId: identityNumber,
    });

    if (error) {
      // Not handled for now

      console.error(error);
    } else if (validationErrors) {
      // Not handled for now

      console.error("Validation errors:");
      for (const field in validationErrors) {
        console.error(`Error on ${field}: ${validationErrors[field]}`);
      }
    } else if (customer) {
      dispatch(setPhoneNum(phoneNumber));
      dispatch(setUserExist(true));
      // dispatch(setOTP(res.data.otp));
      dispatch(setCurrentScreen(Screens.SEND_OTP_EXISTED));
      dispatch(setIDNum(identityNumber));
    } else {
      dispatch(setUserExist(false));
    }
  }

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>על מנת לקבל שירות עליך לבצע זיהוי קצר</h3>
          <div className={styles.phoneInput}>
            <Input
              type="identityNumber"
              value={identityNumber}
              setValue={(v) => setidentityNumber(v)}
              label="מספר זהות"
              errorMessage={errorMessageIdentity}
              isVisited={isVisitedID}
              validate={validateId}
              focus_func={() => {
                setfocusisVisitedID(true);
              }}
            />

            <Input
              type="phoneNumber"
              value={phoneNumber}
              setValue={(v) => setPhoneNumber(v)}
              label="נייד"
              errorMessage={errorMessage}
              isVisited={isVisited}
              validate={validate}
              focus_func={() => {
                setfocusisVisitedID(false);
              }}
            />

            {!focusisVisitedID ? (
              <NumericKeypad setValue={(v: any) => setPhoneNumber((prev) => prev + v)} cancel_caracter={cancel_caracter} />
            ) : (
              <NumericKeypad setValue={(v: any) => setidentityNumber((prev) => prev + v)} cancel_caracter={cancel_caracter_id} />
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={onBack} type="outline">
            <div className={styles.arrowRight}>
              <Arrow />
            </div>
            ביטול
          </Button>
          <Button
            onClick={() => {
              handleCheckUser();
            }}
            disabled={!!errorMessage || !isVisited || !!errorMessageIdentity || !isVisitedID}
          >
            אישור
            <Arrow />
          </Button>
        </div>
      </div>
    </>
  );
}
