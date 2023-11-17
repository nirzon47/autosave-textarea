// DOM elements
const textAreaElement = document.getElementById('text-area')
const themeControllerElement = document.getElementById('theme-controller')

// Variables
const savedText = localStorage.getItem('text') || ''
const theme = localStorage.getItem('theme') || 'dark'

// Event listener
document.addEventListener('DOMContentLoaded', () => {
	textAreaInit()
})

textAreaElement.addEventListener('input', () => {
	localStorage.setItem('text', textAreaElement.value)
})

// Functions
const textAreaInit = () => {
	textAreaElement.value = savedText
}
