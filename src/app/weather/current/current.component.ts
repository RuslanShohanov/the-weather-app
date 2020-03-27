import { Component, Input, OnInit } from "@angular/core";
import { DailyWeather } from "../daily-weather";

@Component({
    selector: "current",
    templateUrl: "current.component.html",
    styleUrls: ["current.component.styl", "../weather.component.styl"]
})
export class CurrentComponent {
    @Input() weather: DailyWeather;

    getCurrentTime() {
        const currentDate = new Date();
        return `${currentDate.getHours()}:${
            currentDate.getMinutes() > 9
                ? currentDate.getMinutes()
                : `0${currentDate.getMinutes()}`
        }`;
    }
}
