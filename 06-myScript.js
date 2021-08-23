var imageArr = document.getElementsByClassName('image')

var uncompImageNum = 1;
var codeImageNum = 1;
var compImageNum = 1;

for (let i = 0; i < imageArr.length; i += 3) {
  imageArr[i].src = "06-images/uncomplete-" + uncompImageNum + ".png";
  imageArr[i].alt = "Screenshot of Uncompleted Challenge";
  uncompImageNum++;
}

for (let i = 1; i < imageArr.length; i += 3) {
  imageArr[i].src = "06-images/code-" + codeImageNum + ".png";
  imageArr[i].alt = "Screenshot of Code";
  codeImageNum++;
}

for (let i = 2; i < imageArr.length; i += 3) {
  imageArr[i].src = "06-images/complete-" + compImageNum + ".png";
  imageArr[i].alt = "Screenshot of Completed Challenge";
  compImageNum++;
}


for (let i = 0; i < imageArr.length; i++) {
  imageArr[i].style.width = "1000px";
  imageArr[i].style.height = "500px";
}