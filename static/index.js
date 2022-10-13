document.addEventListener('DOMContentLoaded', () => {
	document.querySelector("#submit").disabled = true;
	
	document.querySelectorAll('.check_empty').forEach(input => {
		input.onkeyup = () => {
			console.log(input.value.length);
			if(input.value.length == 0 ){
				console.log("mensaje")
				document.querySelector('#submit').disabled = true;
			}else{
				console.log("222")
				document.querySelector('#submit').disabled = false;
			}
		};
	});
});
