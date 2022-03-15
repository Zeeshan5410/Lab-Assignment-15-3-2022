const inp = document.querySelector('#input');
const btn = document.querySelector('#submit-btn')
const todos = document.querySelector('.todos');
const totalTodos = document.querySelector('#total-todos');
const uncheckedTodos = document.querySelector('#unchecked-todos');

var total = 0;
var unchecked = 0;

btn.addEventListener('click', function(){
    //Creating a todo
    const todo = document.createElement('div');
    todo.className = 'todo';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.addEventListener('click',function(e) {
        e.target.checked?unchecked-=1:unchecked+=1;    
        uncheckedTodos.innerText = unchecked;

    })
    const span = document.createElement('span');
    span.innerText = inp.value;
    inp.value = '';
    const del = document.createElement('button');
    del.innerText = 'Delete';
    del.addEventListener('click',(e)=>{
        const res = e.target.parentNode;
        todos.removeChild(res);
        total-=1;
        res.children[0].checked?"":unchecked-=1;
        totalTodos.innerText = total;
        unchecked.innerText = unchecked;
    })

    todo.appendChild(cb);
    todo.appendChild(span);
    todo.appendChild(del);
    //Inserting todo
    todos.append(todo);
    //Updating counts
    total+=1;
    unchecked+=1;

    totalTodos.innerText = total;
    uncheckedTodos.innerText = unchecked;

})
