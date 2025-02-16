# Weather App

This is a simple weather application that allows users to get current weather information and a 5-day forecast for any city. The app also includes a theme toggle feature to switch between light and dark modes.

## Features

- Get current weather information including temperature, condition, humidity, and wind speed.
- Display a 5-day weather forecast.
- Toggle between light and dark themes.
- Responsive design for mobile and desktop views.

## Screenshots

![Light Mode](weather.png)
![Dark Mode](cloud.jpg)

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Getting Started

### Prerequisites

- A modern web browser

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Heluhz/weather-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weather-app
    ```
3. Open `index.html` in your web browser.

### Usage

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button or press Enter to fetch the weather data.
3. Use the "Light Mode" button to toggle between light and dark themes.

## API Key

This app uses the OpenWeatherMap API. You need to replace the `apiKey` variable in `script.js` with your own API key.

```js
const apiKey = "your_api_key_here";
