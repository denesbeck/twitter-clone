import { Button, Divider, InputField, NoAccount } from '.'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import AppContext from 'contexts/appContext'
import { useContext, useRef } from 'react'

const SignInStep1 = () => {
    const appContext = useContext(AppContext)
    const ref = useRef(null)

    const handleNext = () => {
        if (ref.current.getInputValue().length) {
            appContext.dispatch({ type: 'USER_NAME', payload: ref.current.getInputValue() })
        } else {
            alert('Please enter your username!')
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='mb-8 text-4xl font-medium'>Sign in to Twitter</div>
            <div className='mb-5 space-y-5'>
                <Button type='sign-in' label='Sign in with Google' icon={FcGoogle} />
                <Button type='sign-in' label='Sign in with Apple' icon={FaApple} />
            </div>
            <Divider label='or' />
            <div className='my-5'>
                <InputField ref={ref} label='Phone, email or username' />
            </div>
            <div className='mb-12 space-y-5'>
                <Button type='black' label='Next' handler={() => handleNext()} />
                <Button type='white-black' label='Forgot your password?' />
            </div>
            <NoAccount />
        </div>
    )
}

export default SignInStep1
