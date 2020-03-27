export enum WeatherKind {
    None = "none",
    Clean = "clean",
    Windy = "windy"
}

export class DailyWeather {
    city: string;
    temperature: string;
    weatherKind: string;
    realFeel: string;
    description: string;
    windSpeed: string;
    humidity: string;
    pressure: string;
    visibleness: string;
    date: Date;

    constructor(
        city: string,
        temperature: string,
        realFeel: string,
        weatherKind: string,
        description: string,
        windSpeed: string,
        humidity: string,
        pressure: string,
        date: Date,
    ) {
        this.city = city;
        this.temperature = temperature;
        this.realFeel = realFeel;
        this.weatherKind = weatherKind;
        this.description = description;
        this.windSpeed = windSpeed;
        this.humidity = humidity;
        this.pressure = pressure;
        this.date = date;
    }
}
