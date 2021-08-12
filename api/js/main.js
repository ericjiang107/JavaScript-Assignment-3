// Get data of the race with fetch:
function getData() {
    let year = document.querySelector('#year').value
    let round = document.querySelector('#round').value
    fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    .then(response => response.json()) // turns file into json
    .then(something => {
        console.log(something) // names it so we can do things to the file --> gives JSON file back

        // filter for specifics: Position, Name, Nationality, Sponsor and Points --> for loop to take care of this instead of inputting one at a time
        for(let i = 0; i < 7; i++) {
            let p = (something.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position)
            let first = (something.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName)
            let last = (something.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName)
            // Adding first and last name together
            let joined = (`${first} ${last}`)
            let nation = (something.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality)
            let money = (something.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId)
            let point = (something.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points)

            // StandingLists is a list 
            // Inputting variables into the table using document selector/innerHTML
            document.querySelector(`#position-${i+1}`).innerHTML = p
            document.querySelector(`#Name${i+1}`).innerHTML = joined
            document.querySelector(`#Nationality${i+1}`).innerHTML = nation
            document.querySelector(`#Sponsor${i+1}`).innerHTML = money
            document.querySelector(`#Points${i+1}`).innerHTML = point
            // innerHTML --> it changes the html content of a particular element with a specific id
        }
    })
    // return response.something
};

// Get access to the page
// Test: Be able to grab all the data first
// filter through the data for season and round --> should show all the data in that year


