const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad93e444admshbb7257b24fc7facp13c95ejsn6fc2c41ee48c',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};


async function getCountryStats(){
  let response = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options);


  return response.json();
}

	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

getCountryStats()
.then( function(res){
	// console.log(typeof res.countries_stat[0].deaths);
  res.countries_stat.sort((a,b) => Number(a.deaths) - Number(b.deaths));



  let tableContent = "";
  // console.log(res);
  for(var i =0; i<=227; i++){
    // let contName = res.countries_stat[i].country_name;
    // console.log(contName);
    tableContent+=`<tr>
                      <td>${res.countries_stat[i].country_name}</td>
                      <td>${res.countries_stat[i].cases}</td>
                      <td>${res.countries_stat[i].deaths}</td>
                      <td>${res.countries_stat[i].total_recovered}</td>
                      <td>${res.countries_stat[i].new_deaths}</td>
                      <td>${res.countries_stat[i].new_cases}</td>
                      <td>${res.countries_stat[i].serious_critical}</td>
                      <td>${res.countries_stat[i].active_cases}</td>
                      <td>${res.countries_stat[i].total_cases_per_1m_population}</td>
                      <td>${res.countries_stat[i].deaths_per_1m_population}</td>
                      <td>${res.countries_stat[i].total_tests}</td>
                      <td>${res.countries_stat[i].tests_per_1m_population}</td>
                  </tr>`;
    }
    let row= document.getElementById("tBody");
    row.innerHTML=tableContent;

})
