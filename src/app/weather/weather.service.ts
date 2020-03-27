import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { DailyWeather } from "./daily-weather";
import { WeatherRespone } from "./interfaces";

const toCelsius = (fTemp: number) => {
    return `${Math.round(fTemp - 273.15)}°C`;
};

const mapToDailyWeather = (data: WeatherRespone) => {
    const temperature = toCelsius(data.main.temp);
    const city = data.name;
    const weatherKind = data.weather[0].main;
    const description = data.weather[0].description;
    const realFeel = toCelsius(data.main.feels_like);
    const windSpeed = `${data.wind.speed} m/s`;
    const humidity = `${data.main.humidity} g/m3`;
    const pressure = `${data.main.pressure} mbars`;
    const date = new Date(data.dt_txt);

    return new DailyWeather(
        city,
        temperature,
        realFeel,
        weatherKind,
        description,
        windSpeed,
        humidity,
        pressure,
        date
    );
};

@Injectable({ providedIn: "root" })
export class WeatherService {
    constructor(private http: HttpClient) {}
    getDailyWeather(city: string) {
        return this.http
            .get(
                `${environment.apiUrl}/weather?q=${city}&appid=${environment.apiKey}`
            )
            .pipe(
                map((data: WeatherRespone) => {
                    return mapToDailyWeather(data);
                })
            );
    }

    getForecastWeather(city: string) {
        return this.http
            .get(
                `${environment.apiUrl}/forecast?q=${city}&appid=${environment.apiKey}`
            )
            .pipe(
                map((data: { list: WeatherRespone[] }) => {
                    return [
                        mapToDailyWeather(data.list[0]),
                        mapToDailyWeather(data.list[8]),
                        mapToDailyWeather(data.list[16]),
                        mapToDailyWeather(data.list[24]),
                        mapToDailyWeather(data.list[32])
                    ];
                })
            );
    }
}
