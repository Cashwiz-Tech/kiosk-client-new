import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import RemoveOrderModal from "components/buying/remove-order-modal"
import "./SupplierOrderPersonalDetails.css";
import CurrencyBox from "components/ChooseCurrencyScreen/CurrencyBox/CurrencyBox";
import Header from "layouts/header/Header";
import Button from "lib/button";
import { useEffect, useState } from "react";
import { setCurrentScreen } from "store/navigationSlice";
import { useAppDispatch } from "store/store";
import { PossibleCurrencies } from "types/Currencies";
import { Screens } from "types/Screens";
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
import LettersKeypad from "components/buying/letters-keypad/letters-keypad";
import Input from "lib/input";


const SupplierOrderPersonalDetails = () => {
  const dispatch = useAppDispatch();
	const [showScreenError, setshowScreenError] = useState(false);
	
  const [timeoutID, settimeoutID] = useState<any>();
  const [fake, setfake] = useState(false);
  const [remove_order_popup, set_remove_order_popup] = useState(false);
  const [show_to_payment_popup, set_show_to_payment_popup] = useState(false);
  
  const [id_remove_order, set_id_remove_order] = useState<any>();
  const [name, setName] = useState<string>("")
	
  const [phone, setPhone] = useState<string>("")
	const [focusisVisitedID, setfocusisVisitedID] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const [errorMessageIdentity, seterrorMessageIdentity] = useState("")

  const [isVisitedID, setisVisitedID] = useState(false)
  const [isVisited, setIsVisited] = useState(false)


	useEffect(() => {
		setTimeout(()=>{
            setshowScreenError(true);
        }, 60000);
	}, []);

    useEffect(() => {
        if(showScreenError==false){
            clearTimeout(timeoutID)
        } else {
            settimeoutID(setTimeout(()=>{
                dispatch(setCurrentScreen(Screens.WELCOME_SCREEN)) 
            }, 30000));
        }
    }, [showScreenError]);

  
	function cancel_caracter(){
		let str = phone.substring(0, phone.length - 1);
		setPhone(str)
	}

    function cancel_caracter_user(){
      let str = name.substring(0, name.length - 1);
      setName(str)
    }


    const validateName = () => {
		
      let HebrewChars = new RegExp("^[\u0590-\u05FF ]*$");
  
      if(name.length>=1 ){
        setisVisitedID(true);
        if (!HebrewChars.test(name)) {
          seterrorMessageIdentity('שם מלא צריך להיות בעברית')
        } else {
          seterrorMessageIdentity("")
        }
      }
    }
  
    const validatePhone = (v: string) => {
      debugger;
      if(v.length>=1 ){
        setIsVisited(true)
        
        if (v.length !== 10) {
          setErrorMessage("מספר הטלפון אינו תקין")
        } else {
          setErrorMessage("")
        }
      }
    }

  return (
    <div className="main_cont">
    <Header show_logo={false}></Header>
    <div className="container container_dark">
      <div className="currencies-container-d">

        <div className="top_header_cont">
          <p className="title_cont_dark">פרטים אישיים</p>
          <button className="add_another_product_btn" onClick={() => {dispatch(setCurrentScreen(Screens.CHOOSE_SUPPLIER))}}>הוספת מוצר נוסף +</button>
        </div>

            <Input
            type="no_type"
            value={name}
            setValue={(v) => setName(v)}
            label="*שם מלא"
            errorMessage={errorMessageIdentity}
            isVisited={isVisitedID}
            validate={validateName}
            focus_func={()=>{setfocusisVisitedID(true)}} 
          />

          <Input
            type="no_type"
            value={phone}
            setValue={(v) => setPhone(v)}
            label="*טלפון"
            errorMessage={errorMessage}
            isVisited={isVisited}
            validate={validatePhone}
            focus_func={()=>{setfocusisVisitedID(false)}} 
          />

          <div className="LettersKeypad_cont">
            {!focusisVisitedID ?<LettersKeypad gray_color="gray_color" setValue={(v:any) => setPhone((prev) => prev + v)} cancel_caracter={cancel_caracter}/> :
            <LettersKeypad gray_color="gray_color" setValue={(v:any) => setName((prev) => prev + v)} cancel_caracter={cancel_caracter_user}/>}
          </div>

      </div>


      <div className="buttons-container-personal-details">

        <button className="to_payment_btn" onClick={()=> dispatch(setCurrentScreen(Screens.SUPPLIER_ORDER_CHOOSE_PAYMENT))}>אישור</button>

      </div>
    </div>

      
    <ErrorScrenLeftModal show={showScreenError}
            setShow={setshowScreenError}/>
                      
    </div>

  );
};

export default SupplierOrderPersonalDetails;
