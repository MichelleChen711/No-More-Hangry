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

	var div1 = document.createElement('div');
	div1.className = "checkbox-inline";
	div1.width = 110;
	var p1 = document.createElement('input');
	p1.className = "checkbox-icon"
	p1.type = "checkbox";
	p1.name = "American";
	if(document.getElementById("Americanpref")){
		p1.checked = true;
	}
	var icon1 = document.createElement('img');
	icon1.src = "../images/American.png";
	icon1.width = 80;
	icon1.height = 80;
	div1.appendChild(p1);
	div1.appendChild(icon1);

	var div2 = document.createElement('div');
	div2.className = "checkbox-inline";
	var p2 = document.createElement('input');
	p2.className = "checkbox-icon"
	p2.type = "checkbox";
	p2.name = "Chinese";
	if(document.getElementById("Chinesepref")){
		p2.checked = true;
	}
	var icon2 = document.createElement('img');
	icon2.src = "../images/Chinese.png";
	icon2.width = 80;
	icon2.height = 80;
	div2.appendChild(p2);
	div2.appendChild(icon2);

	var div3 = document.createElement('div');
	div3.className = "checkbox-inline";
	var p3 = document.createElement('input');
	p3.className = "checkbox-icon"
	p3.type = "checkbox";
	p3.name = "Indian";
	if(document.getElementById("Indianpref")){
		p3.checked = true;
	}
	var icon3 = document.createElement('img');
	icon3.src = "../images/Indian.png";
	icon3.width = 80;
	icon3.height = 80;
	div3.appendChild(p3);
	div3.appendChild(icon3);

	var div4 = document.createElement('div');
	div4.className = "checkbox-inline";
	var p4 = document.createElement('input');
	p4.className = "checkbox-icon"
	p4.type = "checkbox";
	p4.name = "Italian";
	if(document.getElementById("Italianpref")){
		p4.checked = true;
	}
	var icon4 = document.createElement('img');
	icon4.src = "../images/Italian.png";
	icon4.width = 80;
	icon4.height = 80;
	div4.appendChild(p4);
	div4.appendChild(icon4);

	var div5 = document.createElement('div');
	div5.className = "checkbox-inline";
	var p5 = document.createElement('input');
	p5.className = "checkbox-icon"
	p5.type = "checkbox";
	p5.name = "Japanese";
	if(document.getElementById("Japanesepref")){
		p5.checked = true;
	}
	var icon5 = document.createElement('img');
	icon5.src = "../images/Japanese.png";
	icon5.width = 80;
	icon5.height = 80;
	div5.appendChild(p5);
	div5.appendChild(icon5);

	var div6 = document.createElement('div');
	div6.className = "checkbox-inline";
	var p6 = document.createElement('input');
	p6.className = "checkbox-icon"
	p6.type = "checkbox";
	p6.name = "Korean";
	if(document.getElementById("Koreanpref")){
		p6.checked = true;
	}
	var icon6 = document.createElement('img');
	icon6.src = "../images/Korean.png";
	icon6.width = 80;
	icon6.height = 80;
	div6.appendChild(p6);
	div6.appendChild(icon6);

	var div7 = document.createElement('div');
	div7.className = "checkbox-inline";
	var p7 = document.createElement('input');
	p7.className = "checkbox-icon"
	p7.type = "checkbox";
	p7.name = "LatinAmerican";
	if(document.getElementById("LatinAmericanpref")){
		p7.checked = true;
	}
	var icon7 = document.createElement('img');
	icon7.src = "../images/LatinAmerican.png";
	icon7.width = 80;
	icon7.height = 80;
	div7.appendChild(p7);
	div7.appendChild(icon7);

	var div8 = document.createElement('div');
	div8.className = "checkbox-inline";
	var p8 = document.createElement('input');
	p8.className = "checkbox-icon"
	p8.type = "checkbox";
	p8.name = "MiddleEastern";
	if(document.getElementById("MiddleEasternpref")){
		p8.checked = true;
	}
	var icon8 = document.createElement('img');
	icon8.src = "../images/MiddleEastern.png";
	icon8.width = 80;
	icon8.height = 80;
	div8.appendChild(p8);
	div8.appendChild(icon8);

	var div9 = document.createElement('div');
	div9.className = "checkbox-inline";
	var p9 = document.createElement('input');
	p9.className = "checkbox-icon"
	p9.type = "checkbox";
	p9.name = "Thai";
	if(document.getElementById("Thaipref")){
		p9.checked = true;
	}
	var icon9 = document.createElement('img');
	icon9.src = "../images/Thai.png";
	icon9.width = 80;
	icon9.height = 80;
	div9.appendChild(p9);
	div9.appendChild(icon9);

	document.getElementById("editform2").appendChild(price);
	document.getElementById("editform2").appendChild(rating);
	document.getElementById("editform2").appendChild(div1);
	document.getElementById("editform2").appendChild(div2);
	document.getElementById("editform2").appendChild(div3);
	document.getElementById("editform2").appendChild(div4);
	document.getElementById("editform2").appendChild(div5);
	document.getElementById("editform2").appendChild(div6);
	document.getElementById("editform2").appendChild(div7);
	document.getElementById("editform2").appendChild(div8);
	document.getElementById("editform2").appendChild(div9);

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
