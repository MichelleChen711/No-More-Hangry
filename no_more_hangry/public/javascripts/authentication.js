document.addEventListener("DOMContentLoaded",function(){
	document.getElementById('loginButton').addEventListener('click', loginClick);
	document.getElementById('registerButton').addEventListener('click', registerClick);
});

//document.getElementById('loginButton').addEventListener('click', loginClick);
//document.getElementById('registerButton').addEventListener('click', registerClick);

function loginClick(event) {
	console.log("login");

	var form = document.getElementById("loginForm");
	while(form.firstChild) {
		form.removeChild(form.firstChild);
	}

	document.getElementById('loginButton').style.display = 'none';
	document.getElementById('registerButton').style.display = 'block';

	//create the input form elements
	var field1 = document.createElement("div");
	var username = document.createElement('input');
	username.type = "text";
	username.name = "username";
	username.className = "form-control";
	username.required =  true;
	username.placeholder = "Username";
	field1.appendChild(username);
	field1.id = "field1";

	var field2 = document.createElement("div");
	var password = document.createElement('input');
	password.type = "password";
	password.name = "password";
	password.className = "form-control";
	password.placeholder ="Password";
	password.required = true;
	field2.appendChild(password);
	field2.id = "field2"

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Submit";
	submit.name = "login";
	submit.className = "btn btn-success";
	//loginform.appendChild
	document.getElementById("loginForm").appendChild(field1);
	document.getElementById("loginForm").appendChild(field2);
	document.getElementById("loginForm").appendChild(submit);
	
}
function registerClick(event) {
	console.log("register");

	var form = document.getElementById("loginForm");
	while(form.firstChild) {
		form.removeChild(form.firstChild);
	}

	document.getElementById('registerButton').style.display = 'none';
	document.getElementById('loginButton').style.display = 'block';

	//create the input form elements
	var field1 = document.createElement("div");
	
	var username = document.createElement('input');
	username.type = "text";
	username.name = "username";
	username.className = "form-control";
	username.required = true;
	username.placeholder = "Username";

	field1.appendChild(username);
	field1.id = "field1";

	
	var field2 = document.createElement("div");
	var password = document.createElement('input');
	password.type = "password";
	password.name = "password";
	password.className = "form-control";
	password.placeholder = "Password";	
	password.required = true;
	field2.appendChild(password);
	field2.id = "field2"
	
	var field3 = document.createElement("div");
	var firstname = document.createElement('input');
	firstname.type = "text";
	firstname.name = "fname";
	firstname.className = "form-control";
	firstname.placeholder = "First Name";
	firstname.required = true;
	field3.appendChild(firstname);
	field3.id = "field3";

	var field4 = document.createElement("div");
	var lastname = document.createElement('input');
	lastname.type = "text";
	lastname.name = "lname";
	lastname.className = "form-control";
	lastname.placeholder = "Last Name";
	lastname.required = true;
	field4.appendChild(lastname);
	field4.id = "field3";

	/**var field4 = document.createElement("div");
	var address = document.createElement('input');
	address.type = "text";
	address.name = "address";
	address.className = "form-control";
	address.placeholder = "Address";
	address.required = true;
	field4.appendChild(address);
	field4.id = "field4";

	var field5 = document.createElement("div");
	var zipCode = document.createElement('input');
	zipCode.type = "text";
	zipCode.name = "zipCode";
	zipCode.className = "form-control";
	zipCode.placeholder = "Zip Code";
	zipCode.required = true;
	field5.appendChild(zipCode);
	field5.id = "field5";
	**/

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Submit";
	submit.name = "register";
	submit.className = "btn btn-success";
	//loginform.appendChild
	document.getElementById("loginForm").appendChild(field1);
	document.getElementById("loginForm").appendChild(field2);
	document.getElementById("loginForm").appendChild(field3);
	document.getElementById("loginForm").appendChild(field4);
	//document.getElementById("loginForm").appendChild(field5);
	document.getElementById("loginForm").appendChild(submit);

}
