function getJson(){
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;

    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {

        
        for(let i = 0; i < 7; i++){
            
            // get Position
            let table_spot = document.querySelectorAll('.table-row')[i];
            let position = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position;
            let display_position = document.createElement('th');
            display_position.setAttribute('scope','row');
            display_position.innerHTML = position;
            table_spot.append(display_position);

            // get Name
            let given_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
            let family_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
            let display_name = document.createElement('td');
            display_name.innerHTML = given_name + ' ' + family_name;
            table_spot.append(display_name);

            // get Nationality
            let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
            let display_nat = document.createElement('td');
            display_nat.innerHTML = nationality;
            table_spot.append(display_nat);

            // get Sponsor
            let sponsor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let display_spons = document.createElement('td');
            display_spons.innerHTML = sponsor;
            table_spot.append(display_spons);

            // get Points
            let points = parseInt(rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points);
            let display_points = document.createElement('td');
            display_points.innerHTML = points;
            table_spot.append(display_points);
        }
    })

    console.log(season,round);
}