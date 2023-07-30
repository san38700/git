var items = document.getElementsByClassName("list-group-item");
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
items[2].style.backgroundColor = "#2AAA8A";

var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "bold";
}
li[2].style.backgroundColor = "#2AAA8A";

var items = document.querySelectorAll('li');


items[1].style.color = "green";

var odd = document.querySelectorAll('li:nth-Child(odd)');

for (var i = 0; i < odd.length; i ++){
    odd[i].style.backgroundColor = 'green';
}

//Creating DOM and Modifying DOM
var items = document.querySelector('#items');

//console.log(items.parentElement);

//ParentElement
items.parentElement.style.backgroundColor = "#f4f4f4";

//lastElementChild
//console.log(items.lastElementChild);

items.lastElementChild.style.backgroundColor = "#00A36C"

//lastChild
//console.log(items.lastChild);
//items.lastChild.style.backgroundColor = "blue";

//firstElementChild
//console.log(items.firstElementChild);
items.firstElementChild.style.backgroundColor = "#c4c4c4";

//firstChild
//console.log(items.firstChild);
//items.firstChild.style.backgroundColor = "#c4c4c4";

//nextSibling
//console.log(items.nextSibling);

//nextElementSibling
//items.nextSibling.style.color = "blue"

//previousSibling
//console.log(items.previousSibling);

//previousElementSibling
//console.log(items.previousElementSibling);
items.previousElementSibling.textContent = 'Hello World';


//createElement

var newDiv = document.createElement('div');

//addClass

newDiv.className = 'Hello';

//add id
newDiv.id = "HelloDiv";


//set attr
newDiv.setAttribute('title', 'helloatt');

//createTextNode

var newDivText = document.createTextNode('Hello World');


newDiv.appendChild(newDivText)


var container = document.querySelector('.container');
var h1 = document.querySelector('h1');

console.log(newDiv)

container.insertBefore(newDiv,h1)

//Delete and Edit functionality

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
filter.addEventListener('keyup', filterItems);

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("item").value;
  var newItemDes = document.getElementById('item2').value;

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "+newItemDes));
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn-secondary btn-sm py-lg-2';
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure')){
      var li = e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}
//Filter

function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

//localStorage onSubmit

const formInput = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

formInput.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault()
    localStorage.setItem('Name',nameInput.value);
    localStorage.setItem('Email',emailInput.value);
}

// saving as object in localStorage

const formInput = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

formInput.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault()
    let obj = {
        Name : nameInput.value,
        Email : emailInput.value

    }
    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem('obj',obj_serialized);
    console.log(localStorage);
}
// adding multiple user to local storage

const formInput = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
var usersInput = document.querySelector("#users");
var msg = document.querySelector('.msg');

formInput.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields";
    }else{
        function generateUniqueKey() {
            // Create a timestamp-based key to make it unique each time
            return emailInput.value
          }
          
        function addUserToLocalStorage(user) {
            // Generate a unique key for the user data
            const key = generateUniqueKey();
          
            // Store the user data using the generated key
            localStorage.setItem(key, JSON.stringify(user));
        }
        
        let obj = {
            Name : nameInput.value,
            Email : emailInput.value
    
        }
        addUserToLocalStorage(obj)
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        usersInput.appendChild(li);
        
    }
    
    
}





