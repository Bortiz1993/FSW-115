
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

       let newData = {isComplete: e.target.checked === "true" || "false"? true:false}
       console.log(newData)
  //Axios PUT
      axios.put(`http://api.bryanuniversity.edu/YuseiFudo/list/${todo.id}`, newData).then(response =>{
      console.log(response)
      if(newData){
        todo.style.textDecoration = "line-through";
        todo.style.color = "#ff0000";
      }else {
        todo.style.textDecoration = "none";
        todo.style.color = "#2f4f4f";
      }
    })
  }
console.log(axios)