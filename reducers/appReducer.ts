const initialState = {
    loading: false,
    userName: null,
}

export interface StateSchema {
    loading: boolean
    userName: string
}

enum ActionType {
    LOADING = 'LOADING',
    USER_NAME = 'USER_NAME',
}

export interface ActionSchema {
    type: ActionType
    payload: boolean | string
}

const reducer = (state: StateSchema, action: ActionSchema) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        case 'USER_NAME':
            return {
                ...state,
                userName: action.payload,
            }
        default:
            return { ...state }
    }
}

export { initialState, reducer }
