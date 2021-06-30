
loadEvents();
//Get todo
let todoBoard = document.querySelector('.todoBoard')
axios.get('http://api.bryanuniversity.edu/YuseiFudo/list/')
 .then(response => { console.log(response.data)
 for(let i = 0; i < response.data.length; i++){
     let ul = document.querySelector('ul');
     const li = document.createElement('li')
     li.id = response.data[i]._id
     li.innerHTML = `<span class="delete">x</span><input id="checkbox" type="checkbox" ${response.data[i].isComplete? "checked = true": " "}><label>${response.data[i].name} ${response.data[i].description} ${response.data[i].price} </label>`;
     ul.appendChild(li);
    todoBoard.style.display = 'block';

    if(response.data[i].isComplete){
      li.style.textDecoration = "line-through";
      li.style.color = "#ff0000";
    }else {
      li.style.textDecoration = "none";
      li.style.color = "#2f4f4f";
    }
 }
})
.catch(err => console.log(err))

// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click', deleteOrLineThrough)
}

// submit data function
function submit(e){
  e.preventDefault();
  const todoForm = document.todoForm
  const newTodo = {
    name: todoForm.title.value,
    description: todoForm.description.value,
    price: todoForm.price.value,
    isComplete: false
  }
  //axios post.
  axios.post('http://api.bryanuniversity.edu/YuseiFudo/list/', newTodo)
  .then(res => console.log(res))
  .catch(err => console.log(err))

  let input1 =document.getElementById('input1')
  if(input1.value != '')
  (input1.value);
  input1.value = '';
}

// clear the whole todo.
function clearList(e){
 document.querySelector('ul').innerHTML = '';
  }
  
  // delete Line Through
  function deleteOrLineThrough(e){
    if(e.target.className == 'delete')
      deleteTodo(e);
    else {
      lineTodo(e);
    }
  }
  
  // delete todo
  function deleteTodo(e){
    console.log(e.target)
    console.log(e.target.parentNode)
    let remove = e.target.parentNode
    console.log(remove.id)
    axios.delete(`http://api.bryanuniversity.edu/YuseiFudo/list/${remove.id}`).then(response => {
      
      console.log(response)
      let parentNode = remove.parentNode;
      parentNode.removeChild(remove);
    })
  }
  // tick a todo
  function lineTodo(e){
    console.log(e.target)
    
    const todo = e.target.parentNode;
      console.log(todo)

       let newData = {isComplete: e.target.checked}
       console.log(typeof newData, newData)
  //Axios PUT
      axios.put(`http://api.bryanuniversity.edu/YuseiFudo/list/${todo.id}`, newData).then(response =>{
      console.log(response)
      if(newData.isComplete){
        todo.style.textDecoration = "line-through";
        todo.style.color = "#ff0000";
      }else {
        todo.style.textDecoration = "none";
        todo.style.color = "#2f4f4f";
      }
    })
  }

  //CodeTalkers Get request.
  const createLi = (data) => {
    const li = document.createElement('li');
    // add archetype details to `li`
    li.textContent = `${data.name} is a ${data.type}`;
    return li;
};

const appendToDOM = (data) => {
    const ul = document.querySelector('#ul2');
    //iterate over all archetypes/for loop was not working
    data.map(data => {
        ul.appendChild(createLi(data));
    });
};

const fetchData = async () => {
   await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Code Talker&num=5&offset=0')
        .then(res => {
            console.log(res)
            const responseData = res.data.data;
            console.log(`GET list of Code Talkers`, responseData);
            // append to DOM
            appendToDOM(responseData);
        })
        
        .catch(error => console.error(error));
};
const button = document.getElementById("getButton").addEventListener('click', fetchData);


console.log(axios)

