!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(){let e=document.createElement("div");i.appendChild(e),e.innerHTML="Ooops... Something went wrong...<br>Try to reenter the name",e.classList.add("error")}function a(){const e=fetch(o+s.value.trim());for(;i.firstChild;)i.removeChild(i.firstChild);e.then(e=>e.ok?e.json():Promise.reject()).then(e=>{if(console.log(e),e.length)for(let t=0;t<e.length;t++){const r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");let s=document.createElement("ul");i.appendChild(r),r.appendChild(a),r.appendChild(o),r.classList.add("item"),a.classList.add("img"),o.classList.add("info"),o.appendChild(s);for(let r in e[t].show){var n=document.createElement("li");switch(r){case"image":e[t].show[r]?a.style.background=`url(${e[t].show[r].medium})`:a.classList.add("no-picture");break;case"name":e[t].show[r]&&(s.appendChild(n),n.innerHTML="<span>Name:</span> "+e[t].show[r]);break;case"genres":e[t].show[r]&&(s.appendChild(n),n.innerHTML="<span>Genres:</span> "+e[t].show[r].join(", "));break;case"language":e[t].show[r]&&(s.appendChild(n),n.innerHTML="<span>Language:</span> "+e[t].show[r]);break;case"premiered":e[t].show[r]&&(s.appendChild(n),n.innerHTML="<span>Premiered:</span> "+e[t].show[r]);break;case"rating":e[t].show[r]&&e[t].show[r].average&&(s.appendChild(n),n.innerHTML="<span>Rate:</span> "+e[t].show[r].average);break;case"status":e[t].show[r]&&(s.appendChild(n),n.innerHTML="<span>Status:</span> "+e[t].show[r]);break;case"url":if(e[t].show[r]){const a=document.createElement("a");a.setAttribute("href",e[t].show[r]),a.setAttribute("target","blank"),a.innerText="Read more",n.appendChild(a),s.appendChild(n)}}}}else r()}).catch(r)}t.r(n),t.d(n,"server",(function(){return o})),t.d(n,"container",(function(){return i})),t.d(n,"input",(function(){return s}));const o="http://api.tvmaze.com/search/shows/?q=",i=document.querySelector("#content-container"),s=document.querySelector("#content-name");let d;document.querySelector("#search-btn").addEventListener("click",a),s.addEventListener("focus",()=>d=!0),s.addEventListener("blur",()=>d=!1),document.addEventListener("keydown",e=>{d&&"Enter"==e.key&&a()})}]);