

function newColorScheme () {
  send("http://www.colr.org/json/schemes/random/5?scheme_size_limit=%3E5&callback=processColorData");

  document.getElementsByClassName('headerhexcode')[0].innerHTML = "<img src = 'ajax-loader.gif'>";
  document.getElementsByClassName('lefthexcode')[0].innerHTML = "<img src = 'ajax-loader.gif'>";
  document.getElementsByClassName('mainhexcode')[0].innerHTML = "<img src = 'ajax-loader.gif'>";
  document.getElementsByClassName('righthexcode')[0].innerHTML = "<img src = 'ajax-loader.gif'>";
  document.getElementsByClassName('bodyhexcode')[0].innerHTML = "<img src = 'ajax-loader.gif'>";
}


function send(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url );

  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}


function processColorData (data) {
  var values = data.schemes[0].colors;

  document.getElementsByClassName('headerhexcode')[0].innerHTML = "#" + values[0];
  document.getElementsByClassName('lefthexcode')[0].innerHTML = "#" + values[1];
  document.getElementsByClassName('mainhexcode')[0].innerHTML = "#" + values[2];
  document.getElementsByClassName('righthexcode')[0].innerHTML = "#" + values[3];
  document.getElementsByClassName('bodyhexcode')[0].innerHTML = "#" + values[4];

  document.getElementsByClassName('header')[0].style.backgroundColor = "#" + values[0];
  document.getElementsByClassName('left-sidebar')[0].style.backgroundColor = "#" + values[1];
  document.getElementsByClassName('main')[0].style.backgroundColor = "#" + values[2];
  document.getElementsByClassName('right-sidebar')[0].style.backgroundColor = "#" + values[3];
  document.getElementById('bodyBackground').style.backgroundColor = "#" + values[4];
}
