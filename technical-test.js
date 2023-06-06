// 1. ApaBole application
function apaBole(num) {
  const arrNum = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrNum.push('ApaBole');
    } else if (i % 3 === 0) {
      arrNum.push('Apa');
    } else if (i % 5 === 0) {
      arrNum.push('Bole');
    } else {
      arrNum.push(i);
    }
  }

  console.log(arrNum.join(', '));
}

apaBole(30);

/* ========================================================================================================================= */
console.log('-'.repeat(process.stdout.columns));
/* ========================================================================================================================= */

// 2. WEATHER FORECAST

fetch(
  'https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=b3e68058509635cbac61618735cd5833&units=metric'
)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Extract the weather forecast information
    const forecasts = data.list;
    let dateTracker = new Date().getDate();

    // Print the weather forecasts
    console.log('Weather forecast:');
    forecasts.forEach(forecast => {
      const date = new Date(forecast.dt * 1000);
      if (date.getDate() !== dateTracker) return;

      const temperature = forecast.main.temp;
      console.log(`${date.toDateString()}: ${temperature}°C`);

      dateTracker++;
    });
  })
  .catch(error => {
    console.log('An error occurred while fetching the weather forecast:', error);
  });
