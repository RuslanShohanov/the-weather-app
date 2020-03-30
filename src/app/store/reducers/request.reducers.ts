import { initialRequestState } from "../state/request.state";
import { RequestActions, ERequestActions } from "../actions/request.action";

export const requestReducers = (
    state = initialRequestState,
    action: RequestActions
) => {
    switch (action.type) {
        case ERequestActions.AddRequestSuccess: {
            return {
                ...state,
                requests: [...state.requests, action.payload]
            };
        }

        case ERequestActions.RemoveRequest: {
            return {
                ...state,
                requests: state.requests.filter(
                    request => request.key !== action.payload
                )
            };
        }
        default: {
            return state;
        }
    }
};
