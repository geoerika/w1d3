const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const followFollowers = (data) => {

  let everyone = {};
  for(key in data) {
    let person = data[key];
    everyone[person.name] = {};
    everyone[person.name].follows = [];
    everyone[person.name].followers = [];
    everyone[person.name].follows = follows(key, data);
    everyone[person.name].followers = followers(key, data);
  }

  return everyone;
}

const follows = (key, data) => {
  let followsArray = [];
  let followsKeyArray = data[key].follows;
  followsArray = followsKeyArray.map((key1) => {
    for(key2 in data) {
      if (key1 === key2) {
        return data[key2].name;
      }
    }
  })
  return followsArray;
}

const followers = (key, data) => {
  let followersArray = [];
  for(person in data) {
    if (data[person].follows.includes(key)) {
      followersArray.push(data[person].name);
    }
  }
  return followersArray;
}

const followsMost = (data) => {
  let followingArray = [];
  for(person in data) {
    followingArray.push(data[person].follows.length);
  };

  let maxFollowing = 0;
  maxFollowing = followingArray.reduce(function(a, b) {
    return Math.max(a, b);
  })

  for(person in data) {
    if (data[person].follows.length === maxFollowing) {
      return [data[person].name, maxFollowing];
    }
  };
}

const mostFollowers = (data) => {

  let followFollowersList = followFollowers(data);
  let mostFollowersNr = 0;
  let mostFollowersList = [];
  for (person in followFollowersList) {
    mostFollowersNr = mostFollowersNr < followFollowersList[person].followers.length ? followFollowersList[person].followers.length : mostFollowersNr;
  }
  for (person in followFollowersList) {
    if (followFollowersList[person].followers.length === mostFollowersNr) {
      mostFollowersList.push(person);
    }
  }
  return mostFollowersList;
}

const mostFollowerOver30 = (data) => {

  let followFollowersList = followFollowers(data);
  let followersOver30 = {};

  for (person1 in followFollowersList) {
    followersOver30[person1] = {};
    followersOver30[person1].nr = 0;
    for (person2 in data) {
      if (followFollowersList[person1].followers.includes(data[person2].name) && data[person2].age > 30) {
        followersOver30[person1].nr++;
      }
    }
  }

  console.log('Followers over 30: ', followersOver30);

  let maxFollOver30 = 0;
  for (person in followersOver30) {
    maxFollOver30 = maxFollOver30 < followersOver30[person].nr ? followersOver30[person].nr : maxFollOver30;
  }


  let maxFollOver30List = [];
  for (person in followersOver30) {
    if (followersOver30[person].nr === maxFollOver30 ) {
      maxFollOver30List.push(person);
    }
  }

  return maxFollOver30List;

  console.log('followersOver30: ', followersOver30);



}

console.log(followFollowers(data));
console.log('The person who follows the most: ', followsMost(data));
console.log('The person(s) with most followers is: ', mostFollowers(data));
console.log('The person with most followers over 30: ', mostFollowerOver30(data));