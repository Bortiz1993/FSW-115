let todoBoard = document.querySelector('todoBoard')

axios.get('http://api.bryanuniversity.edu/YuseiFudo/list/')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        let ul = document.querySelector('ul');
        const li = document.createElement('li')
        li.innerHTML = `<span class="delete">x</span><input id="checkbox" type="checkbox"><label>${response.data[i].name} </label>`;
        ul.appendChild(li);
        console.log(response)
        
    }
})
.catch(error => console.log(error))



console.log(axios)