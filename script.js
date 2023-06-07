const btnSubscribe = document.querySelector(".subscribe")
const btnEmail = document.querySelector("input")
const btnDismiss = document.querySelector(".dismiss")
const email = document.querySelector("span")
const errorParagraph = document.querySelector(".error")
const container = document.querySelector(".container")
const popUp = document.querySelector(".pop-up")

let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}")

let emailTest = "michu.ferench@mail.com"

console.log(regex.test(emailTest))

const checkEmail = () => {
	if (regex.test(btnEmail.value)) {
		container.classList.add("hidden")
		popUp.classList.remove("hidden")
	} else {
		errorParagraph.textContent = "Valid email required"
		btnEmail.classList.add("error-input")
		btnEmail.classList.add("red")
	}
}
const dismissMessage = () => {
	container.classList.remove("hidden")
	popUp.classList.add("hidden")
	errorParagraph.textContent = ""
	btnEmail.classList.remove("error-input")
	btnEmail.classList.remove("red")
	btnEmail.value = " "
}

btnSubscribe.addEventListener("click", checkEmail)
btnDismiss.addEventListener("click", dismissMessage)
