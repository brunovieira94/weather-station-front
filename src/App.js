import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import CurrentWeather from "./components/CurrentWeather";
import { WeatherData } from "./Data";

function App() {

    const [tempData, setTempData] = useState({
        labels: WeatherData.map((data) => data.timestamps),
        datasets: [
            {
                label: "Temperature",
                data: WeatherData.map((data) => data.temperature),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    const [humidityData, setHumidityData] = useState({
        labels: WeatherData.map((data) => data.timestamps),
        datasets: [
            {
                label: "Humidity",
                data: WeatherData.map((data) => data.humidity),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div className="App">
            <div className="App">
                <CurrentWeather historicalData={WeatherData} />
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={tempData} />
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={humidityData} />
            </div>
        </div>
    );
}

export default App;
