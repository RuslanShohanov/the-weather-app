import { Component, OnInit, Input } from "@angular/core";
import { DailyWeather } from "../daily-weather";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

@Component({
    selector: "forecast",
    templateUrl: "forecast.component.html",
    styleUrls: ["../weather.component.styl", "forecast.component.styl"]
})
export class ForecastComponent {
    @Input() forecast: DailyWeather[];

    getDay(day: number) {
        return days[day];
    }
}
