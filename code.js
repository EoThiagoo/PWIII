window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

var btn = document.querySelector(".button");

btn.onmousemove = function(e){
  var x = e.pageX - btn.offsetLeft;
  var y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--eixoX', x + 'px')
  btn.style.setProperty('--eixoY', y + 'px')
}