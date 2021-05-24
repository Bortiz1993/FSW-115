const lukeSkywalker = `
{
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"created": "2021-05-18T23:22:48.628Z",
			"edited": "2021-05-18T23:22:48.628Z",
			"name": "Luke Skywalker",
			"homeworld": "https://www.swapi.tech/api/planets/1",
			"url": "https://www.swapi.tech/api/people/1"
	
}`;
const mainCharacter = JSON.parse(lukeSkywalker)
var elementByID = document.getElementById("Luke-Skywalker").textContent = `${mainCharacter.name} is ${mainCharacter.hair_color}`;
console.log(mainCharacter);