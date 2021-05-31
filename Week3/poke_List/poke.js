const xhr = new XMLHttpRequest()
const xhr2 = new XMLHttpRequest()
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true)
xhr.send()

xhr2.open("GET", "https://pokeapi.co/api/v2/ability", true)
xhr2.send()

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        showData(data.results)
    }else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

function showData(data){
    console.log(data)
    for(let i = 0; i < data.length; i++){
        const pokemon = document.createElement('h1')
        pokemon.textContent = "This is the Pokemons name: " + data[i].name
        document.body.appendChild(pokemon)
    }
}

xhr2.onreadystatechange = function () {
    if(xhr2.readyState === 4 && xhr2.status === 200){
        let data = JSON.parse(xhr2.responseText)
        showData2(data.results)
    }else if(xhr2.readyState === 4 && xhr2.status !== 200){
        console.log(xhr2.responseText)
    }
}

function showData2(data){
    console.log(data)
    for(let i = 0; i < data.length; i++){
        const pokemon = document.createElement('h1')
        pokemon.textContent = "This is the ability: " + data[i].name
        document.body.appendChild(pokemon)
    }
}

