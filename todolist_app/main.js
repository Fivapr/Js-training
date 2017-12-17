var listItems = document.getElementById('my-list').getElementsByTagName('li');
var ourHeadline = document.getElementById('my-headline');
var ourButton = document.getElementById('my-button');
var ourList = document.getElementById('my-list');
var newItemCounter = 1;

ourList.addEventListener('click', activateItem)

function activateItem(e){
  if(e.target.nodeName == 'LI'){
    ourHeadline.innerHTML = e.target.innerHTML;
    for (i=0; i<e.target.parentNode.children.length; i++) {
      e.target.parentNode.children[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
}

ourButton.addEventListener('click', createNewItem);

function createNewItem(){
  ourList.innerHTML += '<li>Something new ' + newItemCounter + '</li>'
  newItemCounter++;
}
