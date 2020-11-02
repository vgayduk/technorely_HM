const container = document.querySelector('#wrapper')
const downloadSelectedBtn = document.querySelector('#download-selected')
const downloadAllBtn = document.querySelector('#download-all')
const popup = document.querySelector('.popup')

document.body.addEventListener('click', e => {
    if (e.target === popup || e.target === document.querySelector('.close')) {
        popup.style.zIndex = '-10';
	    popup.style.opacity = '0';
    }
})

downloadSelectedBtn.addEventListener('click', () => {
    const names = [];
    for (let i = 0; i < container.children.length; i++) {
        if (container.children[i].classList.contains('selected')) {
            names.push(container.children[i].getAttribute('data-name'))
        }
    }
    if (!names.length) {
        popup.style.zIndex = '10';
        popup.style.opacity = '1';
        return
    }
    window.location.href = `/download?q=${JSON.stringify(names)}`;
})

downloadAllBtn.addEventListener('click', () => {
    window.location.href = '/download'
})

container.addEventListener('click', e => {
    e.target.classList.toggle('selected')
})

fetch('http://localhost:3000/getImgPath')
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(res => {
        res.forEach(item => {
            container.innerHTML += `<div class="img-preview" data-name="${item.name}" style="background: url('${item.path}')"></div>`
        })
    })