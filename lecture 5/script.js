const IMAGE_API_URL = "https://picsum.photos/200/300";
const imageElement = document.getElementById("image");

function myFetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(options.method || "GET", url);
    xhr.send([options.body]);

    xhr.onload = () => {
      if (xhr.status != 200) {
        reject();
      } else {
        xhr.blob = function () {
          return new Promise((resolve, reject) => {
            let blob = new Blob([xhr.response], { type: "image/jpg" });
            resolve(blob);
          });
        };

        resolve(xhr);
      }
    };

    xhr.onerror = () => {
      reject();
    };
  });
}

myFetch(IMAGE_API_URL)
  .then((response) => response.blob())
  .then((blob) => {
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      insertImage(reader.result);
    };
  })
  .catch(() => console.log("An error has occured. Try to resend the request"));

function insertImage(src) {
  imageElement.src = src;
}
