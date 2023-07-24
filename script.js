const searchInput = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	str = str.toLowerCase();
	let results = [];
	results = fruit.filter(fruitName => fruitName.toLowerCase().includes(str));
	return results;

}

//for handling user input in the search bar; it gets triggered whenever a user types somthing
//We retrieve users input, filter it to match our pre-existing array by calling the search function
function searchHandler(e) {
	const inputVal= e.target.value;
	if(inputVal === ''){
		suggestions.innerText ='';
		// suggestions.style.display = 'none';
	}
	else {
		const results = search(inputVal);
		console.log (results);
		showSuggestions(results);
		// suggestions.style.fontWeight = 'bold';

		useSuggestion(results);

	}
}
//creating text content for each suggestion
function showSuggestions(results, inputVal) {
	//Clearing previous suggestions before getting new ones, otherwise we might duplicates
	suggestions.innerText = '';
	const limitedResults = results.slice(0,10);
	const content = limitedResults.forEach((result) => {
		const listItem = document.createElement('li');
		listItem.innerText = result;
		suggestions.appendChild(listItem);
	 });

}

function useSuggestion(e) {
	const selectedSuggesion = e.target.innerText;
	searchInput.value = selectedSuggesion;
	suggestions.innerText = '';

}

  

searchInput.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

