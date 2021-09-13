import {IUserState, UserAction, UserEnum} from "../../Utils/interfaces/userInterfaces";

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action:UserAction) => {
    switch (action.type) {
        case UserEnum.FETCH_USERS:
            return {isLoading: true, error: null, users: []}
        case UserEnum.FETCH_USERS_SUCCESS:
            return {isLoading: false, error: null, users: action.payload}
        case UserEnum.FETCH_USERS_ERROR:
            return {isLoading: false, error: action.payload, users: []}
        default:
            return state
    }
}