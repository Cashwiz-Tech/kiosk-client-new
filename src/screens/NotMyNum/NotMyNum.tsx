import { ReactComponent as Arrow } from "assets/arrow.svg";
import Button from "lib/button";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { Screens } from "types/Screens";
import styles from "./NotMyNum.module.css";
import Header from "layouts/header/Header";

type Props = {
  onNext: (phoneNumber: string) => void;
  onBack: () => void;
};

export default function NotMyNum({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();

  function go_to_register() {
    dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
  }

  return (
    <>
		<Header></Header>
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}> לא זיהית את מס’ הטלפון? ניתן לפנות לשירות לקוחות לבירור או לבצע הרשמה </h3>

        <Button onClick={() => go_to_register()}>
          קח אותי להרשמה
          <Arrow />
        </Button>
      </div>

      <div className={styles.buttons + " " + styles.buttons_bottom}>
        <Button onClick={onBack} type="outline">
          <div className={styles.arrowRight}>
            <Arrow />
          </div>
          חזרה למסך ראשי
        </Button>
        <p className={styles.subtitle}> להרשמה דרך שירות הלקוחות שלנו ניתן להתקשר 08-9655656 </p>
      </div>
    </div>
    </>
  );
}
