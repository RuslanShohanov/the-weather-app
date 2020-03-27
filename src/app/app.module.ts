import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { WeatherComponent } from "./weather/weather.component";
import { CurrentComponent } from "./weather/current/current.component";
import { ForecastComponent } from "./weather/forecast/forecast.component";
import { RecentComponent } from "./recent/recent.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "recent", component: RecentComponent },
    { path: "weather/:request", component: WeatherComponent },
    { path: "**", redirectTo: "/" }
];

@NgModule({
    declarations: [
        AppComponent,
        CurrentComponent,
        ForecastComponent,
        HomeComponent,
        NavBarComponent,
        WeatherComponent,
        RecentComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
