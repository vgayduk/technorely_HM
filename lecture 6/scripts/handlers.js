function findContent(e, server, container) {
  e.preventDefault();
  const request = fetch(server + input.value.trim());

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  request
    .then((response) => (response.ok ? response.json() : Promise.reject()))
    .then((response) => {
      if (!response.length) {
        createErrorMessage(container);
        return;
      }
      for (let i = 0; i < response.length; i++) {
        const item = document.createElement("div");
        const img = document.createElement("div");
        const info = document.createElement("div");
        let ul = document.createElement("ul");

        container.appendChild(item);
        item.appendChild(img);
        item.appendChild(info);

        item.classList.add("item");
        img.classList.add("img");
        info.classList.add("info");

        info.appendChild(ul);

        for (let key in response[i].show) {
          switch (key) {
            case "image":
              if (response[i].show[key]) {
                img.style.background = `url(${response[i].show[key].medium})`;
              } else {
                img.classList.add("no-picture");
              }
              break;

            case "name":
              if (response[i].show[key]) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `<span>Name:</span> ${response[i].show[key]}`;
              }
              break;

            case "genres":
              if (response[i].show[key]) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `<span>Genres:</span> ${response[i].show[
                  key
                ].join(", ")}`;
              }
              break;

            case "language":
              if (response[i].show[key]) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `<span>Language:</span> ${response[i].show[key]}`;
              }
              break;

            case "premiered":
              if (response[i].show[key]) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `<span>Premiered:</span> ${response[i].show[key]}`;
              }
              break;

            case "rating":
              if (response[i].show[key] && response[i].show[key].average) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `<span>Rate:</span> ${response[i].show[key].average}`;
              }
              break;

            case "status":
              if (response[i].show[key]) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = `<span>Status:</span> ${response[i].show[key]}`;
              }
              break;

            case "url":
              if (response[i].show[key]) {
                var li = document.createElement("li");
                const link = document.createElement("a");
                link.setAttribute("href", response[i].show[key]);
                link.setAttribute("target", "blank");
                link.innerText = "Read more";
                li.appendChild(link);
                ul.appendChild(li);
              }
              break;
          }
        }
      }
    })
    .catch(() => createErrorMessage(container));
}
