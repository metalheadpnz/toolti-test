import {createSlice} from "@reduxjs/toolkit";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
}

const initialState: InitialStateType = {
    status: 'idle',
    error: null
}

export const appSlice = createSlice({
    initialState,
    name: 'app',
    reducers: {
        setAppStatusAC(state, action) {
            console.log(action)
            state.status = action.payload
        },
        setAppErrorAC(state, action) {
            state.error = action.payload.error
        }
    }
})
export const appReducer = appSlice.reducer
export const {setAppStatusAC, setAppErrorAC} = appSlice.actions

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>


//
// const initialState: InitialStateType = {
//     status: 'idle',
//     error: null
// }
//
// export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'APP/SET-STATUS':
//             return {...state, status: action.status}
//         case 'APP/SET-ERROR':
//             return {...state, error: action.error}
//         default:
//             return {...state}
//     }
// }
//
// export type RequestStatusType =  'idle' | 'loading' | 'succeeded' | 'failed'
// export type InitialStateType = {
//     // происходит ли сейчас взаимодействие с сервером
//     status: RequestStatusType
//     // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
//     error: string | null
// }
//
// export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
// export const setAppStatusAC = (status:  RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
//
// export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
// export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
//
// type ActionsType =
//     | SetAppErrorActionType
//     | SetAppStatusActionType