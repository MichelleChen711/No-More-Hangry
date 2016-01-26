document.addEventListener("DOMContentLoaded", function(){
	var randomize = document.getElementById('randomButton');
	randomize.addEventListener("click", function(evt){
		evt.preventDefault();
		//var url = "http://localhost:3000/api/foods";
		//var url = "http://localhost:10111/api/foods";
		var url = "http://i6.cims.nyu.edu:10110/api/foods";
		var req = new XMLHttpRequest();
		req.open('GET', url, true);
		console.log('clicked');
		req.addEventListener("load", function() {
			console.log(req.responseText);
			JSON.parse(req.responseText, function(food,entry){
				console.log(food);
				console.log(entry);
				var fImg_input = document.getElementById("fImg-input");
				var fName_input = document.getElementById("fName-input");
				var fPrice_input = document.getElementById("fPrice-input");
				var fType_input = document.getElementById("fType-input");

				var fImg = document.getElementById("fImg");
				if(food == "imgPath"){
					fImg.src = entry;
					fImg_input.value = entry
				}
				var fName = document.getElementById("fName");
				if(food == "name"){
					fName.innerHTML = entry;
					fName_input.value = entry;
				}
				var fPrice = document.getElementById("fPrice");
				if(food == "price"){
					fPrice.innerHTML = "$" + entry;
					fPrice_input.value = entry;
				}
				var fType = document.getElementById("fType");
				if(food == "type"){
					fType.innerHTML = entry;
					fType_input.value = entry
				}
				var fRate = document.getElementById("fRate");
				if(food == "rating"){
					fRate.innerHTML = "Rated " + entry +"/5";
				}
				if(food == "numRatings"){
					fRate.innerHTML = fRate.innerHTML + " (" + entry + " ratings)"
				}
				var fView = document.getElementById("fView");
				if(food == "numViews"){
					fView.innerHTML= "Viewed " + entry + " times"; 
				}
				var fOrder = document.getElementById("fOrder");
				if(food == "numOrders"){
					fOrder.innerHTML = "Ordered " + entry + " times";
				}
				var fRestaurant = document.getElementById("fRestaurant");
				if(food == "restaurant"){
					fRestaurant.innerHTML = entry;
				}
			});
		});
		req.send();
	});
});
