import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { WeatherService } from "./weather.service";
import { DailyWeather } from "./daily-weather";
import { ForecastMode } from "./interfaces";

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
        this.weatherService
            .getWeather(this.activateRoute.snapshot.params["request"])
            .subscribe(result => {
                this.currentWeather = result.daily;
                this.forecast = result.forecast;
            });
    }

    switchForecastMode(mode: string) {
        this.forecastMode = mode as ForecastMode;
    }

    isMode(mode: string) {
        return this.forecastMode === mode;
    }
}
