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
      colors: ["Turquoise, Purple"],
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

debugger;
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

function teamColors(teamName) {
  let leTeams = gameObject();
  if (leTeams.home[colors] && leTeams.home[teamName]) {
    return leTeams.home[colors];
  } else if (leTeams.away[colors] && leTeams.away[teamName]) {
    return leTeams.away[colors];
  } else {
    return `No data for team: ${teamName}`;
  }
}
console.log(teamColors("Charlotte Hornetss"));

/* function teamColors(teamName) {
  let leTeams = gameObject();
  if (leTeams.home.teamName === teamName) {
    return leTeams.home.colors;
  } else if (leTeams.away.teamName === teamName) {
    return leTeams.away.colors;
  } else return `No data for team: ${teamName}`;
}
console.log(teamColors("Charlotte Hornets")); */

function teamColors(teamName) {
  let leTeams = gameObject();
  return leTeams.home.teamName === teamName
    ? leTeams.home.colors
    : leTeams.away.teamName === teamName
    ? leTeams.away.colors
    : `Your ${teamName} is noy yet logged`;
}
console.log(teamColors("Brooklyn Nets"));

//using .push plus for..in
function teamNames() {
  let teams = gameObject();
  let teamArray = [];
  for (let key in teams) {
    teamArray.push(teams[key].teamName);
  }
  return teamArray;
}
console.log(teamNames());
//using.map
/* function teamNames() {
  let teams = gameObject(); // Call the function to get the object
  return Object.values(teams).map((team) => team.teamName); // Extract team names
}
console.log(teamNames()); */

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

function mostPointsScored() {
  const game = gameObject();
  let topPlayer = "";
  let maxPoints = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      let playerPoints = game[team].players[player].points;

      if (playerPoints > maxPoints) {
        maxPoints = playerPoints;
        topPlayer = player;
      }
    }
  }

  return `${topPlayer} scored the most points with ${maxPoints} points.`;
}
console.log(mostPointsScored());

/* function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let maxPlayer = '';

  const teams = [game.home, game.away];
  teams.forEach(team => {
    const players = team.players;
    for (const playerName in players) {
      const points = players[playerName].points;
      if (points > maxPoints) {
        maxPoints = points;
        maxPlayer = playerName;
      }
    }
  });

  return maxPlayer;
}

console.log(mostPointsScored()); */

function winningTeam() {
  const game = gameObject();
  const homeTotal = Object.values(game.home.players).reduce(
    (total, player) => total + player.points,
    0
  );
  const awayTotal = Object.values(game.away.players).reduce(
    (total, player) => total + player.points,
    0
  );
  return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}
console.log(winningTeam());

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";
  const allPlayers = [
    ...Object.keys(game.home.players),
    ...Object.keys(game.away.players),
  ];
  allPlayers.forEach((name) => {
    if (name.length > longestName.length) {
      longestName = name;
    }
  });

  return longestName;
}
console.log(playerWithLongestName());

function doesLongNameStealATon() {
  const game = gameObject();

  let maxNameLength = 0;
  for (const team of [game.home, game.away]) {
    for (const playerName of Object.keys(team.players)) {
      maxNameLength = Math.max(maxNameLength, playerName.length);
    }
  }

  const longestNamePlayers = [];
  for (const team of [game.home, game.away]) {
    for (const [playerName, stats] of Object.entries(team.players)) {
      if (playerName.length === maxNameLength) {
        longestNamePlayers.push(stats);
      }
    }
  }

  let maxSteals = 0;
  for (const team of [game.home, game.away]) {
    for (const player of Object.values(team.players)) {
      maxSteals = Math.max(maxSteals, player.steals);
    }
  }

  return longestNamePlayers.some((player) => player.steals === maxSteals);
}

console.log(doesLongNameStealATon());
