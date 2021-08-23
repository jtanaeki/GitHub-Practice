var id1 = document.getElementById('1');
var id2 = document.getElementById('2');
var id3 = document.getElementById('3');
var id4 = document.getElementById('4');
var id5 = document.getElementById('5');
var id6 = document.getElementById('6');
var id7 = document.getElementById('7');
var id8 = document.getElementById('8');
var id9 = document.getElementById('9');

function setPicture(id, src, alt) {
  id.src = src;
  id.alt = alt;
  id.style.width = "1000px";
  id.style.height = "500px";
}

setPicture(id1, "uncomplete-1.png", "Screenshot of Uncompleted Challenge");
setPicture(id2, "code-1.png", "Screenshot of Code");
setPicture(id3, "complete-1.png", "Screenshot of Completed Challenge");

setPicture(id4, "uncomplete-2.png", "Screenshot of Uncompleted Challenge");
setPicture(id5, "code-2.png", "Screenshot of Code");
setPicture(id6, "complete-2.png", "Screenshot of Completed Challenge");

setPicture(id7, "uncomplete-3.png", "Screenshot of Uncompleted Challenge");
setPicture(id8, "code-3.png", "Screenshot of Code");
setPicture(id9, "complete-3.png", "Screenshot of Completed Challenge");