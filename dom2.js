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
