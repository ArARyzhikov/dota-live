fetch('https://api.opendota.com/api/proMatches')
  .then(response => response.json())
  .then(matches => {
    const lastFive = matches.slice(0, 5);
    lastFive.forEach(match => {
      console.log(`${match.radiant_name} ${match.radiant_score} : ${match.dire_score} ${match.dire_name}`);
    });
  });