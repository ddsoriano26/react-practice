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
  }

  export type PhotoResource = {
    width: number;
    height: number;
    photographer: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    alt: string;
  }

export interface Task {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}