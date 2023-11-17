// DOM elements
const textAreaElement = document.getElementById('text-area')
const themeControllerElement = document.getElementById('theme-controller')
const copyBtnElement = document.getElementById('copy')

// Variables
const savedText = localStorage.getItem('text') || ''
const theme = localStorage.getItem('theme') || 'dark'

// Event listener
document.addEventListener('DOMContentLoaded', () => {
	textAreaInit()
	themeInit()
})

textAreaElement.addEventListener('input', () => {
	localStorage.setItem('text', textAreaElement.value)
})

themeControllerElement.addEventListener('change', () => {
	if (themeControllerElement.checked) {
		localStorage.setItem('theme', 'light')
		document.documentElement.setAttribute('data-theme', 'light')
	} else {
		localStorage.setItem('theme', 'dark')
		document.documentElement.setAttribute('data-theme', 'dark')
	}
})

copyBtnElement.addEventListener('click', () => {
	navigator.clipboard.writeText(textAreaElement.value)
})

// Functions
const textAreaInit = () => {
	textAreaElement.value = savedText
}

const themeInit = () => {
	if (theme === 'light') {
		themeControllerElement.checked = true
	} else {
		themeControllerElement.checked = false
	}
}
