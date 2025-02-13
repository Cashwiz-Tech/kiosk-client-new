import "./Header.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon from './../../assets/change_icon.png'
import credit_card_icon from './../../assets/credit_card_icon.png'
import question_mark from './../../assets/question_mark.png'
import { useAppDispatch } from "store/store";
import { ReactComponent as Logo } from "assets/logo.svg";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import { setService } from "store/serviceSlice";
const Header = () => {
  const dispatch = useAppDispatch();

  const handleMenu = () => {
    dispatch(setService(null));
    dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
  }

  return (
    <div className="Header">

      <div className="logo">{<Logo />}</div>

      <div className="menu_btn_cont">
        <img src={question_mark} />
        <div className="menu_btn" onClick={handleMenu}> תפריט </div>
      </div>
    </div>
  );

};

export default Header;

