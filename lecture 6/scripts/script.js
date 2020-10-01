const server = "http://api.tvmaze.com/search/shows/?q=";
const container = document.querySelector("#content-container");
const form = document.querySelector("#search");
const input = form.contentName;

form.addEventListener("submit", e => findContent(e, server, container));
