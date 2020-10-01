import { findContent } from './handlers.js'

export const server = 'http://api.tvmaze.com/search/shows/?q='
export const container = document.querySelector('#content-container')
export const form = document.querySelector('#search')
export const input = form.contentName

form.addEventListener('submit', e => findContent(e, server, container))
