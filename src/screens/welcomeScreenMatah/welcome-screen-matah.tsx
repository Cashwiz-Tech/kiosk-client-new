import "./welcome-screen-matah.css";
import change_icon_orange from './../../assets/change_icon_orange.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import usdIcon from './../../assets/united states.png'
import euroIcon from './../../assets/euro_icon.png'
import Header from "layouts/header/Header";
import { useEffect, useMemo, useState } from "react";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import { getCurrencies } from "api/currencyApi";
import { useParams } from "react-router-dom";
import { CurrencyDTO } from "types/Currencies";

const WelcomeScreenMatah = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const [showScreenError, setshowScreenError] = useState(false);
  const [timeoutID, settimeoutID] = useState<any>();

  const [currencies, setCurrencies] = useState<CurrencyDTO[] | null>(null);

  useEffect(() => {
    (async () => {
      const partnerId = params.partnerId || "";
      const { currencies: data } = await getCurrencies(partnerId);

      if (data) {
        setCurrencies(data);
      }

      setTimeout(() => {
        setshowScreenError(true);
      }, 60000);
    })();
  }, [params.partnerId]);

  useEffect(() => {
    if (!showScreenError) {
      clearTimeout(timeoutID)
    } else {
      settimeoutID(setTimeout(() => {
        dispatch(setCurrentScreen(Screens.WELCOME_SCREEN))
      }, 30000));
    }
  }, [showScreenError]);

  const currenciesRendered = currencies?.map((c, i) => {
      let img: string;
      let sign: string;

      switch (c.name) {
        case "USD": {
          img = usdIcon;
          sign = "$";
          break;
        }
        case "EUR": {
          img = euroIcon;
          sign = "€";
          break;
        }
      }

      const buying = (
        c.rate * (1 - c.profitBuying * 0.01)
      ).toLocaleString(
        undefined,
        {
          maximumFractionDigits: 4,
          minimumFractionDigits: 4,
        },
      );
      const selling = (
        c.rate * (1 + c.profitBuying * 0.01)
      ).toLocaleString(
        undefined,
        {
          maximumFractionDigits: 4,
          minimumFractionDigits: 4,
        },
      );

      return <div
        className="small_title_cont"
        key={`currency-item-${i}`}
      >
        <div className="b_title">₪ {buying}</div>
        <div className="b_title">₪ {selling}</div>
        <p className="b_title b_title_one">
          {sign}1
        </p>
        <img src={img} className="euro_icon" alt={`${c.name} icon`} />
      </div>
    }) || [];

  return (
    <>
      <Header></Header>
      <div className="WelcomeScreenMatah">
        <div className="WelcomeScreenSecond_first_part">
          <div className="mid_title">קנייה ומכירת מט"ח</div>

          <div>
            <div className="small_title_cont">
              <div className="small_title">Sell</div>
              <div className="small_title">Buy</div>
              <div className="small_title"></div>
            </div>
            {currenciesRendered}
          </div>

          <div className="secong_screen_title_cont">
            <img src={change_icon_orange} alt="Change" />
            <div className="secong_screen_title">שערי המרה משתלמים במיוחד! </div>
          </div>

          <button className="start_buy_btn" onClick={() => { dispatch(setCurrentScreen(Screens.USER_DETAILS)) }}> אני רוצה נתחיל ברכישה </button>

        </div>
      </div>

      <ErrorScrenLeftModal show={showScreenError}
        setShow={setshowScreenError} />
    </>
  );

};

export default WelcomeScreenMatah;

