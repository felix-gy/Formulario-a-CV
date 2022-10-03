document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#submit").disabled = true;
	
	document.querySelectorAll('.check_empty').forEach(input => {
		input.onkeyup = () => {
			if(input.value.length > 0 )
				document.querySelector('#submit').disabled = false;
			else
				document.querySelector('#submit').disabled = true;
	
		};
	
	});
	
});
