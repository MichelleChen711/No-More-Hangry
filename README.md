#No More Hangry ＼＼\\٩(๑`^´๑)۶//／／

##Overview

Nowadays, people are plagued with the question: "what do I want to eat?" Sites like Seamless and GrubHub give us too many choices and too many steps. " No More Hangry has the solution. Introducing the new food app that makes decisions easier! 

If we are asked if we want Mexican food, chances are, we aren't so sure. But, if we are asked if we want a steak burrito for 5 dollars then decision is much easier. We don't know what we want to eat until we see the exact item and the exact price. Agreed? 

No More Hangry eliminates the top down search structure of selecting a food catergory, then a restaurant of that food catergory, then a food item in that restaurant. 
By showing the food item first, No More Hangry focuses on the more deciding factors: what entree looks good and its price. 

Create an account, save your address, payment details, preferences once and No More Hangry will do the rest. For example, an image of a delicious entree under $10 with at least 3 stars will be displayed to you. Dont like it? Refresh the page to see another entree. If you are satisfied with the current entree, all you have to do is click a button and the food is on its way to your doorstep.


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
![wire frames](no_more_hangry/documentation/wireframes.png)

##Use Cases
<p>Name: <t>No More Hangry</t></p>

<p>Summary: <t>Food searches start with the entree. They are randomnized and filtered to the user's preferences. </t></p>

<p>Rationale: <t>Sometimes when ordering from online food delivery websites, users have a hard time deciding what to eat or really just want to get something reasonably good quickly. To prevent the possibility of them becoming "hangry" due to taking too much time deciding on what to get, or having to go through too many steps for a quick meal, No More Hangry's search that starts with showing the user random entrees and their prices will make desicions easier and save time with a simple click of a button.</t></p>

<p>Users: <t>Anyone who eats</t></p>

<p>Preconditions: <t>The user has registered, set their preferences, and logged in</t></p>

<p>Basic Course of Events: <t><ul>
	<li>The user is immediately presented with an image of a random food item with its price, rating, and restaurant. If the user is satisfied with the item, they press the order button</li>
	<li>The order button links to the order summary page showing the user's address where the food will be delivered, the food item and its price, the payment method, a map showing restaurant location, and a confirm button</Li>
	<li>When the confirm button is pressed, the software will "deliver the food"(prob won't be implemented in this ver.)</li>
</ul></t>
Alternative Paths: <t><ul>
	<li>At the first page, if the user doesn't like the current food choice, they can either press the dice button or the refresh button</li>
	<li>Upon pressing the dice button, the software will show another completely random entree with the same details</li>
	<li>Upon pressing the refresh button, the software will show another food item within the previous food's catergory. For example if the first food item was under "Japanese" the following food item will be a random food item that is also listed under the "Japanese" food type catergory</li>
</ul></t></p>

##Which modules/ concept will you research?
<ul>
	<li>User Authentication (3)</li>
	<li>Address field modules (1)</li>
	<li>Google maps plugin (2)</li>
	<li>if I use facebook login, how to implement share on facebook (2)</li>
	<li>Some type of rating module (1)</li>
	<li>How to add images into and display them from mongodb</li>
	<li>navigation bar/sidebar</li>
	<li>maybe some sass (1)</li>
</ul>
