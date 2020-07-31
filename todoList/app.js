const form= document.querySelector('#task-form');
const task= document.querySelector('#task');
const taskList= document.querySelector('ul.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterList= document.querySelector('#filter');
const clearAll= document.querySelector('.clear-tasks')

  

const card= document.querySelector('.card');
card.style.width='50% '
card.style.float='center'

loadEventlistners();

function loadEventlistners(){

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click',removeTask);
    filterList.addEventListener('keyup', filterTasks);

    
}

function addTask(e){
    if(task === ''){
        alert('Add Tasks');
    }
    
    const list= document.createElement('li');

    list.className ='collection-item';
    list.appendChild(document.createTextNode(task.value));

    link= document.createElement('a');
    link.className ='delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    list.appendChild(link);

    taskList.appendChild(list);

    task.value ='';
    e.preventDefault();
    

} 

function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Sure Delete?')){
            e.target.parentElement.parentElement.remove();
        }
    }  

}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  } 