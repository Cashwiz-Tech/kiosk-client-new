import { useState } from "react"
import Payment from "components/buying/payment"
import PhoneRecording from "components/buying/phone-recording"
import SuccessPhone from "components/buying/success-phone"
import ContactModal from "components/buying/contact-modal/contact-modal"
import OnBoarding from "components/buying/on-boarding/on-boarding"
import { phoneRegister } from "api/phone-register"

export default function Buying() {
	const [step, setStep] = useState(0)
	const [show, setShow] = useState(false)
	const [isShowOnBoarding, setIsShowOnBoarding] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState("")

	switch (step) {
		case 1:
			return (
				<PhoneRecording
					onNext={(phoneNumber: string) => {
						setStep(2)
						setPhoneNumber(phoneNumber)
						phoneRegister(phoneNumber)
					}}
					onBack={() => setStep(0)}
				/>
			)
		case 2:
			return (
				<SuccessPhone
					onBack={() => {
						setStep(0)
						setShow(true)
					}}
				/>
			)
		default:
			return (
				<>
					<Payment setStep={(step: number) => setStep(step)} setIsShowOnBoarding={setIsShowOnBoarding} />
					<ContactModal show={show} setShow={setShow} phoneNumber={phoneNumber} />
					<OnBoarding show={isShowOnBoarding} setShow={(v) => setIsShowOnBoarding(v)} />
				</>
			)
	}
}
