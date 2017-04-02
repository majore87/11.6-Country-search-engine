var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');  //list of countries

// Function is on the button
$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val(); //User prompt assignement to variable countryName
	if(!countryName.length) countryName = 'Poland'; //if field is empty, Polnad will be default
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
}

function showCountriesList(resp) { //parameter resp is an JSON object sended by method .ajax(), we can use any name
	countriesList.empty();  //empty is for clean old search history
	resp.forEach(function(item) { //forEach will iterate on every element from array resp
		$('<li>').text(item.name).appendTo(countriesList); //"name" is from server
	});
}