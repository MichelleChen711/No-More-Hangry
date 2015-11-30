document.getElementById('signInButton').addEventListener('click', signInClick);
document.getElementById('signUpButton').addEventListener('click', signUpClick);

function signInClick(event) {
	console.log("signin");

	var form = document.getElementById("signInForm");
	while(form.firstChild) {
		form.removeChild(form.firstChild);
	}

	document.getElementById('signInButton').style.display = 'none';
	document.getElementById('signUpButton').style.display = 'block';

	//create the input form elements
	var field1 = document.createElement("div");
	var usernameLabel = document.createTextNode("Username: ");
	var username = document.createElement('input');
	username.type = "text";
	username.name = "username";
	field1.appendChild(usernameLabel);
	field1.appendChild(username);
	field1.id = "field1";

	var field2 = document.createElement("div");
	var passwordLabel = document.createTextNode("Password: ");
	var password = document.createElement('input');
	password.type = "password";
	password.name = "password";
	field2.appendChild(passwordLabel);
	field2.appendChild(password);
	field2.id = "field2"

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Submit";
	submit.name = "signIn";
	//signInform.appendChild
	document.getElementById("signInForm").appendChild(field1);
	document.getElementById("signInForm").appendChild(field2);
	document.getElementById("signInForm").appendChild(submit);
	
}
function signUpClick(event) {
	console.log("signup");

	var form = document.getElementById("signInForm");
	while(form.firstChild) {
		form.removeChild(form.firstChild);
	}

	document.getElementById('signUpButton').style.display = 'none';
	document.getElementById('signInButton').style.display = 'block';

	//create the input form elements
	var field1 = document.createElement("div");
	var usernameLabel = document.createTextNode("Username: ");
	var username = document.createElement('input');
	username.type = "text";
	username.name = "username";
	field1.appendChild(usernameLabel);
	field1.appendChild(username);
	field1.id = "field1";

	
	var field2 = document.createElement("div");
	var passwordLabel = document.createTextNode("Password: ");
	var password = document.createElement('input');
	password.type = "password";
	password.name = "password";
	field2.appendChild(passwordLabel);
	field2.appendChild(password);
	field2.id = "field2"
	
	var field3 = document.createElement("div");
	var nameLabel = document.createTextNode("Name: ");
	var name = document.createElement('input');
	name.type = "text";
	name.name = "nname";
	field3.appendChild(nameLabel);
	field3.appendChild(name);
	field3.id = "field3";

	var field4 = document.createElement("div");
	var addressLabel = document.createTextNode("Address: ");
	var address = document.createElement('input');
	address.type = "text";
	address.name = "address";
	field4.appendChild(addressLabel);
	field4.appendChild(address);
	field4.id = "field4";

	var field5 = document.createElement("div");
	var zipCodeLabel = document.createTextNode("Zip Code: ");
	var zipCode = document.createElement('input');
	zipCode.type = "text";
	zipCode.name = "zipCode";
	field5.appendChild(zipCodeLabel);
	field5.appendChild(zipCode);
	field5.id = "field5";

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Submit";
	submit.name = "signUp";
	//signInform.appendChild
	document.getElementById("signInForm").appendChild(field1);
	document.getElementById("signInForm").appendChild(field2);
	document.getElementById("signInForm").appendChild(field3);
	document.getElementById("signInForm").appendChild(field4);
	document.getElementById("signInForm").appendChild(field5);
	document.getElementById("signInForm").appendChild(submit);

}
