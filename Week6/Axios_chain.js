

const getData = () => {
axios.get('https://swapi.dev/api/people/1')
.then(response => {
    const homeworldUrl = response.data.homeworld
    console.log(homeworldUrl)
    return axios.get(homeworldUrl)
})
.then(response => axios.get(response.data.films[1]))
.then(res => console.log(res.data))
.catch(err => console.log(err))
}

console.log(axios)