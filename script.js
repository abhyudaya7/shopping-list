var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//function to get the length of input.
function inputLength() {
	return input.value.length;
}

//creating a list element and a delete button to it.
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;

}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var list = document.querySelectorAll("li"); 

// adding the delete button to predefined elements in the list.
for (var i = 0; i< list.length;i++)
{
	list[i].appendChild(createBtn());
}
function createBtn(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.onclick = removeParent;
	return btn;
}



// target property is a reference to the object onto which the event was dispached.

//function to mark the item as done after listening to a click. 
ul.onclick = function(evt){
	var target = evt.target;
	target.classList.toggle('done');
}
//function to delete an item after clicking on delete button.
function removeParent(event){
	event.target.parentNode.remove();
}