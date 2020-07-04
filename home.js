const inputTodo = document.getElementById("todo-text");
const inputButton = document.getElementById("btn");
const listedItem = document.getElementById("listed-item");


inputButton.addEventListener("click", function addOn()

{

    //event.preventDefault();
   const inputSpan = document.createElement("span");
   inputSpan.innerText = inputTodo.value;
   
   
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   
   const completedButton = document.createElement("button");
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   
   const trashButton = document.createElement("button");
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  
   
   todoDiv.appendChild(inputSpan);
   todoDiv.appendChild(completedButton);
   todoDiv.appendChild(trashButton);
     
   const newTodo = document.createElement("li");
   newTodo.classList.add("todo-item");
   newTodo.appendChild(todoDiv);
   listedItem.appendChild(newTodo);
    trashButton.addEventListener("click",function(e){
        listedItem.removeChild(e.target.parentElement.closest(".todo-item"));
       
       
    });
    inputTodo.value = "";
});


