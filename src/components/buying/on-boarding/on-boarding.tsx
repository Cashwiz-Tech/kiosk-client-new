import BottomModal from "lib/bottom-modal";
import { ReactComponent as BuyingForex } from "assets/buying/buying-forex.svg";
import styles from "./on-boarding.module.css";
import Input from "lib/input";
import ChooseCurrency from "../../currency/choose-currency";
import { useState } from "react";

type Props = {
  show: boolean;
  setShow: (v: boolean) => void;
};

const contents = [
  <>
    <h4 className={styles.title}>רכישת המט”ח מהעמדה מתבצעת בכמה קליקים</h4>
    <p className={styles.text}>את המט”ח אתם אוספים מהכספומט מיד בסיום הרכישה</p>
    <div className={styles.imgWrapper}>
      <BuyingForex />
    </div>
  </>,
  <>
    <h4 className={styles.title}>
      בוחרים את המטבע שרוצים לרכוש ואת מס’ התשלומים
    </h4>
    <div className={styles.content}>
      <ChooseCurrency
        countPayments={2}
        totalPayment={1850}
        totalPayable={1755}
      />
    </div>
  </>,
  <>
    <h4 className={styles.title}>מקלדים פרטי זיהוי</h4>
    <p className={styles.text}> מספר תעודת זהות ומספר נייד </p>
    <div className={styles.content}>
      <Input
        value=""
        setValue={() => null}
        label="מספר זהות"
        placeholder="123456789"
        type="identityNumber"
      />
      <Input
        value=""
        setValue={() => null}
        label="נייד"
        placeholder="052-4567890"
        type="phoneNumber"
      />
    </div>
  </>,
  <>
    <h4 className={styles.title}>מאשרים את סיכום העסקה</h4>
    <p className={styles.text}>ולוחצים על תשלום</p>
    <div className={styles.content}>
      <ChooseCurrency
        countPayments={4}
        totalPayment={1755}
        totalPayable={3654}
        type="confirm"
      />
    </div>
  </>,
];

export default function OnBoarding({ show, setShow }: Props) {
  const [step, setStep] = useState(0);

  return (
    <BottomModal
      show={show}
      setShow={setShow}
      footer={
        <div className={styles.footer}>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => setShow(false)}>
              למסך הבית
            </button>
            <button
              className={styles.button}
              onClick={() => setStep((prev) => (prev + 1) % 4)}
            >
              הבא
            </button>
          </div>
          <div className={styles.steps}>
            {Array.from({ length: contents.length }, (v, idx) => (
              <div
                key={idx}
                className={`${styles.step} ${
                  step === idx ? styles.current : ""
                }`}
              />
            ))}
          </div>
        </div>
      }
    >
      <div className={styles.modal}>{contents[step]}</div>
    </BottomModal>
  );
}
