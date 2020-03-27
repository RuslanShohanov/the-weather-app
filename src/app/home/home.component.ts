import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.styl"]
})
export class HomeComponent {
    request: string = "Minsk";

    constructor(private router: Router) {}

    navigateToForecast() {
        this.router.navigate(["weather", this.request]);
    }
}
