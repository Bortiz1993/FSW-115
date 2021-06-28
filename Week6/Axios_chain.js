

// const getData = () => {
// axios.get('https://swapi.dev/api/people/1')
// .then(response => {
//     const homeworldUrl = response.data.homeworld
//     console.log(homeworldUrl)
//     return axios.get(homeworldUrl)
// })
// .then(response => axios.get(response.data.films[0]))
// .then(res => console.log(res.data))
// .catch(err => console.log(err))
// }

// console.log(axios)
// getData()


const getData = async () => {
    let response;
   // let homeworld;
   let response2;

   let promise;
    try{
         response = await axios.get('https://swapi.dev/api/people/1')
        const homeworld = await axios.get(response.data.homeworld)
        const lukeFilms = homeworld.data.films
        const filmPromises = []
        for(let i = 0; i < lukeFilms.length; i++){
            filmPromises.push(axios.get(lukeFilms[i]))
        }
        
        console.log(response)
        console.log(homeworld)
        //console.log(filmPromises)
      promise = Promise.all(filmPromises)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        displayData(homeworld, lukeFilms)
    }
    catch(error){
        response2 = await axios.get('https://swapi.dev/api/people/2')
        console.log(error) 
        console.log(response2)   
    }  
    
}

getData()

function displayData(homeworld, lukeFilms){
  console.log(homeworld)
  const getContainer1 = document.getElementById('getContainer')
  getContainer1.textContent = homeworld.data.name
  document.body.appendChild(getContainer1)

  const getContainer2 = document.getElementById('getContainer2')
  getContainer2.textContent = lukeFilms.data[i].title
  document.body.appendChild(getContainer2)

 
}