import { useState } from "react";
import Payment from "components/buying/payment";
import PhoneRecording from "components/buying/phone-recording";
import SuccessPhone from "components/buying/success-phone";
import ContactModal from "components/buying/contact-modal/contact-modal";
import OnBoarding from "components/buying/on-boarding/on-boarding";
import { phoneRegister } from "api/phone-register";
import { Screens } from "types/Screens";
import ChooseCurrencyScreen from "screens/ChooseCurrency/ChooseCurrencyScreen";
import WelcomeScreen from "screens/welcomeScreen/welcome-screen";
import { useAppDispatch, useAppSelector } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import ChooseAmountScreen from "screens/ChooseAmountScreen/ChooseAmountScreen";
import PaymentScreen from "screens/PaymentScreen/PaymentScreen";
import PaymentSuccessScreen from "screens/PaymentSuccessScreen/PaymentSuccessScreen";
import OrderSummaryScreen from "screens/OrderSummaryScreen/OrderSummaryScreen";
import UserDetails from "screens/UserDetails/UserDetails";
import DocumentType from "screens/DocumentType/DocumentType";
import InsertCode from "screens/InsertCode/InsertCode";
import ErrorModal from "components/buying/error-modal";
import ChooseRegisterOption from "screens/ChooseRegisterOption/ChooseRegisterOption";
import QRRegister from "screens/QRRegister/QRRegister";
import LinkRegister from "screens/LinkRegister/LinkRegister";
import Register from "screens/Register/Register";
import ScanVideo from "screens/ScanVideo/ScanVideo";
import ScanDoc from "screens/ScanDoc/ScanDoc";

export default function Buying({
  setShow,
  show,
}: {
  setShow: (val: boolean) => void;
  show: boolean;
}) {
  const dispatch = useAppDispatch();
  const currentScreen = useAppSelector(
    (state) => state.navigation.currentScreen
  );
  const [isShowOnBoarding, setIsShowOnBoarding] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberContact, setphoneNumberContact] = useState("0527686543");


  switch (currentScreen) {
    case Screens.PHONE_RECORDING:
      return (
        <PhoneRecording
          onNext={(phoneNumber: string) => {
            dispatch(setCurrentScreen(Screens.PHONE_SUCCESS));
            setPhoneNumber(phoneNumber);
            phoneRegister(phoneNumber);
          }}
          onBack={() => {
            dispatch(setCurrentScreen(Screens.ON_BOARDING));
            setIsShowOnBoarding(false);
            setShow(false);
          }}
        />
      );
    case Screens.PHONE_SUCCESS:
      return (
        <SuccessPhone
          onBack={() => {
            dispatch(setCurrentScreen(Screens.ON_BOARDING));
            setShow(false);
          }}
        />
      );
    case Screens.CHOOSE_CURRENCY:
      return <ChooseCurrencyScreen />;
    case Screens.WELCOME_SCREEN:
        return <>
        <WelcomeScreen />
        <ContactModal
        show={show}
        setShow={setShow}
        phoneNumber={phoneNumberContact}
      /></>;

    case Screens.INSERT_CODE:
        return <>
        <InsertCode />
        <ContactModal
        show={show}
        setShow={setShow}
        phoneNumber={phoneNumberContact}
        />
   
      </>;

    case Screens.CHOOSE_REGISTER_OPTION:
      return <>
      <ChooseRegisterOption />
      <ContactModal
      show={show}
      setShow={setShow}
      phoneNumber={phoneNumberContact}
      />

    </>;



    case Screens.QR_REGISTER:
      return <>

      <QRRegister />
      <ContactModal
      show={show}
      setShow={setShow}
      phoneNumber={phoneNumberContact}
      />
    </>;

    case Screens.LINK_REGISTER:
      return <>
      <LinkRegister />
      <ContactModal
      show={show}
      setShow={setShow}
      phoneNumber={phoneNumberContact}
      />
    </>;

    case Screens.REGISTER_HERE:
      return <>
      <Register 
      onNext={() => {
        dispatch(setCurrentScreen(Screens.DOCUMENT_TYPE));
      }}
      onBack={() => {
        dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
      }}
      />
      <ContactModal
      show={show}
      setShow={setShow}
      phoneNumber={phoneNumberContact}
      />
    </>;

    case Screens.DOCUMENT_TYPE:
        return <>
        <DocumentType 
        onNext={() => {
          dispatch(setCurrentScreen(Screens.SCAN_VIDEO));
        }}
        onBack={() => {
          dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
        }}
        />
        <ContactModal
        show={show}
        setShow={setShow}
        phoneNumber={phoneNumberContact}
        />
    </>;

    case Screens.SCAN_VIDEO:
      return <>
      <ScanVideo
      onNext={() => {
        dispatch(setCurrentScreen(Screens.SCAN_DOC));
      }}
      onBack={() => {
        dispatch(setCurrentScreen(Screens.DOCUMENT_TYPE));
      }}
      />
      <ContactModal
      show={show}
      setShow={setShow}
      phoneNumber={phoneNumberContact}
      />
    </>;


    case Screens.SCAN_DOC:
      return <>
      <ScanDoc
      onNext={() => {
        dispatch(setCurrentScreen(Screens.SCAN_VIDEO));
      }}
      onBack={() => {
        dispatch(setCurrentScreen(Screens.SCAN_VIDEO));
      }}
      />
      <ContactModal
      show={show}
      setShow={setShow}
      phoneNumber={phoneNumberContact}
      />
    </>;


    case Screens.USER_DETAILS:
        return <>
        <UserDetails 
        onNext={(phoneNumber: string) => {
          dispatch(setCurrentScreen(Screens.INSERT_CODE));
          setPhoneNumber(phoneNumber);
     
        }}
        onBack={() => {
          dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
          setIsShowOnBoarding(false);
          setShow(false);
        }}
        />
        <ContactModal
        show={show}
        setShow={setShow}
        phoneNumber={phoneNumberContact}
      /></>;
    case Screens.CHOOSE_AMOUNT:
      return <ChooseAmountScreen />;
    case Screens.PAYMENT:
      return <PaymentScreen />;
    case Screens.PAYMENT_SUCCESS:
      return <PaymentSuccessScreen />;
    case Screens.ORDER_SUMMARY:
      return <OrderSummaryScreen />;
    default:
      return (
        <>
          <Payment
            setStep={(step: Screens) => dispatch(setCurrentScreen(step))}
            setIsShowOnBoarding={setIsShowOnBoarding}
          />
          
          <OnBoarding
            show={isShowOnBoarding}
            setShow={(v) => setIsShowOnBoarding(v)}
          />
        </>
      );
  }
}
