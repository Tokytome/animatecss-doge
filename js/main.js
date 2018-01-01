'use strict';

var color = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
var text = document.querySelector('.text');

function colorGenerator(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  console.log(color[num]);
  return color[num];
};

var textColor = colorGenerator(0, color.length);
text.style.color = textColor;
