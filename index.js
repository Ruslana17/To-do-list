/* upper case for first letter */
let letter = document.getElementById('input_text');
letter.onkeydown = function(event) {
	this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
}

/* fuction creat to-do*/
const area=document.querySelector('#span_area_list');
console.log(area);