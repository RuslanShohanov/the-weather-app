import { RouterReducerState } from "@ngrx/router-store";

import { IRequestState, initialRequestState } from "./request.state";

export interface IAppState {
    recent: IRequestState;
    router?: RouterReducerState;
}

export const initialAppState: IAppState = {
    recent: initialRequestState,
}

export const getInitialState = () => {
    return initialAppState;
}