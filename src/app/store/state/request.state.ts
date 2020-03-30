import { DailyWeather } from "../../weather/daily-weather";

export interface IRequest {
    key: number;
    city: string;
    name: string;
    weather: {
        daily: DailyWeather;
        forecast: DailyWeather[];
    };
}

export interface IRequestState {
    requests: IRequest[];
}

export const initialRequestState: IRequestState = { requests: [] };
