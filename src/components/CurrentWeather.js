import React from "react";

function CurrentWeather({ historicalData }) {
    const latestData = historicalData.reduce((max, data) => (data.id > max.id ? data : max));

    return (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {latestData.temperature}°C</p>
            <p>Humidity: {latestData.humidity}%</p>
        </div>
    );
}

export default CurrentWeather;