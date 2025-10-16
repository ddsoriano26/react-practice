/*
Card for weather dashboard
Display city weather details
*/
import type { City } from "../utils/types"

function CityCard({ city }: { city: City | null }) {
    return (
        <>
            {city && (
                <div className="border-3 rounded-xl p-4 w-auto flex flex-col gap-5">
                    <div className="grid grid-cols-4 gap-4 p-4">
                        <div className="w-auto col-span-3 flex flex-col items-start">
                            <text className="text-6xl">
                                {city.location.name}
                            </text>
                            <text className="text-sm">
                                {city.location.country}
                            </text>
                        </div>
                        <div className="w-auto col-span-1 flex flex-col items-start">
                            <text className="text-6xl">
                                {city.current.temp_c}°C
                            </text>
                            <div className="flex gap-1.5">
                                <img src={`https:${city.current.condition.icon}`} alt={city.current.condition.text} className="w-5.5 h-5.5" />
                                <text className="text-sm">
                                    {city.current.condition.text}
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <div className="rounded-xl py-1 px-2 bg-red-100/50 text-sm">
                            {`Humidity: ${city.current.humidity}`}
                        </div>
                        <div className="rounded-xl py-1 px-2 bg-yellow-100/50 text-sm">
                            {`Wind: ${city.current.wind_kph} kph`}
                        </div>
                        <div className="rounded-xl py-1 px-2 bg-emerald-100/50 text-sm">
                            {`Feels Like: ${city.current.feelslike_c}`}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CityCard
