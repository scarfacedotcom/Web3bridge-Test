const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const newTemplate = (Todo) => {
   
   const html = `<li
   class="list-group-item d-flex justify-content-between align-items-center"
 >
   <span>${Todo}</span>
   <i class="far fa-trash-alt delete"></i>
 </li>` ;

 list.innerHTML += html
}

addForm.addEventListener('submit', e => {

    e.preventDefault()
    const Todo = addForm.add.value.trim();

    if(Todo.length <= 4) {
      newTemplate(Todo)
      addForm.reset()
    } else {
        console.log("max number has been exceeded")
    }

  
})

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) =>  !todo.textContent.includes(term))
        .forEach((todo) => {
            todo.classList.add('filtered')
        })

    Array.from(list.children)
    .filter((todo) =>  todo.textContent.includes(term))
    .forEach((todo) => {
        todo.classList.remove('filtered')
    })
}

// keyup event

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
})


