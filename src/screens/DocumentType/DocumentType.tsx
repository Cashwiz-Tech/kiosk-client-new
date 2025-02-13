

import { useEffect, useState } from "react"
import Input from "lib/input"
import Button from "lib/button"
import NumericKeypad from "../../components/buying/numeric-keypad/numeric-keypad"
import { ReactComponent as Arrow } from "assets/arrow.svg"
import styles from "./DocumentType.module.css"
import { setPhoneNum } from "store/navigationSlice"
import { useAppDispatch } from "store/store"
import LettersKeypad from "components/buying/letters-keypad/letters-keypad"
import { ReactComponent as SuccessSVG } from "assets/success.svg"
import { setDarkonNum, setDBirth, setdocumentType, setIDNum } from "store/registerSlice"
import Header from "layouts/header/Header"
import { isIdValid } from "utils/validateDocs"

type Props = {
  onNext: () => void
  onBack: () => void
}

export default function DocumentType({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();

  const [emailAddress, setemailAddress] = useState<string>("")

  const [userName, setuserName] = useState("")
  const [darkonNum, setdarkonNum] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [ErrorMessageDarkon, setErrorMessageDarkon] = useState("")

  const [errorMessageIdentity, seterrorMessageIdentity] = useState("")
  const [errorMessageBDay, seterrorMessageBDay] = useState("")
  const [isVisitedDate, setisVisitedDate] = useState(false)

  const [isVisitedID, setisVisitedID] = useState(false)
  const [isVisitedDarkon, setisVisitedDarkon] = useState(false)

  const [focusisVisitedID, setfocusisVisitedID] = useState(true)

  const [docType, setDocType] = useState('id')
  const [birthdate, setBirthdate] = useState('')
  const [isBirthdateValid, setIsBirthdateValid] = useState(false)

  const validateId = () => {

    if (userName.trim().length > 1) {
      setisVisitedID(true);

      if (isIdValid(userName)) {
        seterrorMessageIdentity("")
      } else {
        seterrorMessageIdentity("מספר הת.ז אינו תקין")
      }
    }
  }

  function validateDarkon() {

    if (darkonNum.length > 1) {
      setisVisitedDarkon(true);

      if (darkonNum.length === 9) {
        setErrorMessageDarkon("")
      } else {
        setErrorMessageDarkon('מספר דרכון לא תקין')
      }
    }
  }

  function cancel_caracter() {
    let str = userName.substring(0, userName.length - 1);
    setuserName(str)
  }

  function cancel_caracter_user() {
    let str = birthdate.substring(0, birthdate.length - 1);
    setBirthdate(str)
  }

  function cancel_caracter_darkon() {
    let str = darkonNum.substring(0, darkonNum.length - 1);
    setdarkonNum(str)
  }

  useEffect(() => {
    validateDate();
  }, [birthdate]);


  function validateDate() {
    if (birthdate.length > 1) {
      setisVisitedDate(true);
      if (birthdate.length === 8) {
        seterrorMessageBDay('');
        setIsBirthdateValid(true);
      } else {
        seterrorMessageBDay('תאריך לידה לא תקין');
        setIsBirthdateValid(false);
      }
    }

  }

  function go_to_next_page() {

    let birth_format = birthdate.substring(4, 8) + '-' + birthdate.substring(2, 4) + '-' + birthdate.substring(0, 2);

    dispatch(setIDNum(userName));
    dispatch(setDarkonNum(darkonNum));
    dispatch(setDBirth(birth_format));
    dispatch(setdocumentType(docType));
    onNext()

  }

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}> הרשמה לשירות </h3>
          <p className={styles.subtitle}> סוג אמצעי הזיהוי שלך </p>

          <div className={styles.doc_type_btn_cont}>
            <div className={styles.doc_type_btn + (docType === 'id' ? ' ' + styles.selected_type : '')} onClick={() => setDocType('id')}> תעודת זהות </div>
            <div className={styles.doc_type_btn + (docType === 'darkon' ? ' ' + styles.selected_type : '')} onClick={() => setDocType('darkon')}> דרכון </div>
            <div className={styles.doc_type_btn + (docType === 'driver' ? ' ' + styles.selected_type : '')} onClick={() => setDocType('driver')}> רשיון נהיגה </div>
          </div>

          <div className={styles.phoneInput}>

            {docType === "id" || docType === "driver" ?
              <Input
                type="identityNumber"
                value={userName}
                setValue={(v) => setuserName(v)}
                label="מספר זהות"
                errorMessage={errorMessageIdentity}
                isVisited={isVisitedID}
                validate={validateId}
                focus_func={() => { setfocusisVisitedID(true) }}
              /> :
              <Input
                type="darkon"
                value={darkonNum}
                setValue={(v) => setdarkonNum(v)}
                label="מספר דרכון"
                errorMessage={ErrorMessageDarkon}
                isVisited={isVisitedDarkon}
                validate={validateDarkon}
                focus_func={() => { setfocusisVisitedID(true) }}
              />
            }



            <p className={styles.birth_date_title}> תאריך לידה </p>
            <div className={styles.date_birth + (isBirthdateValid && isVisitedDate ? ' ' + styles.date_valid : (isVisitedDate ? ' ' + styles.date_notvalid : ''))}>
              <div className={styles.date_birth_img}> </div>

              <div className={styles.date_birth_input_year}>
                <input type="text" className={styles.date_birth_input} value={birthdate[7] ? birthdate[6] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <input type="text" className={styles.date_birth_input} value={birthdate[6] ? birthdate[6] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <input type="text" className={styles.date_birth_input} value={birthdate[5] ? birthdate[5] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <input type="text" className={styles.date_birth_input} value={birthdate[4] ? birthdate[4] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <span className={styles.year_text}>שנה </span>
              </div>

              <div className={styles.date_birth_input_month}>
                <input type="text" className={styles.date_birth_input} value={birthdate[3] ? birthdate[3] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <input type="text" className={styles.date_birth_input} value={birthdate[2] ? birthdate[2] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <span className={styles.month_text}>חודש </span>
              </div>

              <div className={styles.date_birth_input_day}>
                <input type="text" className={styles.date_birth_input} value={birthdate[1] ? birthdate[1] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <input type="text" className={styles.date_birth_input} value={birthdate[0] ? birthdate[0] : ''} onFocus={() => { setfocusisVisitedID(false) }} />
                <span className={styles.day_text}>יום </span>
              </div>

              {errorMessageBDay === '' && isVisitedDate ? <div className={styles.successIcon}>
                <SuccessSVG />
              </div> : ''}
            </div>



            {errorMessageBDay ? <p className={styles.errorMessage}>{errorMessageBDay}</p> : ''}

            {focusisVisitedID && docType === 'id' ? <NumericKeypad setValue={(v: any) => setuserName((prev) => prev + v)} cancel_caracter={cancel_caracter} /> :
              focusisVisitedID && docType === 'darkon' ?
                <NumericKeypad setValue={(v: any) => setdarkonNum((prev) => prev + v)} cancel_caracter={cancel_caracter_user} /> : <NumericKeypad setValue={(v: any) => setBirthdate((prev) => prev + v)} cancel_caracter={cancel_caracter_user} />}

          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={onBack} type="outline">
            <div className={styles.arrowRight}>
              <Arrow />
            </div>
            חזרה
          </Button>
          <Button onClick={() => { go_to_next_page(); }} disabled={(!!errorMessageIdentity || (!isVisitedID && !isVisitedDarkon)) || (!!errorMessageBDay || !isVisitedDate)}>
            המשך
            <Arrow />
          </Button>
        </div>
      </div>
    </>
  )
}
