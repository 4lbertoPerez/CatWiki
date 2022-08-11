function getScreenSize() {
  var height = $(window).height();
  height = height / 2;
  $("#div1").height(height);
  $("#div2").height(height + 20);
  $("#div3").height(height * 2);
}

function getBreeds(name) {
  const url = `https://api.thecatapi.com/v1/images?/search?breed_id=${name}`;
  fetch(url);
  headers["x-api-key"] = "fd0dd5ce-a4a6-4fce-8682-81ae5799bea3"
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

window.addEventListener("load", () => {
  getScreenSize();
  raza = "beng";
  getBreeds(raza);
});
