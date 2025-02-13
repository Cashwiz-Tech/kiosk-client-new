import { ReactComponent as Logo } from "assets/logo.svg";
import { setCurrentScreen } from "store/navigationSlice";
import { setService } from "store/serviceSlice";
import { useAppDispatch } from "store/store";
import { Screens } from "types/Screens";
import question_mark from "./../../assets/question_mark.png";
import "./Header.css";
const Header = () => {
  const dispatch = useAppDispatch();

  const handleMenu = () => {
    dispatch(setService(null));
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  };

  return (
    <div className="Header">
      <div className="logo">{<Logo />}</div>

      <div className="menu_btn_cont">
        <img src={question_mark} />
        <div className="menu_btn" onClick={handleMenu}>
          {" "}
          תפריט{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
