document.getElementById('editAccount').addEventListener('click', editAccount);
document.getElementById('editPreferences').addEventListener('click', editPreferences);

function editPreferences(event){
	document.getElementById("editPreferences").style.display = 'none';

	var price = document.createElement("input");
	price.type = "text";
	price.name = "maxPrice";
	price.className = "form-control";
	if(document.getElementById("price").value){
		price.value=document.getElementById("price").value;
	}else{
		price.placeholder="Maximum Price";
	}
	var rating = document.createElement("select");
	rating.className="form-control"
	rating.name="minRating";
	rating.value="Minimum Rating";
	
	var opt=document.createElement("option");
	var opt0= document.createElement("option");
	var opt1= document.createElement("option");
	var opt2= document.createElement("option");
	var opt3= document.createElement("option");
	var opt4= document.createElement("option");
	var opt5= document.createElement("option");

	opt.innerHTML = "Select a Minimum Rating"
	opt.value = 0;
	opt.selected = "selected";
	opt0.innerHTML = 0;
	opt1.innerHTML = 1;
	opt2.innerHTML = 2;
	opt3.innerHTML = 3;
	opt4.innerHTML = 4;
	opt5.innerHTML = 5;	

	rating.appendChild(opt);
	rating.appendChild(opt0);
	rating.appendChild(opt1);
	rating.appendChild(opt2);
	rating.appendChild(opt3);
	rating.appendChild(opt4);
	rating.appendChild(opt5);

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Save Changes";
	submit.name = "editPreferences";
	submit.className = "btn btn-success";

	document.getElementById("editform2").appendChild(price);
	document.getElementById("editform2").appendChild(rating);
	document.getElementById("editform2").appendChild(submit);


	var info = document.getElementById("preferences");
	while(info.firstChild) {
		info.removeChild(info.firstChild);
	}
}

function editAccount(event){
	
	document.getElementById("editAccount").style.display = 'none';
	document.getElementById("editPassword").style.display = 'none';


	var firstname = document.createElement("input");
	firstname.type = "text";
	firstname.name = "firstname";
	firstname.className = "form-control";
	firstname.required= true;
	firstname.value=document.getElementById("fname").value;

	var lastname = document.createElement("input");
	lastname.type = "text";
	lastname.name = "lastname";
	lastname.required = true;
	lastname.className = "form-control";
		console.log(document.getElementById("lname").value);
	lastname.value=document.getElementById("lname").value;

	var address = document.createElement("input");
	address.type = "text";
	address.name = "address";
	address.className = "form-control";
		console.log(document.getElementById("address").value);

	if(document.getElementById("address").value){
		address.value=document.getElementById("address").value;
	}else{
		address.placeholder="Address";
	}

	var zip = document.createElement("input");
	zip.type = "text";
	zip.name = "zip";
	zip.className = "form-control";
	if(document.getElementById("zip").value){
		zip.value=document.getElementById("zip").value;
	}else{
		zip.placeholder="Zip Code";
	}

	var payment = document.createElement("select");
	payment.className="form-control"
	payment.name="payment";
	if(document.getElementById("payment").value){
		payment.value=document.getElementById("payment").value;
	}
	var opt1= document.createElement("option");
	var opt2= document.createElement("option");
	opt1.innerHTML = "Credit/Debit";
	opt2.innerHTML = "PayPal";
	payment.appendChild(opt1);
	payment.appendChild(opt2);

	var submit = document.createElement('input');
	submit.type = "submit";
	submit.value = "Save Changes";
	submit.name = "editAccount";
	submit.className = "btn btn-success";

	document.getElementById("editform1").appendChild(firstname);
	document.getElementById("editform1").appendChild(lastname);
	document.getElementById("editform1").appendChild(address);
	document.getElementById("editform1").appendChild(zip);
	document.getElementById("editform1").appendChild(payment);
	document.getElementById("editform1").appendChild(submit);


	var info = document.getElementById("userinfo");
	while(info.firstChild) {
		info.removeChild(info.firstChild);
	}
	
}
