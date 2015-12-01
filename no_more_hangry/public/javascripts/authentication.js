document.getElementById('loginButton').addEventListener('click', loginClick);
document.getElementById('registerButton').addEventListener('click', registerClick);

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
	var usernameLabel = document.createTextNode("Username: ");
	var username = document.createElement('input');
	username.type = "text";
	username.name = "username";
	username.required =  true;
	field1.appendChild(usernameLabel);
	field1.appendChild(username);
	field1.id = "field1";

	var field2 = document.createElement("div");
	var passwordLabel = document.createTextNode("Password: ");
	var password = document.createElement('input');
	password.type = "password";
	password.name = "password";
	password.required = true;
	field2.appendChild(passwordLabel);
	field2.appendChild(password);
	field2.id = "field2"

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Submit";
	submit.name = "login";
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
	var usernameLabel = document.createTextNode("Username: ");
	var username = document.createElement('input');
	username.type = "text";
	username.name = "username";
	username.required = true;
	field1.appendChild(usernameLabel);
	field1.appendChild(username);
	field1.id = "field1";

	
	var field2 = document.createElement("div");
	var passwordLabel = document.createTextNode("Password: ");
	var password = document.createElement('input');
	password.type = "password";
	password.name = "password";
	password.required = true;
	field2.appendChild(passwordLabel);
	field2.appendChild(password);
	field2.id = "field2"
	
	var field3 = document.createElement("div");
	var nameLabel = document.createTextNode("Name: ");
	var name = document.createElement('input');
	name.type = "text";
	name.name = "nname";
	name.required = true;
	field3.appendChild(nameLabel);
	field3.appendChild(name);
	field3.id = "field3";

	var field4 = document.createElement("div");
	var addressLabel = document.createTextNode("Address: ");
	var address = document.createElement('input');
	address.type = "text";
	address.name = "address";
	address.required = true;
	field4.appendChild(addressLabel);
	field4.appendChild(address);
	field4.id = "field4";

	var field5 = document.createElement("div");
	var zipCodeLabel = document.createTextNode("Zip Code: ");
	var zipCode = document.createElement('input');
	zipCode.type = "text";
	zipCode.name = "zipCode";
	zipCode.required = true;
	field5.appendChild(zipCodeLabel);
	field5.appendChild(zipCode);
	field5.id = "field5";

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Submit";
	submit.name = "register";
	//loginform.appendChild
	document.getElementById("loginForm").appendChild(field1);
	document.getElementById("loginForm").appendChild(field2);
	document.getElementById("loginForm").appendChild(field3);
	document.getElementById("loginForm").appendChild(field4);
	document.getElementById("loginForm").appendChild(field5);
	document.getElementById("loginForm").appendChild(submit);

}
