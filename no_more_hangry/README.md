#No More Hangry

##Overview

Nowadays, people are plagued with the question: "what do I want to eat?". Sites like Seamless and GrubHub give us too many choices and too many steps. " No More Hangry has the solution. Introducing the new food app that makes decisions easier. 

If we are asked if we want Mexican food, chances are, we aren't so sure. But, if we are asked if we want a steak burrito for 5 dollars then decision is much easier. We don't know what we want to eat until we see the exact item and the exact price. Agreed? 

No More Hangry eliminates the top down search structure: food catergory to a restaurant to a food item in the restaurant. 
By showing the food item first, No More Hangry focuses on the more important factor of what entree looks good and its price. 

Create an account, save your address, payment details, preferences once and No More Hangry will do the rest. For example, an image of a delicious entree under $10 with at least 3 stars will be displayed to you. Dont like it? Refresh the page to see another entree. If you are satisfied with the current entree, all you have to do is hit a button and the food is on its way to your doorstep.


##Data Model
We will be using Mongoose. 
We will have to store Users, Food Items, and Orders.
	Users schema will have their information and preferences
	FoodItems schema will have image, type, name, price, restaurant, and rating
	Orders schema will have the User and FoodItem they selected 
```javascript
var User = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	name: {type: String, required: true},
	zipCode: {type: Number, required: true},
	address: {type: String, required: true},
	paymentType: {type: String, required: true},
	maxPrice: {type: Number, required: false},
	minRating: {type: Number, required: false},
	foodItems: [FoodItem]
});
var FoodItem = new mongoose.Schema({
	image: {type: String, required: false},
	name: {type: String, required: true},
	price: {type: Number, required: true},
	rating: {type: Number, required: true},
	numRatings: {type: Number, required: true},
	type: {type: String, required: true},
	restaurant: {type: String, required: true},
	numViews: {type: Number, required: true},
	numOrders: {type: Number, required: true}
});
var Order = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
	foodItem: {type: mongoose.Schema.Types.ObjectId, ref:'FoodItem'}
});

```

##Wireframes
![wire frames](img/wireframes.png)