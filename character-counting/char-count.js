function createListLetters(string) {
  var string1 = string.split(' ').join("");
  var letterList = [];
  letterList.push(string1[0]);
  for (var i = 1; i < string1.length; i++) {
    var exists = false;
    for (var j = 0; j < letterList.length; j++ ) {
      if (string1[i] === letterList[j]) {
        exists = true;
      }
    }
    if (!exists) {
      letterList.push(string1[i]);
    }
  }
  return letterList;
}

function letterCount(listUniqueLetters, string) {
  var letterCount = [];
  for (var i = 0; i < listUniqueLetters.length; i++) {
    var count = 0;
    for (var j = 0; j < string.length; j++) {
      if (listUniqueLetters[i] === string[j]) {
        count += 1;
      }
    }
    letterCount.push(count);
  }
  return letterCount;
}

function zip(keys, values) {
  var output = {};
  for(var i = 0; i < keys.length; i++) {
    output[keys[i]] = values [i];
  }
  return output;
}

function countLetters(string) {
  var listUniqueLetters = createListLetters(string);
  var countLettersList = letterCount(listUniqueLetters, string);
  var stringObj = zip (listUniqueLetters, countLettersList);
  return stringObj;
}

console.log(countLetters('lighthouse in the house'));