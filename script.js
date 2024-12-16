const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
  });
  
  
  const skillsElements = document.querySelectorAll('.skills')
  skillsElements.forEach((el) => observer.observe(el));
  
  const skillstwoElements = document.querySelectorAll('.skillstwo')
  skillstwoElements.forEach((el) => observer.observe(el));
  
  const proboxElements = document.querySelectorAll('.post')
  proboxElements.forEach((el) => observer.observe(el));
  
  
  window.addEventListener('DOMContentLoaded', function () {
    // Get the weather data from the API
    fetchWeatherData();
  });
  
  function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    var apiKey = '07d9b66101cecd1297f13961d3cff5cf';
  
    // Replace 'YOUR_CITY' with the desired city for weather information
    var city = 'Athens';
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract relevant weather information from the response
      var weatherDescription = data.weather[0].description;
      var temperatureCelsius = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
      var temperatureFahrenheit = Math.round((temperatureCelsius * 9) / 5 + 32); // Convert from Celsius to Fahrenheit
  
      // Update the weather data in the HTML
      var weatherDataElement = document.getElementById('weather-data');
      weatherDataElement.innerHTML = `Temperature: ${temperatureFahrenheit}°F<br>Condition: ${weatherDescription}`;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      var weatherDataElement = document.getElementById('weather-data');
      weatherDataElement.innerHTML = 'Failed to fetch weather data';
    });
  }
  
  // Add an event listener to the resume button
  var resumeButton = document.getElementById('resume-button');
  resumeButton.addEventListener('click', function() {
    // Create an anchor element
    var link = document.createElement('a');
    link.href = 'path/to/resume.pdf'; // Replace with the actual path to your PDF file
    link.download = 'resume.pdf'; // Set the download attribute to specify the filename
  
    // Append the anchor element to the document body
    document.body.appendChild(link);
  
    // Trigger a click event on the anchor element
    link.click();
  
    // Remove the anchor element from the document body
    document.body.removeChild(link);
  });
  
  
  function replaceProbox(event) {
    const currentProbox = event.target;
  
    // Create a new replacement div with the desired content and animation
    const replacementProbox = document.createElement('div');
    replacementProbox.classList.add('probox_sec');
    replacementProbox.classList.add('transition-animation');
    // Add content to the replacement div
  
    // Replace the parent element's HTML content with the replacement div
    currentProbox.parentElement.innerHTML = replacementProbox.outerHTML;
  }
  
  // Attach click event listener to each 'probox_sec' div
  const probox_secElements = document.querySelectorAll('.probox_sec');
  probox_secElements.forEach((probox) => {
    probox.addEventListener('click', replaceProbox);
  });