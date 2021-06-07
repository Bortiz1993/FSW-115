function getData() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
        let ul = document.querySelector('ul');
        const li = document.createElement('li')
        li.textContent = response.data[i].name
        ul.appendChild(li)
        }
    })
    .catch(err => console.log(err))
}
console.log(axios)