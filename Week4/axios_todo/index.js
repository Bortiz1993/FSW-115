
loadEvents();
let todoBoard = document.querySelector('.todoBoard')
axios.get('http://api.bryanuniversity.edu/YuseiFudo/list/')
 .then(response => {
 for(let i = 0; i < response.data.length; i++){
     let ul = document.querySelector('ul');
     const li = document.createElement('li')
     li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${response.data[i].name} </label>`;
     ul.appendChild(li);
   
 }
})
.catch(err => console.log(err))
 todoBoard.style.display = 'block';
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click', deleteOrLineThrough)
}
// submit data function
function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    (input.value);
  input.value = '';
}

// clear the list.
function clearList(e){
  let ul2 = document.querySelector('ul').innerHTML = '';
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
    }else {
      todo.style.textDecoration = "none";
      todo.style.color = "#2f4f4f";
    }
  }

  
console.log(axios)