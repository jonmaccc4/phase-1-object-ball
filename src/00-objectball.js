function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}


function numPointsScored(playerName) {
    const gameData = gameObject();

   
    if (gameData.home.players[playerName]) {
        return gameData.home.players[playerName].points;
    }

    if (gameData.away.players[playerName]) {
        return gameData.away.players[playerName].points;
    }

    return "Player not found";
}

function shoeSize(playerName) {
    const gameData = gameObject();

    if (gameData.home.players[playerName]) {
        return gameData.home.players[playerName].shoe;
    }

    if (gameData.away.players[playerName]) { 
        return gameData.away.players[playerName].shoe;
    }
}

function teamColors(teamName) {
    const gameData = gameObject();

  
    if (gameData.home.teamName === teamName) {
        return gameData.home.colors;
    }

  
    if (gameData.away.teamName === teamName) {
        return gameData.away.colors;
    }

    return "Team not found";
}

function teamNames () { 
const    gameData = gameObject();

    return [gameData.home.teamName, gameData.away.teamName];

}


function playerNumbers(teamName) {
    const gameData = gameObject();
    
    
    if (gameData.home.teamName === teamName) {
        return Object.values(gameData.home.players).map(player => player.number);
    }

  
    if (gameData.away.teamName === teamName) {
        return Object.values(gameData.away.players).map(player => player.number);
    }

    return "Team not found";
}

function playerStats(playerName) {
    const gameData = gameObject();

    
    if (gameData.home.players[playerName]) {
        return gameData.home.players[playerName];
    }

   
    if (gameData.away.players[playerName]) {
        return gameData.away.players[playerName];
    }

    return "Player not found";
}

function bigShoeRebounds() {
    const gameData = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;

    
    const allPlayers = { ...gameData.home.players, ...gameData.away.players };

    
    for (const player in allPlayers) {
        if (allPlayers[player].shoe > largestShoeSize) {
            largestShoeSize = allPlayers[player].shoe;
            playerWithLargestShoe = player;
        }
    }

   
    return allPlayers[playerWithLargestShoe].rebounds;
}


function mostPointsScored() {
    const gameData = gameObject();
    let maxPoints = 0;
    let topScorer = "";

    const allPlayers = { ...gameData.home.players, ...gameData.away.players };

   
    for (const player in allPlayers) {
        if (allPlayers[player].points > maxPoints) {
            maxPoints = allPlayers[player].points;
            topScorer = player;
        }
    }

    return topScorer;
}

function winningTeam() {
    const gameData = gameObject();

    
    let homePoints = Object.values(gameData.home.players).reduce((total, player) => total + player.points, 0);

    
    let awayPoints = Object.values(gameData.away.players).reduce((total, player) => total + player.points, 0);

    
    if (homePoints > awayPoints) {
        return `${gameData.home.teamName} wins with ${homePoints} points!`;
    } else if (awayPoints > homePoints) {
        return `${gameData.away.teamName} wins with ${awayPoints} points!`;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    const gameData = gameObject();
    let longestName = "";

    
    const allPlayers = { ...gameData.home.players, ...gameData.away.players };

   
    for (const player in allPlayers) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}

function doesLongNameStealATon() {
    const gameData = gameObject();
    const longestName = playerWithLongestName();
    const allPlayers = { ...gameData.home.players, ...gameData.away.players };

    let maxSteals = 0;
    let longestNameSteals = allPlayers[longestName].steals;

    for (const player in allPlayers) {
        if (allPlayers[player].steals > maxSteals) {
            maxSteals = allPlayers[player].steals;
        }
    }

    
    return longestNameSteals === maxSteals;
}

console.log(gameObject());
console.log(numPointsScored("Ben Gordon")); 
console.log(numPointsScored("Alan Anderson")); 
console.log(numPointsScored("Unknown Player")); 
console.log(shoeSize("Mason Plumlee"));
console.log(shoeSize("Jeff Adrien"));
console.log(shoeSize("Unknown Player"));
console.log(teamColors("Brooklyn Nets")); 
console.log(teamColors("Charlotte Hornets")); 
console.log(teamColors("Los Angeles Lakers"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets")); 
console.log(playerNumbers("Charlotte Hornets")); 
console.log(playerNumbers("Los Angeles Lakers"));
console.log(playerStats("Mason Plumlee"));
console.log(playerStats("Ben Gordon"));
console.log(playerStats("LeBron James"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam()); 
console.log(playerWithLongestName()); 
console.log(doesLongNameStealATon());
