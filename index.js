/* upper case for first letter */
let letter = document.getElementById('input_text');
letter.onkeydown = function(event) {
	this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
}

/* fuction creat to-do*/
const areaList = document.querySelector('#span_area_list');
const list = document.querySelector('#list'); /*ul */
const button= document.querySelector('#input_submit');/*button submit */
const areaForText = document.querySelector('#input_text');/* text area */


function newElement(){
	let li= document.createElement("li");
	let inputValue= areaForText.value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === ""){
		alert("You must write something!");
	}else { 
		list.appendChild(li);

	}
	areaForText.value="";


	/*let span =document.createElement("SPAN");
	let txt =document.createTextNode("/uooD7");*/


}








/*function addToDoText(){
 	list.style.marginTop="3vw";
	areaForText.push(button.value);
 	list.innerHTML="";
 	areaForText.forEach(i => {
	list.innerHTML+=`<li>${i}</li>`;
 });
}
addToDoText();*/
