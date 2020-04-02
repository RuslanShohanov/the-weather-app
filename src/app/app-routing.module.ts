import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { RecentComponent } from "./recent/recent.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "recent", component: RecentComponent },
    { path: "weather/:request", component: WeatherComponent },
    { path: "**", redirectTo: "/" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
