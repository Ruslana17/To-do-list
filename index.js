/* upper case for first letter */
let letter = document.getElementById('input_text');
letter.onkeydown = function(event) {
	this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
}
