document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#submit").disabled = true;
});



function validate() {
	var a  = false;
	document.querySelectorAll('.check_empty').forEach(input => {
		console.log(input.value.length);
		if(input.value.length == 0 ){
			a =  true;
		}
	})

	document.querySelector('#submit').disabled = a;
}

