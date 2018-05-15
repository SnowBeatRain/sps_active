window.onresize = function () {
  calcRam();
};
function calcRam() {
  var html = document.querySelector('html');
  var w = document.documentElement.clientWidth;
  // 字体10px
  html.style.fontSize = w / 37.5 + 'px';
}
calcRam();