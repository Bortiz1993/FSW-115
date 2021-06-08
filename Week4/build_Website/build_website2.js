const createLi = (data) => {
    const li = document.createElement('li');
    // add archetype details to `li`
    li.textContent = `${data.name}`;
    return li;
};

const appendToDOM = (data) => {
    const ul = document.querySelector('ul');
    //iterate over all archetypes/for loop was not working
    data.map(data => {
        ul.appendChild(createLi(data));
    });
};

const fetchData = () => {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Dark Magician')
        .then(response => {
            const responseData = response.data.data;
            console.log(`GET list for the Dark Magician`, responseData);
            // append to DOM
            appendToDOM(responseData);
        })
        
        .catch(error => console.error(error));
};
const button = document.getElementById("button2").addEventListener('click', fetchData);
