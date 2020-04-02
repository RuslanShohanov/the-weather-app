import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";

import { IAppState } from "../state/app.state";
import { requestReducers } from "./request.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
    recent: requestReducers,
    router: routerReducer
};
