function getRandomInteger(lower, upper {
  //R = parseInt(rnd * (upper -(lower -1)) + lower
  var multiplier = upper - (lower -1);
  var rnd = parseInt(Math.random() * multiplier) + lower;

  return rnd;
}

function changeNumber() {
  rndNum = getRandomInteger(1, 10);
  display();
}

function display() {
  numberOutput.innerHTML = rndNum;
}