let inp = document.querySelector('.todoInp')
let btn = document.querySelector('.btn')
let list = document.querySelector('.todoList')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(inp.value);

})


function newTodo(){
    let li = document.createElement('li')
    let span = document.createElement('span')

    span.className= 'deleteBtn'
    span.innerText = 'X'

    li.className = 'todoItem'
    li.innerText = inp.value

    span.addEventListener('click', deleteTodo
    )

     list.appendChild(li)
     li.appendChild(span)

     inp.value = ''
}

function deleteTodo(){

    
    // let listItem = event.target.parentElement;
    // listItem.remove();


    let deleteBtn = Array.from(document.querySelectorAll('span'))

   deleteBtn.filter((item)=>{
    item.onclick = function(){
        this.parentElement.remove()
    }
   })
}


