import { DailyWeather } from "./daily-weather";

export enum ForecastMode {
    Daily = "daily",
    Days5 = "days5"
}

export interface WeatherRespone {
    dt_txt: string;
    name: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    };
    weather: [
        {
            main: string;
            description: string;
        }
    ];
    wind: {
        speed: number;
    };
}

export interface RecentSearch {
    key: string;
    item: DailyWeather;
}

export enum DaysOfWeek {
    Sun = 0,
    Mon = 1,
    Tue = 2,
    Wed = 3,
    Thu = 4,
    Fri = 5,
    Sat = 6
}
