export const phoneRegister = async (phoneNumber: string) => {
	try {
		const data = await fetch("http://ec2-3-76-159-5.eu-central-1.compute.amazonaws.com:8080/api/register", {
			method: "POST",
			body: JSON.stringify({ phoneNumber }),
		}).then((res) => res.json())

		return data
	} catch (e) {
		console.log(e)
		return { success: false, message: "Can't registry your phone number!" }
	}
}
