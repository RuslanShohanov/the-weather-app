import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { WeatherComponent } from "./weather/weather.component";
import { CurrentComponent } from "./weather/current/current.component";
import { ForecastComponent } from "./weather/forecast/forecast.component";
import { RecentComponent } from "./recent/recent.component";
import { appReducers } from "./store/reducers/app.reducers";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { environment } from "../environments/environment";
import { RequestEffects } from "./store/effects/request.effects";

@NgModule({
    declarations: [
        AppComponent,
        CurrentComponent,
        ForecastComponent,
        HomeComponent,
        NavBarComponent,
        WeatherComponent,
        RecentComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EffectsModule.forRoot([RequestEffects]),
        StoreModule.forRoot(appReducers),
        StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
        environment.production ? [] : StoreDevtoolsModule.instrument()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
