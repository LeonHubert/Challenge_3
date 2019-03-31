var boredUrl = "https://www.boredapi.com/api/activity/?";
var cookingUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

var participants = 1;
	
var boredRequest = boredUrl + "participants=" + participants;

function getBoredAPIdata() {
	
	document.getElementById('cookingDiv').style.display = "none";
	
	fetch(boredRequest)

	.then(function(response) 
	{
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	.then(function(response) 
	{
		onBoredAPISucces(response);
	})
	
	.catch(function (error) 
	{
		console.error('Request failed', error);
	});
}

function getCookingAPIdata() {

	fetch(cookingUrl)

	.then(function(response) 
	{
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	.then(function(response) 
	{
		onCookingAPISucces(response);
	})
	
	.catch(function (error) 
	{
		console.error('Request failed', error);
	});
}

function onCookingAPISucces(response) 
{
	document.getElementById('cookingDiv').style.display = "block";
	
	document.getElementById('ingredientsLabel').innerHTML = "Ingredients: ";
	
	document.getElementById('recipeNameLabel').innerHTML = "Recipe name: " + response.meals[0].strMeal;
	if(response.meals[0].strMeasure1 != "" && response.meals[0].strMeasure1 != null) document.getElementById('ingredientsLabel').innerHTML += response.meals[0].strMeasure1 + " " + response.meals[0].strIngredient1;
	if(response.meals[0].strMeasure2 != "" && response.meals[0].strMeasure2 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure2 + " " + response.meals[0].strIngredient2;
	if(response.meals[0].strMeasure3 != "" && response.meals[0].strMeasure3 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure3 + " " + response.meals[0].strIngredient3;
	if(response.meals[0].strMeasure4 != "" && response.meals[0].strMeasure4 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure4 + " " + response.meals[0].strIngredient4;
	if(response.meals[0].strMeasure5 != "" && response.meals[0].strMeasure5 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure5 + " " + response.meals[0].strIngredient5;
	if(response.meals[0].strMeasure6 != "" && response.meals[0].strMeasure6 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure6 + " " + response.meals[0].strIngredient6;
	if(response.meals[0].strMeasure7 != "" && response.meals[0].strMeasure7 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure7 + " " + response.meals[0].strIngredient7;
	if(response.meals[0].strMeasure8 != "" && response.meals[0].strMeasure8 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure8 + " " + response.meals[0].strIngredient8;
	if(response.meals[0].strMeasure9 != "" && response.meals[0].strMeasure9 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure9 + " " + response.meals[0].strIngredient9;
	if(response.meals[0].strMeasure10 != "" && response.meals[0].strMeasure10 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure10 + " " + response.meals[0].strIngredient10;
	if(response.meals[0].strMeasure11 != "" && response.meals[0].strMeasure11 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure11 + " " + response.meals[0].strIngredient11;
	if(response.meals[0].strMeasure12 != "" && response.meals[0].strMeasure12 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure12 + " " + response.meals[0].strIngredient12;
	if(response.meals[0].strMeasure13 != "" && response.meals[0].strMeasure13 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure13 + " " + response.meals[0].strIngredient13;
	if(response.meals[0].strMeasure14 != "" && response.meals[0].strMeasure14 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure14 + " " + response.meals[0].strIngredient14;
	if(response.meals[0].strMeasure15 != "" && response.meals[0].strMeasure15 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure15 + " " + response.meals[0].strIngredient15;
	if(response.meals[0].strMeasure16 != "" && response.meals[0].strMeasure16 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure16 + " " + response.meals[0].strIngredient16;
	if(response.meals[0].strMeasure17 != "" && response.meals[0].strMeasure17 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure17 + " " + response.meals[0].strIngredient17;
	if(response.meals[0].strMeasure18 != "" && response.meals[0].strMeasure18 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure18 + " " + response.meals[0].strIngredient18;
	if(response.meals[0].strMeasure19 != "" && response.meals[0].strMeasure19 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure19 + " " + response.meals[0].strIngredient19;
	if(response.meals[0].strMeasure20 != "" && response.meals[0].strMeasure20 != null) document.getElementById('ingredientsLabel').innerHTML += ", " + response.meals[0].strMeasure20 + " " + response.meals[0].strIngredient20;
	
	document.getElementById('originLabel').innerHTML = "Recipe origin: " + response.meals[0].strArea;
	document.getElementById('categoryLabel').innerHTML = "Recipe category: " + response.meals[0].strCategory;
	document.getElementById('instructionLabel').innerHTML = "Instructions: " + response.meals[0].strInstructions;
	document.getElementById('recipeImage').src = response.meals[0].strMealThumb;
}

function onBoredAPISucces(response) 
{
	document.getElementById('activityLabel').innerHTML = response.activity;
	document.getElementById('typeLabel').innerHTML = "Activity type: " + response.type;
	document.getElementById('peopleRequired').innerHTML = "Participants: " + response.participants;
	document.getElementById('costLabel').innerHTML = "Cost indication: " + convertPrice(response.price);
	
	if(response.type == "cooking")
	{
		getCookingAPIdata();
	}
}

function updateActivity()
{
	participants = document.getElementById("participantsButton").value;
	
	if(participants <= 5 && participants > 0)
	{
		boredRequest = boredUrl + "participants=" + participants;
		getBoredAPIdata();
	}
	else
	{
		alert("Number of participants is anywhere from 1 to 5.");
	}
}

function convertPrice(price)
{
	var tempPrice = Math.round(price * 10.0);
	var costIndication;
	
	switch(tempPrice)
	{
		case 0:
		{
			costIndication = "Free";
			break;
		}
		case 1-10:
		{
			costIndication = "Very low";
			break;
		}
		case 11-20:
		{
			costIndication = "Low";
			break;
		}
		case 21-30:
		{
			costIndication = "Medium";
			break;
		}
		case 31-40:
		{
			costIndication = "High";
			break;
		}
		case 41-55:
		{
			costIndication = "Very high";
			break;
		}
		default:
		{
			costIndication = "Medium";
			break;
		}
	}
	return costIndication;
}

function updateUIError() 
{
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}