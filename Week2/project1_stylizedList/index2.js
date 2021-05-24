const junkWarrior = `
[
    {
            "name": "Junk Warrior",
            "type": "Synchro Monster",
            "summoning": "Junk Synchron + 1 or more non-tuners",
             "desc": "If Synchro Summoned: It gains ATK equal to the total ATK of all Level 2 or lower monsters you currently control",
             "atk": 2300,
            "def": 1300,
            "level": 5,
            "race": "Warrior",
            "attribute": "DARK",
            "archetype": "Junk"
    
},
    {
        "name": "Junk Synchron",
        "type": "Tuner",
        "summoning": "Normal Summon",
        "desc": "If normal summoned: special summon one level 2 or below monster from the GY",
        "atk": 1300,
        "def": 500,
        "level": 3,
        "race": "Warrior",
        "attribute": "Dark",
        "archetype": "Synchron"
    },
    {
        "name": "Stardust Dragon",
        "type": "Synchro Monster",
        "summoning": "1 tuner + non-tuner monsters",
        "desc": "If a card(s) would be destroyed by effect, tribute Stardust Dragon to negate and destroy the effect and card",
        "atk": 2500,
        "def": 2000,
        "level": 8,
        "race": "Dragon",
        "attribute": "Wind",
        "archetype": "Stardust"
    }
    ]`;

const warrior = JSON.parse(junkWarrior);
var monsterList = document.getElementById("monster-list")
var output = '';
for (var i = 0; i < warrior.length; i++) {
    output += '<li>' + warrior[i].name + '</li>'
    
}
var newElement = document.getElementById("monster-list").innerHTML = output;
console.log(warrior)