function gameObject() {
  return {
    home: {
      //don't use assignment
      //not a must you use the name const
      teamName: "Brooklyn Nets",
      colors: ["black", "white"], //ordered collection of values, list like structure seperated by a comma
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Black", "White"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
console.log(gameObject());

const mostPointsScored = [][(gameObject.home, gameObject.away)].forEach(
  (player) => {
    players.playerName.forEach((playerName) =>
      mostPointsScored.push(player.points)
    );
  }
);

function homeTeamName() {
  let object = gameObject(); // saving the result of the gameObject function into a variable
  return object["home"]["teamName"];
}
console.log(homeTeamName());

function homeTeamName2() {
  //let object = gameObject();
  return gameObject()["home"]["teamName"]; //one-liner-> accessing the properties of the object directly off the function call
}
console.log(homeTeamName2());

/* function numPointsScored(){
const nameOfPlayer = gameObject();
return nameOfPlayer["home" || "away" ]["players"][nameOfPlayer][points]
}
console.log(nameOfPlayer(Ben Gordon)) */

function numPointsScored(nameOfPlayer) {
  let gamePlayedAt = gameObject();
  if (gamePlayedAt.home.players[nameOfPlayer]) {
    return gamePlayedAt.home.players[nameOfPlayer].points;
  } else if (gamePlayedAt.away.players[nameOfPlayer]) {
    return gamePlayedAt.away.players[nameOfPlayer].points;
  } else {
    return `This is not a player name`;
  }
}
console.log(numPointsScored("Brendan Haywood"));

function shoeSize(nameOfPlayer) {
  let gameShoes = gameObject();
  if (gameShoes.home.players[nameOfPlayer]) {
    return gameShoes.home.players[nameOfPlayer].shoe;
  } else if (gameShoes.away.players[nameOfPlayer]) {
    return gameShoes.away.players[nameOfPlayer].shoe;
  } else {
    return `Incorrect player`;
  }
}
console.log(shoeSize("Brendan Haywood"));

/* let oo = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar); */

let oo = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
  let value = oo[key];
  console.log("key:", key, "value:", value);
}

let cat = { grey: 12, white: 20, green: 35, black: 2 }; //this is an object
for (let color in cat) {
  //new variable
  let numberOfCats = cat[color]; //new variable
  // console.log(color)
  //console.log("color:", color, "value:",numberOfCats)
  console.log(color, numberOfCats);
}

function numOfPointsScored(playerName) {
  for (const teamBoth in Object.values(gameObject)) {
    if (teamBoth.players[playerName]) {
      return teamBoth.players[playerName].points;
    }
  }
}
console.log(numOfPointsScored("Brendan Haywood"));

let ducks = { grey: 12, white: 20, green: 35, black: 2 }; //this is an object
console.log("   Object.keys(ducks) =>", Object.keys(ducks));
console.log(" Object.values(ducks) =>", Object.values(ducks));
console.log("Object.entries(ducks) =>", Object.entries(ducks));

debugger;
function teamColors(teamName) {
  let leTeams = gameObject();
  return leTeams.home.teamName === teamName
    ? leTeams.home.colors
    : leTeams.away.teamName === teamName
    ? leTeams.away.colors
    : `No data for team: ${teamName}`;
}
console.log(teamColors("Brooklyn Nets"));

function teamNames() {
  let teams = gameObject();
  let teamArray = [];
  for (let key in teams) {
    teamArray.push(teams[key].teamName);
  }
  return teamArray;
}
console.log(teamNames());

function teamNames() {
  let teams = gameObject(); // Call the function to get the object
  return Object.values(teams).map((team) => team.teamName); // Extract team names
}
console.log(teamNames());

function playerNumbers(nameOfPlayer) {
  let gameNumbers = gameObject();
  if (gameNumbers.home.players[nameOfPlayer]) {
    return gameNumbers.home.players[nameOfPlayer].number;
  } else if (gameNumbers.away.players[nameOfPlayer]) {
    return gameNumbers.away.players[nameOfPlayer].number;
  } else {
    return `Incorrect player name`;
  }
}
console.log(playerNumbers("Jeff Adrien"));

function playerStats(nameOfPlayer) {
  let teamsStats = gameObject();
  for (let key in teamsStats) {
    let players = teamsStats[key].players;
    if (players[nameOfPlayer]) {
      return players[nameOfPlayer];
    }
  }
  return `No data found for player: ${nameOfPlayer}`;
}
console.log(playerStats("Ben Gordon"));

function bigShoeRebounds() {
  let teams = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = "";
  for (let key in teams) {
    let players = teams[key].players;
    for (let player in players) {
      if (players[player].shoe > largestShoeSize) {
        largestShoeSize = players[player].shoe;
        playerWithLargestShoe = player;
      }
    }
  }
  return { player: playerWithLargestShoe, shoeSize: largestShoeSize };
}
console.log(bigShoeRebounds());

const bothGames = [][(gameObject.home, gameObject.away)].forEach((teamName) => {
  bothGames.push(teamName);
});
console.log(bothGames);
