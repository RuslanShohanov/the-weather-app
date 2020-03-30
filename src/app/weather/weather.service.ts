import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { combineLatest } from "rxjs";
import { Store } from "@ngrx/store";

import { environment } from "src/environments/environment";
import { DailyWeather } from "./daily-weather";
import { WeatherRespone } from "./interfaces";
import { IAppState } from "../store/state/app.state";
import { AddRequest } from "../store/actions/request.action";

@Injectable({ providedIn: "root" })
export class WeatherService {
    constructor(private http: HttpClient, private store: Store<IAppState>) {}

    getDailyWeather(city: string) {
        return this.http
            .get(
                `${environment.apiUrl}/weather?q=${city}&appid=${environment.apiKey}`
            )
            .pipe(
                map((data: WeatherRespone) => {
                    return new DailyWeather(data);
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
                        new DailyWeather(data.list[0]),
                        new DailyWeather(data.list[8]),
                        new DailyWeather(data.list[16]),
                        new DailyWeather(data.list[24]),
                        new DailyWeather(data.list[32])
                    ];
                })
            );
    }

    getWeather(city: string) {
        const dailyWeather = this.getDailyWeather(city);
        const forecastWeahter = this.getForecastWeather(city);

        return combineLatest([dailyWeather, forecastWeahter]).pipe(
            map(data => {
                this.store.dispatch(new AddRequest(data));

                return {
                    daily: data[0],
                    forecast: data[1]
                };
            })
        );
    }
}
