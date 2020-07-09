const inputTodo = document.getElementById("todo-text");
const inputButton = document.getElementById("btn");
const listedItem = document.getElementById("listed-item");


inputButton.addEventListener("click", function addOn()

{
    if (inputTodo.value === ''){
        alert('Please Type In A Todo')
    }else {
    //event.preventDefault();
   const inputSpan = document.createElement("span");
   inputSpan.innerText = inputTodo.value;
   
   
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   
   const completedButton = document.createElement("span");
   completedButton.innerHTML = '<i class="fas fa-check ml-5"></i>';
   
   const trashButton = document.createElement("span");
   trashButton.innerHTML = '<i class="fas fa-trash ml-3"></i>';
  
   
   todoDiv.appendChild(inputSpan);
   todoDiv.appendChild(completedButton);
   todoDiv.appendChild(trashButton);
     
   const newTodo = document.createElement("li");
   newTodo.classList.add("todo-item");
   newTodo.classList.add("shadow");
   newTodo.classList.add("card");
    newTodo.classList.add("list-group-item");
   newTodo.appendChild(todoDiv);
   listedItem.appendChild(newTodo);
    trashButton.addEventListener("click",function(e){
        listedItem.removeChild(e.target.parentElement.closest(".todo-item"));
       
       
    });
    inputTodo.value = "";
}
});


