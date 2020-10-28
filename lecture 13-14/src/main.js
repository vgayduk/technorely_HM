const container = document.querySelector('#wrapper')

fetch('http://localhost:3000/getImgPath')
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(res => {
        res.forEach(item => {
            container.innerHTML += `<img src="${item}">`
        })
    })