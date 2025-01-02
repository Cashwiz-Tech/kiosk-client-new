import { getPartnerData } from "api/partnerApi";
import { phoneRegister } from "api/phone-register";
import ContactModal from "components/buying/contact-modal/contact-modal";
import OnBoarding from "components/buying/on-boarding/on-boarding";
import Payment from "components/buying/payment";
import PhoneRecording from "components/buying/phone-recording";
import SuccessPhone from "components/buying/success-phone";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutFinishScreen from "screens/CheckoutFinishScreen/CheckoutFinishScreen";
import ChooseAmountScreen from "screens/ChooseAmountScreen/ChooseAmountScreen";
import ChooseCurrencyScreen from "screens/ChooseCurrency/ChooseCurrencyScreen";
import ChooseRegisterOption from "screens/ChooseRegisterOption/ChooseRegisterOption";
import CodeErr from "screens/CodeErr/code_err";
import DocumentType from "screens/DocumentType/DocumentType";
import FinalFaceDoc from "screens/FinalFaceDoc/FinalFaceDoc";
import FinishMatahScreen from "screens/FinishMatah/FinishMatah";
import FinishRegister from "screens/FinishRegister/FinishRegister";
import GetMatahScreen from "screens/GetMatah/GetMatah";
import InsertBanknotesScreen from "screens/InsertBanknotes/InsertBanknotes";
import InsertCode from "screens/InsertCode/InsertCode";
import LinkRegister from "screens/LinkRegister/LinkRegister";
import NotMyNum from "screens/NotMyNum/NotMyNum";
import OperationSystem from "screens/OperationSystem/operation-system";
import OperationSystemExit from "screens/OperationSystemExit/operation_system_exit";
import OperationSystemTabs from "screens/OperationSystemTabs/operation-system-tabs";
import OrderSummaryScreen from "screens/OrderSummaryScreen/OrderSummaryScreen";
import PaymentScreen from "screens/PaymentScreen/PaymentScreen";
import PaymentSuccessScreen from "screens/PaymentSuccessScreen/PaymentSuccessScreen";
import QRRegister from "screens/QRRegister/QRRegister";
import Register from "screens/Register/Register";
import ScanDoc from "screens/ScanDoc/ScanDoc";
import ScanFace from "screens/ScanFace/ScanFace";
import ScanFaceUserExist from "screens/ScanFaceUserExist/ScanFaceUserExist";
import ScanSuccess from "screens/ScanSuccess/ScanSuccess";
import ScanVideo from "screens/ScanVideo/ScanVideo";
import SelectMatah from "screens/SelectMatah/SelectMatah";
import SendOTPExisted from "screens/SendOTPExisted/SendOTPExisted";
import TotalMatahScreen from "screens/TotalMathah/TotalMathah";
import UserDetails from "screens/UserDetails/UserDetails";
import WelcomeScreen from "screens/welcomeScreen/welcome-screen";
import WelcomeScreenMatah from "screens/welcomeScreenMatah/welcome-screen-matah";
import WelcomeScreenNew from "screens/welcomeScreenNew/welcome-screen-new";
import WelcomeScreenSecond from "screens/welcomeScreenSecond/welcome-screen-second";
import TotalMathahScreen from "screens/YouChooseMatah/YouChooseMatah";
import YouChooseMatahScreen from "screens/YouChooseMatah/YouChooseMatah";
import { setCurrentScreen } from "store/navigationSlice";
import { setPartnerData } from "store/partnerSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { Screens } from "types/Screens";

export default function Buying({ setShow, show }: { setShow: (val: boolean) => void; show: boolean }) {
  const params = useParams();
  const [isLoadingPartnerData, setIsLoadingPartnerData] = useState(false);
  const dispatch = useAppDispatch();
  const currentScreen = useAppSelector((state) => state.navigation.currentScreen);
  const [isShowOnBoarding, setIsShowOnBoarding] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberContact, setphoneNumberContact] = useState("0527686543");

  useEffect(() => {
    (async () => {
      setIsLoadingPartnerData(true);
      try {
        const getPartnerDataResponse = await getPartnerData(Number(params?.partnerId) ?? 0);

        if (getPartnerDataResponse) {
          dispatch(setPartnerData(getPartnerDataResponse));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingPartnerData(false);
      }
    })();
  }, []);

  if (isLoadingPartnerData) {
    return <></>;
  }

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

    case Screens.INSERT_BANKNOTES:
      return <InsertBanknotesScreen />;

      
    case Screens.YOU_CHOOSE_MATAH:
      return <YouChooseMatahScreen />;
      
          
    case Screens.TOTAL_MATAH:
      return <TotalMatahScreen />;

      
    case Screens.GET_MATAH:
      return <GetMatahScreen />;

    case Screens.FINISH_MATAH:
      return <FinishMatahScreen />;
      


    case Screens.WELCOME_SCREEN:
      return (
        <>
          <WelcomeScreenNew />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

      
    case Screens.OPERATION_SYSTEM:
      return (
        <>
          <OperationSystem/>
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
    );
      
    case Screens.CODE_ERR:
      return (
        <>
          <CodeErr/>
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
    );
      
    case Screens.OPERATION_SYSTEM_TABS:
      return (
        <>
          <OperationSystemTabs/>
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
    );

    case Screens.OPERATION_SYSTEM_EXIT:
      return (
        <>
          <OperationSystemExit/>
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
    );

    


    case Screens.WELCOME_SCREEN_MATAH:
      return (
        <>
          <WelcomeScreenMatah />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );
  

    case Screens.WELCOME_SCREEN_SECOND:
      return <>
      <WelcomeScreenSecond />
      </>;

    case Screens.INSERT_CODE:
      return (
        <>
          <InsertCode />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.CHOOSE_REGISTER_OPTION:
      return (
        <>
          <ChooseRegisterOption />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.QR_REGISTER:
      return (
        <>
          <QRRegister />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.LINK_REGISTER:
      return (
        <>
          <LinkRegister />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.REGISTER_HERE:
      return (
        <>
          <Register
            onNext={() => {
              dispatch(setCurrentScreen(Screens.DOCUMENT_TYPE));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.DOCUMENT_TYPE:
      return (
        <>
          <DocumentType
            onNext={() => {
              dispatch(setCurrentScreen(Screens.SCAN_VIDEO));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.CHOOSE_REGISTER_OPTION));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.SCAN_VIDEO:
      return (
        <>
          <ScanVideo
            onNext={() => {
              dispatch(setCurrentScreen(Screens.SCAN_DOC));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.DOCUMENT_TYPE));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.SCAN_DOC:
      return (
        <>
          <ScanDoc
            onNext={() => {
              dispatch(setCurrentScreen(Screens.SCAN_SUCCESS));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.SCAN_VIDEO));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.SCAN_SUCCESS:
      return (
        <>
          <ScanSuccess
            onNext={() => {
              dispatch(setCurrentScreen(Screens.SCAN_FACE));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.SCAN_DOC));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.SCAN_FACE:
      return (
        <>
          <ScanFace
            onNext={() => {
              dispatch(setCurrentScreen(Screens.FINAL_FACE_DOC));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.SCAN_SUCCESS));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.SCAN_FACE_USER_EXIST:
      return (
        <>
          <ScanFaceUserExist
            onNext={() => {
              dispatch(setCurrentScreen(Screens.CHOOSE_CURRENCY));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.INSERT_CODE));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.FINAL_FACE_DOC:
      return (
        <>
          <FinalFaceDoc
            onNext={() => {
              dispatch(setCurrentScreen(Screens.FINISH_REGISTER));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.SCAN_FACE));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.CHECKOUT_FINISH:
      return <CheckoutFinishScreen />;

    case Screens.FINISH_REGISTER:
      return (
        <>
          <FinishRegister
            onNext={() => {
              dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.FINAL_FACE_DOC));
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.USER_DETAILS:
      return (
        <>
          <UserDetails
            onNext={(phoneNumber: string) => {
              dispatch(setCurrentScreen(Screens.INSERT_CODE));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
              setIsShowOnBoarding(false);
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.SEND_OTP_EXISTED:
      return (
        <>
          <SendOTPExisted
            onNext={(phoneNumber: string) => {
              dispatch(setCurrentScreen(Screens.INSERT_CODE));
            }}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.USER_DETAILS));
              setIsShowOnBoarding(false);
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.NOT_MY_NUM:
      return (
        <>
          <NotMyNum
            onNext={(phoneNumber: string) => {}}
            onBack={() => {
              dispatch(setCurrentScreen(Screens.WELCOME_SCREEN));
              setIsShowOnBoarding(false);
            }}
          />
          <ContactModal show={show} setShow={setShow} phoneNumber={phoneNumberContact} />
        </>
      );

    case Screens.CHOOSE_AMOUNT:
      return <ChooseAmountScreen />;

    case Screens.SCAN_SELECT_MATAH:
        return <SelectMatah/>;
      

    case Screens.PAYMENT:
      return <PaymentScreen />;
    case Screens.PAYMENT_SUCCESS:
      return <PaymentSuccessScreen />;
    case Screens.ORDER_SUMMARY:
      return <OrderSummaryScreen />;
    default:
      return (
        <>
          <Payment setStep={(step: Screens) => dispatch(setCurrentScreen(step))} setIsShowOnBoarding={setIsShowOnBoarding} />

          <OnBoarding show={isShowOnBoarding} setShow={(v) => setIsShowOnBoarding(v)} />
        </>
      );
  }
}
