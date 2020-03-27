import { Component, OnInit } from "@angular/core";

import { environment } from "src/environments/environment";
import { RecentSearch } from "../weather/interfaces";

@Component({
    selector: "recent",
    templateUrl: "recent.component.html",
    styleUrls: ["recent.component.styl"]
})
export class RecentComponent implements OnInit {
    recentRequests: RecentSearch[] = [];

    ngOnInit() {
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            if (key.startsWith(environment.localStorageKey)) {
                if (this.recentRequests.length < 10) {
                    this.recentRequests.push({
                        key,
                        item: JSON.parse(localStorage.getItem(key))
                    });
                }
            }
        });
    }

    removeByKey(removeKey: string) {
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            if (
                key.startsWith(environment.localStorageKey) &&
                key.endsWith(removeKey)
            ) {
                const requestToRemove = this.recentRequests.find(
                    request => request.key === key
                );
                const removeAt = this.recentRequests.indexOf(requestToRemove);
                localStorage.removeItem(key);
                this.recentRequests.splice(removeAt, 1);
            }
        });
    }
}
