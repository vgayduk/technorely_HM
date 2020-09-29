import { findContent } from './handlers.js'

export const server = 'http://api.tvmaze.com/search/shows/?q='
export const container = document.querySelector('#content-container')
export const input = document.querySelector('#content-name')
const searchBtn = document.querySelector('#search-btn')
let isInputFocused

searchBtn.addEventListener('click', findContent)
input.addEventListener('focus', () => (isInputFocused = true))
input.addEventListener('blur', () => (isInputFocused = false))
document.addEventListener('keydown', e => {
  if (isInputFocused && e.key == 'Enter') findContent()
})
