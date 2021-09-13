export const enum UserEnum {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
export interface IUserState {
    users: any[]
    isLoading: boolean
    error: null | string
}
export interface IFetchUserAction {
    type: UserEnum.FETCH_USERS
}
export interface IFetchUserSuccessAction {
    type: UserEnum.FETCH_USERS_SUCCESS
    payload: any[]
}
export interface IFetchUserErrorAction {
    type: UserEnum.FETCH_USERS_ERROR
    payload: string
}
export interface IUserAction {
    type: string
    payload?: any
}


export type UserAction =
    IFetchUserAction |
    IFetchUserErrorAction |
    IFetchUserSuccessAction
