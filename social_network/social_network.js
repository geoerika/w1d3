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



console.log(followFollowers(data));