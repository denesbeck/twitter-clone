export interface PostSchema {
    userId: number
    id: number
    title: string
    body: string
}

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
    value: boolean | string
}

const reducer = (state: StateSchema, action: ActionSchema) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.value,
            }
        case 'USER_NAME':
            return {
                ...state,
                userName: action.value,
            }
        default:
            return { ...state }
    }
}

export { initialState, reducer }
