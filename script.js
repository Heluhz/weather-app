
        const apiKey = "f2d6a47c62381b8f435045c47e4eb8b1";
        const body = document.body;
        const themeToggleBtn = document.getElementById('themeToggleBtn');

        document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
        themeToggleBtn.addEventListener('click', toggleTheme);
        document.getElementById('city').addEventListener('keydown', function(event) {
    
            if (event.key === 'Enter') {
                getWeather();
            }
        });
        
        function setTheme(mode) {
            if (mode === 'light') {
                body.style.backgroundImage = "url('sun4.jpg')";
                themeToggleBtn.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'light');
            } else {
                body.style.backgroundImage = "url('cloud.jpg')";
                themeToggleBtn.textContent = 'Light Mode';
                localStorage.setItem('theme', 'dark');
            }
        }

        function toggleTheme() {
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                setTheme('dark'); // Default to Dark Mode
            }
        }

        loadTheme();

        async function getWeather() {
            const city = document.getElementById('city').value;
        
            if (city) {
                try {
                    // Current weather
                    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
                    const weatherData = await weatherResponse.json();
                    if (weatherData.cod === 200) {
                        document.getElementById('temperature').textContent = `Temperature: ${weatherData.main.temp}°C`;
                        document.getElementById('condition').textContent = `Condition: ${weatherData.weather[0].description}`;
                        document.getElementById('humidity').textContent = `Humidity: ${weatherData.main.humidity}%`;
                        document.getElementById('wind').textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
                        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

                        // 5-day Forecast
                        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
                        const forecastData = await forecastResponse.json();
                        const forecastList = forecastData.list;
                        document.getElementById('forecast').innerHTML = '';

                        document.getElementById('head').innerHTML = '<h3 style="color: white;">5-Day Forecast</h3>';

                        let forecastHTML = '';
                        for (let i = 0; i < forecastList.length; i += 8) {
                          const day = forecastList[i];
                         const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
                         weekday: 'long'
                               });
                         const icon = day.weather[0].icon;
                         const temp = day.main.temp;
                         const description = day.weather[0].description;
                         forecastHTML += `
                        <div class="forecast-day">
                        <h4>${date}</h4> 
                        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
                         <p>${temp}°C</p>
                         <p>${description}</p>
                        </div>
                         `;
                    }

                 // Then, append the forecast cards
                   document.getElementById('forecast').innerHTML += forecastHTML;

                    } else {
                        alert('City not found. Please try again.');
                    }
                } catch (error) {
                    alert('Failed to fetch weather data. Please try again later.');
                }
            } else {
                alert('Please enter a city name.');
            }
        }
    