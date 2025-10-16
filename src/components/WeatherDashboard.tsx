/*
Weather Dashboard
Components:
- Search input city name
- Current weather display (default is local or Manila for now)
    - City name and country
    - Temperature
    - Weather condition + icon
    - Humidity, wind speed, "feels" like temperature
- Forecast display (3-5 days)
    - Each day shows: date, min/max temperature, weather icon/condition
Other things to implement:
- Error handling, e.g. city not found or nextwork errors
- Loading spinner thing
Future stuff:
- "Real-time" updating of city as user types, or autocomplete or suggestions
*/
import { useEffect, useState } from "react"
import CityCard from "./weather_dashboard/CityCard"
import type { City } from "./utils/types"

function WeatherDashboard() {
    const [city, setCity] = useState('')
    const key = 'f33b267dfb8e421f902181058251510'
    const [cityResults, setCityResults] = useState<City | null>(null)

    const clickSearchBtn = async () => {
        if (city.length > 0) {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`
            )
            response.json()
                .then((data: City) => {
                    setCityResults(data)
                })
                .catch((err) => {
                    console.error(err)
                    alert(`An error occured: ${err}`)
                })
        } else {
            alert("Please input a city.")
        }
    }

    useEffect(() => {
        // Use "Manila" as the default city
        async function getDefaultCity() {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?q=Manila&key=${key}`
            )
            response.json()
                .then((data: City) => {
                    setCityResults(data)
                })
                .catch((err) => {
                    console.error(err)
                    alert("An error occurred with Weather API. Please try refreshing the page.")
                    setCityResults(null)
                })
        }
        getDefaultCity()
    }, [])

    return (
        <>
            <div className="w-full flex flex-col gap-5 items-center">
                <h1>Weather Dashboard</h1>
                <div className="w-full flex gap-3">
                    <input
                        id="city-input"
                        placeholder="Search for a city..."
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="flex-1"
                    />
                    <button onClick={clickSearchBtn}>Search</button>
                </div>
                <CityCard city={cityResults} />
            </div>
        </>
    )
}

export default WeatherDashboard
