const inputTask = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task-button');
const saveTaskButton = document.getElementById('save-task-button');
const redCircle = document.getElementById('red-circle');
const greenCircle = document.getElementById('green-circle');
const taskList = document.getElementById('task-list');
const color = document.querySelectorAll('.color');



function createLi(text){
    let li = document.createElement('li');
    li.classList.add('task');
    li.innerText = text;
    taskList.appendChild(li)
}

function addTask(){
    const liTextContent = inputTask.value;
    if(liTextContent.length > 0){
        createLi(liTextContent)
        addEventInLis();
    } else{
        alert('DIGITA ALGUMA COISA AI PÔ')
    }
}

function changeLiColor(event){
    const selectedColor = document.querySelector('.selected');
    const style = getComputedStyle(selectedColor);
    event.target.style.backgroundColor = style.backgroundColor
}

function addEventInLis(){
    const liList = document.querySelectorAll('.task')
    for(let i = 0; i < liList.length; i += 1){
        liList[i].addEventListener('click', changeLiColor )
    }
}

function removeSelected(){
    for(let i = 0; i < color.length; i += 1){
        if(color[i].classList.contains('selected')){
            color[i].classList.remove('selected')
        }
    }
}

function selectedColor(event){
    // const selectClass = event.target.className;
    // IF SUBSTITUINDO A LÓGICA DO TOGGLE \/
    // if(event.target.className === 'selected'){
    //     event.target.classList.remove('selected')
    // } else {
    //     event.target.classList.add('selected')
    // }
    removeSelected()
    event.target.classList.toggle('selected');
}

function saveTasksLocalStorage(){
    localStorage.setItem('tasks',taskList.innerHTML);
}

function getTasksFromLocalStorage(){
    const tasks = localStorage.getItem('tasks');
    taskList.innerHTML = tasks;
    addEventInLis()
}



addTaskButton.addEventListener('click', addTask);
redCircle.addEventListener('click', selectedColor);
greenCircle.addEventListener('click', selectedColor)
saveTaskButton.addEventListener('click', saveTasksLocalStorage)
// querySelector
// querySelectorAll

// getElementById
// getELementsByClassName

window.onload = () => {
    getTasksFromLocalStorage()
}