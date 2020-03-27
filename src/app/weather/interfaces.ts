import { DailyWeather } from './daily-weather';

export enum ForecastMode {
    Daily = "daily",
    Days5 = "days5"
}

export interface GeneralInfo {
    city: string;
    temperature: string;
    kind: string;
    description: string;
}

export interface AdditionalInfo {
    windSpeed: string;
    humidity: string;
    pressure: string;
    realFeel: string;
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
