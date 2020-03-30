import { Component, Input } from "@angular/core";

import { DailyWeather } from "../daily-weather";
import { DaysOfWeek } from '../interfaces';

@Component({
    selector: "forecast",
    templateUrl: "forecast.component.html",
    styleUrls: ["../weather.component.styl", "forecast.component.styl"]
})
export class ForecastComponent {
    @Input() forecast: DailyWeather[];

    getDay(day: number) {
        return DaysOfWeek[day];
    }
}
