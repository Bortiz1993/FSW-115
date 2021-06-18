
loadEvents();
//Get todo
let todoBoard = document.querySelector('.todoBoard')
axios.get('http://api.bryanuniversity.edu/YuseiFudo/list/')
 .then(response => {
 for(let i = 0; i < response.data.length; i++){
     let ul = document.querySelector('ul');
     const li = document.createElement('li')
     li.innerHTML = `<span class="delete">x</span><input id="checkbox" type="checkbox"><label>${response.data[i].name} </label>`;
     ul.appendChild(li);
    todoBoard.style.display = 'block';

    //Gary Fishback Code PUT Request with Checkbox.
    // console.log(response.data[i].isComplete)
    // if(document.getElementById('checkbox').)
    //document.getElementById('checkbox').addEventListener('click', function(){
      //if(document.getElementById('checkbox').checked === true && response.data[i].isComplete === false){
       // console.log('hello')
      //}
    //})
    //var checkbox = document.createElement('input')
    //checkbox.type = "checkbox"
   // li.appendChild(checkbox)
    //if(response.data[i].isComplete === true){
   //   checkbox.checked =true
    //  axios.put
   // }

    // if( === true){
    //   axios.put(`http://api.bryanuniversity.edu/YuseiFudo/list/${guid}`, newData)
    
    // }
   // console.log(document.getElementById('checkbox').checked)
    
 }
})
.catch(err => console.log(err))

// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click', deleteOrLineThrough)
}

function postTodo(todo){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class = "delete">x</span><input id="checkbox" type="checkbox"><label>${todo}</label>`
  ul.append(li);
  todoBoard.style.display = 'block';
}
// submit data function
function submit(e){
  e.preventDefault();
  const todoForm = document.todoForm
  const newTodo = {
    name: todoForm.title.value,
    description: todoForm.description.value,
    price: todoForm.price.value,
    isComplete: todoForm.isComplete.value
  }
  axios.post('http://api.bryanuniversity.edu/YuseiFudo/list/', newTodo)
  .then(res => console.log(res))
  .catch(err => console.log(err))

  let input1 =document.getElementById('input1')
  if(input1.value != '')
  postTodo(input1.value);
  input1.value = '';

  let input2 =document.getElementById('input2')
  if(input2.value != '')
  postTodo(input2.value);
  input2.value = '';

  let input3 =document.getElementById('input3')
  if(input3.value != '')
  postTodo(input3.value);
  input3.value = '';

}

// clear the list.
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
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }
  
  // tick a todo
  function lineTodo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
      todo.style.textDecoration = "line-through";
      todo.style.color = "#ff0000";

      //PUT request
    const putTodo = document.getElementById("checkbox").value
    console.log(putTodo)
   // putTodo.onchange = e => {
    let newData = {isComplete: putTodo.checked}
    let guid = putTodo.value

    axios.put(`http://api.bryanuniversity.edu/YuseiFudo/list/${guid}`, newData)
    //  }

    }else {
      todo.style.textDecoration = "none";
      todo.style.color = "#2f4f4f";
    }
  }

  
console.log(axios)