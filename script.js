const todotext =document.getElementById('todo-text');
const todoul =document.getElementById('todo-ul');

function addTask() {
    if (todotext.value===''){
        alert('Enter some text');

    } else {
console.log(todotext.value.trim());
const liTag =document.createElement('li');
const spanTag =document.createElement('span');

const textNode =document.createTextNode(todotext.value.trim());
spanTag.appendChild(textNode);

spanTag.addEventListener('click',(e)=>{
    console.log("span text>>>>>>",e.target);
    e.target.classList.toggle('done');
});


const spanclose =document.createElement('span');
spanclose.classList.add('close');
spanclose.innerHTML = '&times;';

spanclose.addEventListener('click',(e)=>{
    e.target.classList.toggle('done');
    console.log(e.target.parentElement);
    const li =e.target.parentElement;
    li.parentElement.removeChild(li);

});


liTag.appendChild(spanTag);
liTag.appendChild(spanclose);
todoul.appendChild(liTag);

// todotext.value='';

    }
}