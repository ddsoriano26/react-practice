/*
Tile component for weather dashboard
Show weather forecast for the specified day
*/
import { formatDate } from "../utils/common"
import type { DayForecast } from "../utils/types"

const ForecastTile = ({ forecast }: { forecast: DayForecast }) => {
    return (
        <>
            {forecast && (
                <div className="rounded-lg p-3 w-full flex justify-between gap-12 grid grid-cols-3 bg-blue-100/50">
                    <div className="flex justify-start">
                        <text>{formatDate(forecast.date)}</text>
                    </div>
                    <text>{`${forecast.day.maxtemp_c}/${forecast.day.mintemp_c} °C`}</text>
                    <div className="flex gap-1 justify-end">
                        <text>{forecast.day.condition.text}</text>
                        <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} className="w-6 h-6" />
                    </div>
                </div>
            )}
        </>
    )
}

export default ForecastTile
