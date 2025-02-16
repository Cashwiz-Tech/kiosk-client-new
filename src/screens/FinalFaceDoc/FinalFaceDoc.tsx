import { register } from "api/register";
import { ReactComponent as Arrow } from "assets/arrow.svg";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { Screens } from "types/Screens";
import { formatPhoneNumber } from "utils/formatPhoneNumber";
import styles from "./FinalFaceDoc.module.css";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function FinalFaceDoc({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();
  const [showScreenError, setshowScreenError] = useState(false);

  const [timeoutID, settimeoutID] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setshowScreenError(true);
    }, 60000);
  }, []);

  useEffect(() => {
    if (showScreenError == false) {
      clearTimeout(timeoutID);
    } else {
      settimeoutID(
        setTimeout(() => {
          dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
        }, 30000)
      );
    }
  }, [showScreenError]);

  const [showError, setShowError] = useState("");
  const token = useAppSelector((state) => state.auth.token);

  const fullName = useAppSelector((state) => state.register.fullName);

  const email = useAppSelector((state) => state.register.email);

  const teudatZehot = useAppSelector((state) => state.register.IDNum);

  const darkon = useAppSelector((state) => state.register.DarkonNum);

  const documentType = useAppSelector((state) => state.register.documentType);

  const phoneNumber = useAppSelector((state) => state.navigation.phoneNum);

  const userImage = useAppSelector((state) => state.register.UserImage);

  const userDoc = useAppSelector((state) => state.register.UserDoc);

  async function goToNextPage() {
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];

    const phoneFormatted = formatPhoneNumber(phoneNumber, true);

    const idToRequest = documentType === "darkon" ? darkon : teudatZehot;

    const formData = new FormData();
    formData.append("fName", firstName);
    formData.append("lName", lastName);
    formData.append("address", email);
    formData.append("personalId", idToRequest);
    formData.append("phoneNumber", phoneFormatted);
    formData.append("documentType", documentType);
    formData.append("photo", userImage);
    formData.append("idImage", userDoc);

    const { error, validationErrors } = await register(token as string, formData);

    if (error) {
      setShowError(error);
      return;
    }

    if (validationErrors) {
      setShowError("Invalid data provided");
      return;
    }

    onNext();
  }

  return (
    <div className={styles.main_cont}>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}> תעודה מזהה ותצלום פנים</h3>

          <img src={userDoc} className={styles.scand_tz} />
          <img src={userImage} className={styles.scand_tz} />

          {showError ? <p className={styles.error}> {showError} </p> : <></>}
        </div>
        <div className={styles.buttons}>
          <Button onClick={onBack} type="outline">
            <div className={styles.arrowRight}>
              <Arrow />
            </div>
            חזרה
          </Button>
          <Button
            onClick={() => {
              goToNextPage();
            }}
          >
            המשך
            <Arrow />
          </Button>
        </div>
      </div>

      <ErrorScrenLeftModal show={showScreenError} setShow={setshowScreenError} />
    </div>
  );
}
