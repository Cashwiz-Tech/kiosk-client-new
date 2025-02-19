import "./operation-system.css";
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
import Header from "layouts/header/Header";
import { useState } from "react";
import Button from "lib/button";
import NumericKeypadSmall from "components/buying/numeric-keypad-small/numeric-keypad-small";
import { adminLogin } from "api/auth/admin";
import { useParams } from "react-router-dom";
import { setAdminAuthToken } from "store/authSlice";

const OperationSystem = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const [code, setCode] = useState<string>("");

  function cancelCharacter() {
    setCode(code.substring(0, code.length - 1));
  }

  async function validateCode() {
    const partnerId = params.partnerId || "";
    const token = await adminLogin({
      partnerId,
      code,
    });

    if (!token) {
      dispatch(setCurrentScreen(Screens.CODE_ERR));
      return;
    }

    setAdminAuthToken(token);
    dispatch(setCurrentScreen(Screens.OPERATION_SYSTEM_TABS));
  }

  function handleChangeCode(digit: string) {
    setCode(code + digit);
  }

  return (
    <>
      <Header show_logo={false}></Header>
      <div className="OperationSystem">
        <div className="WelcomeScreenSecond-first-part">
          <div className="mid-title">
            הכנס קוד
          </div>

          <input type="text" className="operation-code-input" value={code} onChange={(e) => setCode(e.target.value)} />

          <NumericKeypadSmall setValue={(v: any) => handleChangeCode(v)} cancel_caracter={cancelCharacter} />

          <div className="buttons-container-currency-total">
            <Button onClick={validateCode} style={{
              width: '344px'
            }}>
              אישור
              <Arrow />
            </Button>

            <Button onClick={() => dispatch(setCurrentScreen(Screens.WELCOME_SCREEN))}
              style={{
                width: '344px',
                borderColor: "#fff",
              }}
              type="outline"
            >
              <img
                src={"/chevron-right.svg"}
                className="button-icon"
                alt="right arrow"
              />
              <span>
                ביטול
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationSystem;
