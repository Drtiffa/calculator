var matches = document.querySelectorAll(".calc");
var input = document.querySelector(".calc-result");

matches.forEach(function(element) {
  element.addEventListener("click", changeInput, false)
})

function changeInput() {	
	/*We reset the input if button value = AC*/
	if (this.value === 'AC') {
		input.value = '';
	}
	else if (this.value === '=') {
		input.value = calculation(input.value);
	}
	else {
		input.value += this.value;
	}	
}

function calculation(formula) {

	
	/*We replace each piece of calculation by mathematical order : *, /, +, and - */
	function multiply (correspondance, p1, p2, decalage, chaine) { return p1*p2; }
	result = formula.replace(/([0-9]+)\*([0-9]+)/, multiply);

	function divide (correspondance, p1, p2, decalage, chaine) { return p1/p2; }
	result = result.replace(/([0-9]+)\\([0-9]+)/, divide);

	function add (correspondance, p1, p2, decalage, chaine) { return Number(p1)+Number(p2); }
	result = result.replace(/([0-9]+)\+([0-9]+)/, add);

	function soustract (correspondance, p1, p2, decalage, chaine) { return p1-p2; }
	result = result.replace(/([0-9]+)\-([0-9]+)/, soustract);

	return result;
}

