import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { IAppState } from "../store/state/app.state";
import { selectRequestList } from "../store/selectors/request.selector";
import { GetRequests, RemoveRequest } from "../store/actions/request.action";

@Component({
    selector: "recent",
    templateUrl: "recent.component.html",
    styleUrls: ["recent.component.styl"]
})
export class RecentComponent implements OnInit {
    recentRequests = this.store.pipe(select(selectRequestList));

    constructor(private store: Store<IAppState>) {}

    ngOnInit() {
        this.store.dispatch(new GetRequests());
    }

    removeByKey(key: number) {
        this.store.dispatch(new RemoveRequest(key));
    }
}
