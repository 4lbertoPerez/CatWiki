function getScreenSize() {
  var height = $(window).height();
  height = height / 2;
  $("#div1").height(height);
  $("#div2").height(height + 20);
  $("#div3").height(height * 2);
}

window.addEventListener("load", () => {
  getScreenSize();
});
