const submit = document.querySelector("#submit");

document.addEventListener('DOMContentLoaded', () => {
	submit.disabled = true;
});

function validate() {
	submit.disabled  = false;

	document.querySelectorAll('.check_empty').forEach(input => {
		if(input.value.length == 0 ){
			submit.disabled =  true;
		}
	});
}
