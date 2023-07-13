const Sim = require('pokemon-showdown');
stream = new Sim.BattleStream();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`\n\n\n ----------------------------------------- NEW RUN OF WHOLE SCRIPT --------------`)
const getTeamFromStream = (output) => {
    let firstBar = output.indexOf('|')
    let secondBar = output.indexOf('|', firstBar + 1)
    let team = output.slice(secondBar+1)
    team = JSON.parse(team)

    output.includes('p1') ? p1Team = team : p2Team = team
    // console.log(team.side.pokemon)
    team.side.pokemon.forEach(mon => console.log(convertToPokePaste(mon)))
}

const convertToPokePaste = (monOutput) => {
  const {details, item, baseAbility, teraType, stats, moves, condition} = monOutput
  const pokePaste = `${details} @ ${item}\nAbility: ${baseAbility}\nTera Type: ${teraType}\nStats: HP ${condition} | Atk ${stats.atk} | Def ${stats.def} | Spa ${stats.spa} | Spd ${stats.spd} | Spe ${stats.spe}\n - ${moves[0]}\n - ${moves[1]}\n - ${moves[2]}\n - ${moves[3]}`
  return pokePaste
}

let gameStarted = false;
let p1Team = {};
let p2Team = {};


// game phases:
// 1. Start of game
//   - both teams are logged
//   - game is then started
// 2 Turn


function startCLI() {
  rl.on('line', (input) => {
    console.log('this was input', input)
    stream.write(input);
  });
}


startCLI();

(async () => {

  console.log("async is running")
  while (!gameStarted) {
    for await (const output of stream) {
      console.log("in non game started thign")
      //game start
        //log teams on game start, then dont log teams until requested
    
        if (!gameStarted) {
          if (output.includes('sideupdate')) getTeamFromStream(output)
        }
    
        if (output.includes('|start')) {
          gameStarted = true
        }
    }
  }

  // while (gameStarted) {
    console.log("game has started")
    for await (const output of stream) {
      console.log("in for await")
      //game start
        //log teams on game start, then dont log teams until requested
      console.log(output)
    }
  // }

  //every move after
    // if (gameStarted) {
      
    //   console.log('\n\n---------------------------- NEW OUTPUT')
    //   if (!output.includes('sideupdate')) {
    //     console.log(output);
    //   }
    // }
    // }
    // console.log('\n\nYOOOOOOOOOOOOOOOOO')
  })();

stream.write(`>start {"formatid":"gen9RandomBattle"}`);
stream.write(`>player p1 {"name":"Alice"}`);
stream.write(`>player p2 {"name":"Bob"}`);
stream.write('>p1 switch 2')
stream.write('>p2 switch 3')

// function startCLI() {
//   rl.on('line', (input) => {
//     stream.write(input);
//   });
// }


// startCLI()
// stream.write(`message gameStart`)
// // stream.write(`>p1 switch 2`);
// stream.write(`>p2 switch 3`);
// stream.write(`>player p1 {"name":"Bob"}`);
// stream.write(`>player p1 {"name":"Bob"}`);
// console.log('\n\nYOOOOOOOOOOOOOOOOO')
// console.log(stream.p1)