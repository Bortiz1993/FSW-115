const junkWarrior = `{"cards":
[
    {
            "name": "Junk Warrior",
            "type": "Synchro Monster",
            "summoning": "Junk Synchron + 1 or more non-tuners",
             "desc": "If Synchro Summoned: gains ATK equal to the total ATK of all low lv monsters you currently control.",
             "atk": 2300,
            "def": 1300,
            "level": 5,
            "race": "Warrior",
            "attribute": "DARK"
    
},
    {
        "name": "Junk Synchron",
        "type": "Tuner",
        "summoning": "Normal Summon",
        "desc": "If normal summoned: special summon one level 2 or below monster from the GY.",
        "atk": 1300,
        "def": 500,
        "level": 3,
        "race": "Warrior",
        "attribute": "Dark"
    },
    {
        "name": "Stardust Dragon",
        "type": "Synchro Monster",
        "summoning": "1 tuner + non-tuner monsters",
        "desc": "If a card(s) would be destroyed by effect, tribute Stardust Dragon to negate the effect and card.",
        "atk": 2500,
        "def": 2000,
        "level": 8,
        "race": "Dragon",
        "attribute": "Wind"
    }
    ]}`;

const warrior = JSON.parse(junkWarrior);
var monsterList = document.getElementById("monster-list")
var output = '';
// for (var i = 0; i < warrior.cards.length; i++) {
//     output += '<li>' + "Name: " + warrior.cards[i].name + "<br><br>" + "level:" + warrior.cards[i].level + "<br><br>" +
//     "type: " + warrior.cards[i].type + "<br><br>" + "summoning: " + warrior.cards[i].summoning + "<br><br>" + "desc: " + warrior.cards[i].desc +  "<br><br>"
//     + "Atk: " + warrior.cards[i].atk + "<br><br>" + "Def: " + warrior.cards[i].def + "<br><br>" + "race: " + warrior.cards[i].race + "<br><br>" +
//     "attribute: " + warrior.cards[i].attribute
    
//     '</li>'
    
// }
//Gary Example
for (var i = 0; i < warrior.cards.length; i++) {
    var li1 = document.createElement('li')
    li1.textContent =  "attribute: " + warrior.cards[i].attribute
    monsterList.appendChild(li1)
    var li2 = document.createElement('li')
    li2.textContent =  "race: " + warrior.cards[i].race
    monsterList.appendChild(li1)
    var li3 = document.createElement('li')
    li3.textContent =  "Name: " + warrior.cards[i].name
    monsterList.appendChild(li1)
    monsterList.appendChild(li2)
    monsterList.appendChild(li3)



}
// monsterList.innerHTML = output;
console.log(warrior)