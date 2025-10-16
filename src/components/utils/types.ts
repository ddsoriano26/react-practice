export type DayForecast = {
    date: string;
    date_epoch: number;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
}

export type City = {
    location: {
      name: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
      humidity: number;
      wind_kph: number;
      feelslike_c: number;
    };
    forecast: {
        forecastday: Array<DayForecast>;
    }
  };
  