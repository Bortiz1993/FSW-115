const createLi = (data) => {
    const li = document.createElement('li');
    // add archetype details to `li`
    li.textContent = `${data.name} is a ${data.type}`;
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
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Code Talker')
        .then(response => {
            console.log(response)
            const responseData = response.data.data;
            console.log(`GET list of Code Talkers`, responseData);
            // append to DOM
            appendToDOM(responseData);
        })
        
        .catch(error => console.error(error));
};
const button = document.getElementById("button").addEventListener('click', fetchData);
