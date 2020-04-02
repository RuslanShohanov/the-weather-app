import { Component, Input } from "@angular/core";

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
        const minutes = currentDate.getMinutes();

        return `${currentDate.getHours()}:${
            minutes > 9 ? minutes : `0${minutes}`
        }`;
    }
}
