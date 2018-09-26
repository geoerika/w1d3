function uniqueLetters(string) {
  var letterList = [];
  for (var i = 0; i < string.length; i++) {
    var exists = false;
    for (var j = 0; j < letterList.length; j++ ) {
      if (string[i] === letterList[j]) {
        exists = true;
      }
    }
    if (string[i] !== ' ' && !exists) {
        letterList.push(string[i]);
    }
  }
  return letterList;
}

function letterCount(listUniqueLetters, string) {
  var lettersPos = [];
  for (var i = 0; i < listUniqueLetters.length; i++) {
    var listPos = [];
    for (var j = 0; j < string.length; j++) {
      if (listUniqueLetters[i] === string[j]) {
          listPos.push(j);
      }
    }
    lettersPos.push(listPos);
  }
  return lettersPos;
}

function zip(keys, values) {
  var output = {};
  for(var i = 0; i < keys.length; i++) {
    output[keys[i]] = values [i];
  }
  return output;
}

function countLetters(string) {
  var listUniqueLetters = uniqueLetters(string);
  var positionLettersList = letterCount(listUniqueLetters, string);
  var stringObj = zip (listUniqueLetters, positionLettersList);
  return stringObj;
}

console.log(countLetters(' lighthouse in the house'));

