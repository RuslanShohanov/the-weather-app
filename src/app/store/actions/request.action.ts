import { Action } from "@ngrx/store";

import { IRequest } from "../state/request.state";
import { DailyWeather } from "../../weather/daily-weather";

export enum ERequestActions {
    AddRequest = "[Request] Add Request",
    AddRequestSuccess = "[Request] Add Request Success",
    GetRequests = "[Request] Get Requests",
    RemoveRequest = "[Request] Remove"
}

export class AddRequest implements Action {
    public readonly type = ERequestActions.AddRequest;
    constructor(public payload: Array<DailyWeather | DailyWeather[]>) {}
}

export class AddRequestSuccess implements Action {
    public readonly type = ERequestActions.AddRequestSuccess;
    constructor(public payload: IRequest) {}
}

export class GetRequests implements Action {
    public readonly type = ERequestActions.GetRequests;
}

export class RemoveRequest implements Action {
    public readonly type = ERequestActions.RemoveRequest;
    constructor(public payload: number) {}
}

export type RequestActions =
    | AddRequest
    | AddRequestSuccess
    | GetRequests
    | RemoveRequest;
