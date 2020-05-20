// const inputTodo = document.getElementById("todo-text");
// const inputButton = document.getElementById("btn");
// const listedItem = document.getElementById("listed-item");


// inputButton.addEventListener("click", function addOn() {

//     //event.preventDefault();
//     const inputSpan = document.createElement("span");
//     inputSpan.innerText = inputTodo.value;


//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");

//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fas fa-check"></i>';
//     completedButton.classList.add("completed-btn");

//     const trashButton = document.createElement("button"); // this is where you created (the variable) my bad 
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add("trash-btn");
//     trashButton.addEventListener('click', e => {
//         console.log(e); //maybe lets see
//         const item = e.target;
//         if (item.classList[0] === "trash-btn") {
//             const todo = item.parentElement; //its ment to target the parent of the trash button which is the LI
//             todo.remove();// i don't even understand this function sef lets see sha
//             console.log(item)// onsec let me think
//         }
//     })

//     todoDiv.appendChild(inputSpan);
//     todoDiv.appendChild(completedButton);
//     todoDiv.appendChild(trashButton);

//     const newTodo = document.createElement("li");
//     newTodo.classList.add("todo-item");
//     newTodo.appendChild(todoDiv);
//     listedItem.appendChild(newTodo);

//     inputTodo.value = ""; //nice i get that, whats out of scope tho? 
// });// the scope ended ere   you get ?
// // no i dont


const todoList = []; // this is  where all the todo will go
const value = document.getElementById('todo-text'); //input value na
const addBtn = document.getElementById('btn'); // to add event
let title = '';
value.addEventListener('input', e => console.log(e.target.value)); // strange
//not working, lets see sha

const addToDo = (todo) => {
    // the todo coming in will be an object
    // takes a todo
    // console.log(todo)
    todoList.push(todo);// adds what ever todo to the array
};

const renderToDO = () => {
    todoList.forEach((value, index) => {
        document.getElementById('listed-item').innerHTML += `<span>${todo.title}</span>`;
    })
}

addBtn.addEventListener('click', () => addToDo({ title: value })); //object
// i changed that cause it was running onits won. lolz..

// they wan put off gen bro, can i send it to your mail then show your side tomorrow ? or resent the mail
// looks like you changing the whole code tho
// and there are some things i don understand in your code?
//??????????????????????????????????????????????????????????????