import { NextPage } from 'next'
import Head from 'next/head'
import { FaTwitter } from 'react-icons/fa'
import { CloseButton, SignInStep1, SignInStep2 } from 'components'
import AppContext from 'contexts/appContext'
import { useContext, useEffect } from 'react'

const Login: NextPage = () => {
    const appContext = useContext(AppContext)

    useEffect(() => {
        appContext.dispatch({ type: 'USER_NAME', payload: null })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='grid h-screen w-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl'>
            <Head>
                <title>Sing up for Twitter / Twitter</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='shortcut icon' href='twitter-logo.svg' type='image/x-icon' />
            </Head>
            <div className='relative flex h-[40rem] w-screen max-w-[35rem] flex-col items-center rounded-xl bg-white p-4 shadow'>
                <div className='absolute top-2 left-2'>
                    <CloseButton pathName='/' />
                </div>
                <div className='mb-10 flex w-full justify-center'>
                    <FaTwitter className='h-8 w-8 text-blue-400' />
                </div>
                {!appContext.state.userName ? <SignInStep1 /> : <SignInStep2 userName={appContext.state.userName} />}
            </div>
        </div>
    )
}

export default Login
