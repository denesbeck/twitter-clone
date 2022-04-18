import { Button, InputField, NoAccount } from '.'
import { useRef, useEffect } from 'react'

interface SignInStep2Props {
    userName: string
}

const SignInStep2 = ({ userName }: SignInStep2Props) => {
    const userNameRef = useRef(null)

    useEffect(() => {
        userNameRef.current.setInputValue(userName)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='flex h-full w-full flex-col px-16'>
            <div className='mb-12 text-4xl font-medium'>Enter your password</div>
            <div className='space-y-4'>
                <InputField ref={userNameRef} label='Username' disabled />
                <InputField label='Password' autoFocus isPassword />
            </div>
            <div className='mb-4 mt-auto w-full'>
                <Button type='black' label='Log in' />
            </div>
            <NoAccount />
        </div>
    )
}

export default SignInStep2
