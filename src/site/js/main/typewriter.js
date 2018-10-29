var i = 0;
// var txt = ':КРАПКА';
var txt = 'Проникливий дизайн...';
var speed = 100;


function typeWriter() {

  if (i < txt.length) {
    $('#gaslo').append(txt.charAt(i)) ;
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();