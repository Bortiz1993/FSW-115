const junkWarrior = `
{
   "id": 60800381,
  "name": "Junk Warrior",
 "type": "Synchro Monster",
 "desc": "Junk Synchron + 1 or more non-Tuner monsters\nIf this card is Synchro Summoned: It gains ATK equal to the total ATK of all Level 2 or lower monsters you currently control.",
  "atk": 2300,
 "def": 1300,
 "level": 5,
 "race": "Warrior",
 "attribute": "DARK",
"archetype": "Junk"

}`;

const warrior = JSON.parse(junkWarrior)

console.log(typeof warrior)