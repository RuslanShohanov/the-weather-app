import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { WeatherService } from "./weather.service";
import { DailyWeather } from "./daily-weather";
import { ForecastMode } from "./interfaces";
import { environment } from "src/environments/environment";

@Component({
    selector: "weather",
    templateUrl: "weather.component.html",
    styleUrls: ["weather.component.styl"]
})
export class WeatherComponent implements OnInit {
    forecastMode: ForecastMode = ForecastMode.Daily;
    currentWeather: DailyWeather;
    forecast: DailyWeather[];

    constructor(
        private activateRoute: ActivatedRoute,
        private weatherService: WeatherService
    ) {}

    ngOnInit() {
        const requestCity = this.activateRoute.snapshot.params["request"];

        this.weatherService.getDailyWeather(requestCity).subscribe(weather => {
            this.currentWeather = weather;
            localStorage.setItem(
                `${environment.localStorageKey}_${currentDate.getTime()}`,
                JSON.stringify(weather)
            );
        });

        this.weatherService
            .getForecastWeather(requestCity)
            .subscribe(forecast => {
                this.forecast = forecast;
            });

        const currentDate = new Date();
    }

    switchForecastMode(mode: string) {
        this.forecastMode = mode as ForecastMode;
    }

    isMode(mode: string) {
        return this.forecastMode === mode;
    }
}
