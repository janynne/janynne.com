function repeat() {
  eat();
  sleep();
  code();
  repeat();
}

var code = document.querySelector('.code');
code.innerHTML = repeat.toString().split(/\n/).map(function (line) {
  return '<p>' + line + '</p>';
}).join('');