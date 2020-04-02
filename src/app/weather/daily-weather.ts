import { WeatherRespone } from "./interfaces";

export class DailyWeather {
    city?: string;
    temperature: string;
    weatherKind: string;
    realFeel: string;
    description: string;
    windSpeed: string;
    humidity: string;
    pressure: string;
    visibleness: string;
    date: Date;

    constructor(data: WeatherRespone) {
        this.city = data.name;
        this.temperature = this.toCelsius(data.main.temp);
        this.realFeel = this.toCelsius(data.main.feels_like);
        this.weatherKind = data.weather[0].main;
        this.description = data.weather[0].description;
        this.windSpeed = `${data.wind.speed} m/s`;
        this.humidity = `${data.main.humidity} g/m3`;
        this.pressure = `${data.main.pressure} mbars`;
        this.date = new Date(data.dt_txt);
    }

    toCelsius = (fTemp: number) => {
        return `${Math.round(fTemp - 273.15)}°C`;
    };
}
