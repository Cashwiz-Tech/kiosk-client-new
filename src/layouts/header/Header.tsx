import "./Header.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon from './../../assets/change_icon.png'
import credit_card_icon from './../../assets/credit_card_icon.png'
import question_mark from './../../assets/question_mark.png'
import { useAppDispatch } from "store/store";
import { ReactComponent as Logo } from "assets/logo.svg";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
const Header = (props:any) => {
    const dispatch = useAppDispatch();
    
    return (
        <div className="Header">
          
           {props.show_logo==false? <></>:<div className="logo">{<Logo />}</div>}

            {props.user_name?<div className="user_name_text">{props.user_name}</div>: <></>}

            <div className="menu_btn_cont"> 
                <img src={question_mark} />
                <div className="menu_btn" onClick={() => { dispatch(setCurrentScreen(Screens.WELCOME_SCREEN))}}> תפריט </div>
            </div>
        </div>
    );

};

export default Header;

