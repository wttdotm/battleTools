const {Dex} = require('pokemon-showdown');
const weaknessChart = require('./weaknessChart')
// console.log(weaknessChart)
// const tackle = Dex.moves.get('Tackle');

const kirkTeam = ['Gholdengo', 'Ting-Lu', 'Cinderace', 'Dondozo', 'Moltres-Galar', 'Basculegion-F', 'Iron Hands', 'Rillaboom', 'Hawlucha'];

const morryTeam = ['Dragapult', 'Corviknight', 'Garganacl', 'Breloom', 'Volcanion', 'Sandy Shocks', 'Hoopa', 'Electrode-Hisui', 'Tinkaton'];

const seanTeam = ['Dragonite', 'Landorus-Therian', 'Slowking-Galar', 'Tauros-Paldea-Aqua', 'Scream Tail', 'Forretress', 'Iron Jugulis', 'Eiscue', 'Rotom-Heat'];

const masonTeam = ['Great Tusk', 'Zapdos', 'Walking Wake', 'Hatterene', 'Ceruledge', 'Zarude', 'Torkoal', 'Lycanroc-Dusk', 'Slither Wing'];

const mattTeam = ['Hoopa-unbound', 'Toxapex', 'Basculegion-M', 'Thundurus-Incarnate', 'Pelipper', 'Overqwil', 'Orthworm', 'Donphan', 'Braviary-Hisui'];

const kevinTeam = ['Zamazenta', 'Enamorous', 'Roaring Moon', 'Ursaluna', 'Mew', 'Talonflame', 'Alolan-Muk', 'Goodra-Hisui', 'Cloyster'];

const zackTeam = ['Iron Moth', 'Meowscarada', 'Garchomp', 'Rotom-W', 'Clodsire', 'Scizor', 'Diancie', 'Blissey', 'Pawmot'];

const andrewTeam = ['Kingambit', 'Baxcalibur', 'Glimmora', 'Azumarill', 'Zoroark-Hisuiisui', 'Moltres', 'Azelf', 'Thundurus-Therianherian', 'Grimmsnarl'];

const alexTeam = ['Iron Valiant', 'Iron Treads', 'Hydreigon', 'Greninja', 'Skeledirge', 'Slowking', 'Gengar', 'Salamence', 'Rotom-Mow'];

const georgeTeam = ['Sneasler', 'Hisuian Samurott', 'Tornadus-Therian', 'Heatran', 'Enamorus-Therian', 'Amoongus', 'Indeedee-F', 'Cresselia', 'Polteageist'];


const createTeamObjArr = (team) => {
    const monObjs = []
    
    team.forEach(mon => {
        let pokemon = Dex.species.get(mon)
        monObjs.push(pokemon)
    })

    return monObjs
}

// const myTeamObjArr = createTeamObjArr(myTeam)

const printStats = (team, whoseTeam = 'mine', chosenStat = 'hp') => {

    const monObjs = []
    
    team.forEach(mon => {
        let pokemon = Dex.species.get(mon)
        monObjs.push(pokemon)
    })
    
    monObjs.sort((a, b) => {
        return b.baseStats[chosenStat] - a.baseStats[chosenStat]
    })
    
    console.log(whoseTeam)
    monObjs.forEach(mon => console.log(mon.baseStats, mon.name))
    // monObjs.forEach(mon => console.table(mon.baseStats))
    // console.table(mon.baseStats)
}


const monAdvantage = (theirTeam) => {

}

const weaknessAndStabs = mon => {
    //make weak array, a strong array, and an immunities array
    const weaknesses = []
    const resists = []
    const immunities = []
    const supereffective = []

    //look at mon's typing 
    //for each type
        //spread immunities to the immunities array
        //spread strengths to strengths 
        //
        //if monotype, just retu
    //for each type
        //go through weakness and add it to an array
}


// function weaknessAndStrengths(types) {

//     let tempWeaknesses = {};
//     let tempDoubleWeaknesses = {};
//     let tempResistances = {};
//     let tempDoubleResistances = {};
  
//     const result = {
//       weaknesses: {},
//       doubleWeaknesses: {},
//       resistances: {},
//       doubleResistances: {},
//       immunities: {},
//       superEffectiveSTAB: {},
//     };
  
//     types.forEach((type) => {
//       const typeChart = weaknessChart[type];
  
//       Object.entries(typeChart).forEach(([key, value]) => {
  
//         if (value === 0) {
//           result.immunities[key] = true;
//           delete tempWeaknesses[key];
//           delete tempDoubleWeaknesses[key];
//           return;
//         }
  
//         if (value === 2) {
//           if (tempWeaknesses[key]) {
//             tempDoubleWeaknesses[key] = true;
//             delete tempWeaknesses[key];
//           } else if (!tempDoubleWeaknesses[key]) {
//             tempWeaknesses[key] = true;
//           }
//         } else if (value === 0.5) {
//           if (tempResistances[key]) {
//             tempDoubleResistances[key] = true;
//             delete tempResistances[key];
//           } else if (!tempDoubleResistances[key]) {
//             tempResistances[key] = true;
//           }
//         }
  
//       });
//     });
  
//     Object.keys(tempWeaknesses).forEach((type) => {
//       if (!result.immunities[type] && !tempResistances[type]) {
//         result.weaknesses[type] = true;
//       }
//     });
  
//     Object.keys(tempDoubleWeaknesses).forEach((type) => {
//       if (!result.immunities[type] && !tempDoubleResistances[type]) {
//         result.doubleWeaknesses[type] = true;
//       }
//     });
  
//     Object.keys(tempResistances).forEach((type) => {
//       if (!result.weaknesses[type] && !result.doubleWeaknesses[type]) {
//         result.resistances[type] = true;
//       }
//     });
  
//     Object.keys(tempDoubleResistances).forEach((type) => {
//       if (!result.weaknesses[type] && !result.doubleWeaknesses[type]) {
//         result.doubleResistances[type] = true;
//       }
//     });
  
//     // Calculate superEffectiveSTAB
//     Object.keys(weaknessChart).forEach((type) => {
//       types.forEach((pokemonType) => {
//         if (weaknessChart[type][pokemonType] === 2) {
//           result.superEffectiveSTAB[pokemonType] = result.superEffectiveSTAB[pokemonType] || [];
//           result.superEffectiveSTAB[pokemonType].push(type);
//         }
//       });
//     });
  
//     return result;
//   }
  

function weaknessAndStrengths(types) {

    // 1. Make one big list of all the weaknesses of the pokemon's typings
    let tempWeaknesses = [];
    // 2. Make one big list of all the resistances of the pokemon's typings
    let tempResistances = [];
    // 4. Make a list of all of the immunities of the pokemon's typings
    let tempImmunities = [];
  
    const result = {
      weaknesses: {},
      doubleWeaknesses: {},
      resistances: {},
      doubleResistances: {},
      immunities: {},
      superEffectiveSTAB: {},
    };
  
    types.forEach((type) => {
      const typeChart = weaknessChart[type];
  
      Object.entries(typeChart).forEach(([key, value]) => {
        if (value === 2) {
          tempWeaknesses.push(key);
        } else if (value === 0.5) {
          tempResistances.push(key);
        } else if (value === 0) {
          tempImmunities.push(key);
        }
      });
    });
  
    // 3. Compare the two lists, remove any element that appears in both lists
    const tempWeaknessesCopy = [...tempWeaknesses];
    tempWeaknesses = tempWeaknesses.filter(type => !tempResistances.includes(type));
    tempResistances = tempResistances.filter(type => !tempWeaknessesCopy.includes(type));
  
    // 5. Remove from the weaknesses list any element that appears in the list of immunities.
    tempWeaknesses = tempWeaknesses.filter(type => !tempImmunities.includes(type));
  
    // 6. Once all that is done and the lists have been properly edited, the logic for what goes in what list is this:
    tempWeaknesses.forEach(type => {
      if (tempWeaknesses.filter(x => x === type).length === 2) { // C. any type that appears twice in the weaknesses is a double resistance.
        result.doubleWeaknesses[type] = true;
      } else { // D. any type that appears once in the weaknesses is a normal weakness
        result.weaknesses[type] = true;
      }
    });
  
    tempResistances.forEach(type => {
      if (tempResistances.filter(x => x === type).length === 2) { // A. any type that appears twice in resistances is a double resistance
        result.doubleResistances[type] = true;
      } else { // B. any type that appears once in resistances is a normal resits
        result.resistances[type] = true;
      }
    });
  
    tempImmunities.forEach(type => { // E. any type that appears in immunities is an immunity
      result.immunities[type] = true;
    });
  
    // Calculate superEffectiveSTAB
    Object.keys(weaknessChart).forEach((type) => {
      types.forEach((pokemonType) => {
        if (weaknessChart[type][pokemonType] === 2) {
          result.superEffectiveSTAB[pokemonType] = result.superEffectiveSTAB[pokemonType] || [];
          result.superEffectiveSTAB[pokemonType].push(type);
        }
      });
    });
  
    result.weaknesses = Object.keys(result.weaknesses)
    result.doubleWeaknesses = Object.keys(result.doubleWeaknesses)
    result.resistances = Object.keys(result.resistances)
    result.doubleResistances = Object.keys(result.doubleResistances)
    result.immunities = Object.keys(result.immunities)
    return result;
  }
  
//   console.log(weaknessAndStrengths(['Ground', 'Flying']))
//   console.log(weaknessAndStrengths(['Ground', 'Flying']))
//   console.log(weaknessAndStrengths(['Ground', 'Flying']))
//   
//   console.log(weaknessAndStrengths(['Ground', 'Flying']))
  
//   console.log(weaknessAndStrengths(['Ground', 'Flying']));
// printStats(myTeam, 'mine', 'spa')
// printStats(oppTeam, 'theirs', 'spa')

// compareTeams()

const findSwitchIn = (oppMon, team) => {
    // console.log(oppMon)
    // console.log(oppMon.types)
    let switchIns = []
    const oppMonTyping = oppMon.types
    // console.log(oppMon.name)
    const oppMonTypeUse = weaknessAndStrengths(oppMon.types)
    // console.log(oppMonTyping)
    team.forEach(mon => {
        //for each of their types
        // console.log(mon.types)
        mon.types.forEach(monType => {
            //if that type is inlcuded in the oppMon weaknesses or double weaknesses
            if (oppMonTypeUse.weaknesses.includes(monType) || oppMonTypeUse.doubleWeaknesses.includes(monType)) {
                //add it to switchIns
                switchIns.push(mon)
            }

        })
    })

    //edit list to take out any mon that has a weakness to the oppMon
    //filter switch ins

    switchIns = switchIns.filter(switchIn => {
        //get switch in typing
        let noWeaknessToOpp = true
        const switchInTyping = weaknessAndStrengths(switchIn.types)
        //for each oppMon type
        oppMonTyping.forEach(oppMonType => {
            if (switchInTyping.weaknesses.includes(oppMonType) || switchInTyping.doubleWeaknesses.includes(oppMonType)) {
                noWeaknessToOpp = false
            }
        })
        return noWeaknessToOpp
            //if switchInTyping.weaknesses.includes(oppMonTyoe)
            //return false
            //else return true
    })

    switchIns = switchIns.map(switchIn => switchIn.name)

    return switchIns
}


//switch in is defined as a pokemon who generally
  //shares at least one typing with the opponent's weakness

// const compareTeams = (myTeam, theirTeam) => {
//     //make objs of both teams
//     myTeam = createTeamObjArr(myTeam)
//     theirTeam = createTeamObjArr(theirTeam)

//     //MY TEAM BOTH
//     console.log("team analysis")
//     myTeam.forEach(mon => {
//         console.log(mon.name)
//         console.log("blasted by:")
//         // console.log(mon.name)
//         console.log(findSwitchIn(mon, theirTeam))

//         console.log("blasts:")
//         const blasts = []
//         theirTeam.forEach(theirMon => {
//             if (findSwitchIn(theirMon, [mon]).length > 0) {
//                 blasts.push(theirMon.name)
//             }
//             // console.log(theirMon.name)
//             // console.log(findSwitchIn(theirMon, [mon]))
//         })
//         console.log(blasts, '\n\n')

//         //
//     })

//     //THEIR TEAM BOTH 

//     theirTeam.forEach(mon => {
//         console.log(mon.name)
//         console.log("blasted by:")
//         // console.log(mon.name)
//         console.log(findSwitchIn(mon, myTeam))

//         console.log("blasts:")
//         const blasts = []
//         myTeam.forEach(myMon => {
//             if (findSwitchIn(myMon, [mon]).length > 0) {
//                 blasts.push(myMon.name)
//             }
//             // console.log(theirMon.name)
//             // console.log(findSwitchIn(theirMon, [mon]))
//         })
//         console.log(blasts, '\n\n')

//         //
//     })
// }

const compareTeams = (myTeam, theirTeam) => {
    myTeam = createTeamObjArr(myTeam);
    theirTeam = createTeamObjArr(theirTeam);

    console.log("team analysis");

    const analyzeTeam = (team1, team2, action1, action2) => {
        team1.forEach(mon => {
            const blastedBy = findSwitchIn(mon, team2);
            const blasts = team2.filter(theirMon => findSwitchIn(theirMon, [mon]).length > 0).map(theirMon => theirMon.name);
            const table = [{Action: 'Self', 'Pokemon': mon.name, ...mon.baseStats}].concat(
                blastedBy.map((name, index) => {
                    const pokemon = team2.find(p => p.name === name);
                    return {Action: action1, 'Pokemon': name, ...pokemon.baseStats};
                }),
                blasts.map(name => {
                    const pokemon = team2.find(p => p.name === name);
                    return {Action: action2, 'Pokemon': name, ...pokemon.baseStats};
                })
            );
            console.log(mon.name);
            console.table(table);
        });
    };
    console.log("Team 1:")
    analyzeTeam(myTeam, theirTeam, 'blasted by', 'blasts');
    console.log("\n\n Team 2")
    analyzeTeam(theirTeam, myTeam, 'blasted by', 'blasts');
};


const slowbro = Dex.species.get('slowbro')
const dragapult = Dex.species.get('dragapult')
// console.log(slowbro); // prints 40
// console.log(weaknessAndStrengths(['Ground', 'Flying']))
// console.log(weaknessAndStrengths(['Fire', 'Water']))

// console.log("finding switch ins")
// console.log(findSwitchIn(slowbro, theirTeamObjArr))
// console.log(findSwitchIn(dragapult, myTeamObjArr))
// console.log(slowbro)

// compareTeams(myTeam, oppTeam)

compareTeams(masonTeam, zackTeam)
compareTeams(kirkTeam, seanTeam)