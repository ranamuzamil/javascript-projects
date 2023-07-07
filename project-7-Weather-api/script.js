// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '2ca58470e76a4590a65182330230707';

// Replace 'CITY_NAME' with the desired location or provide latitude and longitude
const location = 'lahore';

// Fetch weather data from the API
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
  .then(response => response.json())
  .then(data => {
    // Extract relevant weather information from the response
    const location = data.location.name;
    const temperature = data.current.temp_c;
    const conditions = data.current.condition.text;

    // Update the HTML elements with the weather data
    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('conditions').textContent = conditions;
  })
  .catch(error => {
    // Handle errors
    console.log('Error fetching weather data:', error);
    document.getElementById('location').textContent = 'Error fetching weather';
  });
