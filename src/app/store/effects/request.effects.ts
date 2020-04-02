import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

import {
    AddRequest,
    ERequestActions,
    AddRequestSuccess
} from "../actions/request.action";
import { IRequest } from "../state/request.state";
import { DailyWeather } from "../../weather/daily-weather";

@Injectable()
export class RequestEffects {
    constructor(private actions: Actions) {}

    @Effect()
    addRequest = this.actions.pipe(
        ofType<AddRequest>(ERequestActions.AddRequest),
        switchMap(data => {
            const currentDate = new Date();
            const daily = data.payload[0] as DailyWeather;
            const forecast = data.payload[1] as DailyWeather[];
            const city = daily.city;
            const payload: IRequest = {
                key: currentDate.getTime(),
                city,
                name: `${city} - ${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`,
                weather: {
                    daily,
                    forecast
                }
            };

            return of(new AddRequestSuccess(payload));
        })
    );
}
