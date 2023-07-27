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
