
const getData = async () => {
    let response;

   let response2;

    try{
         response = await axios.get('https://swapi.dev/api/people/1')
        const homeworld = await axios.get(response.data.homeworld)
        const residents = await axios.get(homeworld.data.residents[0])
        const lukeFilms = await axios.get(homeworld.data.films[0])
        
        //test for Promise.all()
       
        console.log(response)
        console.log(homeworld)
        console.log(lukeFilms)
        console.log(residents)
        //console.log(filmPromises)
         

        displayData( homeworld, lukeFilms, residents)
    }
    catch(error){
        response2 = await axios.get('https://swapi.dev/api/people/2')
        console.log(error) 
        console.log(response2)   
    }  
    
}

async function getAllLukeData(){
    const Luke = await axios.get('https://swapi.dev/api/people/1')
    const lukeAllFilms = Luke.data.films
const filmPromises = []
for(let i = 0; i < lukeAllFilms.length; i++){
    filmPromises.push(axios.get(lukeAllFilms[i]))
}

Promise.all(filmPromises)
      .then(response => console.log(response))
        .catch(err => console.log(err))
}

getData()
getAllLukeData()

function displayData( homeworld, lukeFilms, residents){

  console.log(homeworld)
  const getContainer2 = document.getElementById('getContainer1')
  getContainer2.textContent = homeworld.data.name
  document.body.appendChild(getContainer2)

  const getContainer3 = document.getElementById('getContainer2')
  getContainer3.textContent = lukeFilms.data.title
  document.body.appendChild(getContainer3)

 const main = document.getElementById('getContainer')
 main.textContent = residents.data.name
 document.body.appendChild(main)
}