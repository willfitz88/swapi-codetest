(function(){

  const url = "https://swapi.co/api/starships/";

  var inputDistance = getDistance();
  var output = "";
  // API returns time parameter as a string
  // we need to convert these to hours.
  let periods = {
    "day": 24,
    "days": 24,
    "week": 168,
    "weeks": 168,
    "month": 730.001,
    "months": 730.001,
    "year": 8760,
    "years": 8760
  };

  // Method to convert time string parameter to hours
  function parseHours(timePeriodString){
    try {
        let stringArray = timePeriodString.split(" "),
            units = parseFloat(stringArray[0]),
            period = stringArray[1];

        if (!isNaN(units) && periods[period]) {
            return units * periods[period]
        } else {
            return 0
        }

    } catch (error) {
        return 0;
    }
  }

  // Test the parseHours function
  function test(expected, input){
    if(parseHours(input) !== expected)
    	console.log("ParseHours Problem with: "+input);
    else
      console.log("Test "+input+" passed");
  }
  //test(24,"1 day");
  //test(48,"2 days");


  function getDistance() {
    let input = prompt("Please enter distance");
    while(isNaN(input) || input === null, input === ""){
      input = prompt("Please enter a valid distance");
     }
    return input;
  }


  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      let starships = data.results;
      return starships.map(function(starship) {
        let hoursOfConsumables = parseHours(starship.consumables);
        let distanceCanTravel = starship.MGLT * hoursOfConsumables;

        //devide the user input(distance) by distanceCanTravel
        let numberOfStops = Math.floor(inputDistance / distanceCanTravel);
        console.log(starship.name+" : "+numberOfStops);

      })

    })
    .catch(function(error) {
      alert("Error!");
    });
    

})();
