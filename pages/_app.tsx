import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initialState, reducer } from 'reducers/appReducer'
import AppContext from 'contexts/appContext'
import { useReducer } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}

export default MyApp
