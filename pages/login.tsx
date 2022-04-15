import { NextPage } from 'next'
import { FaTwitter, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button, CloseButton, Divider, InputField, SignUp } from 'components'

const Login: NextPage = () => {
    return (
        <div className='grid h-screen w-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl'>
            <div className='relative grid h-[40rem] w-screen max-w-[35rem] items-center justify-center rounded-xl bg-white p-4 shadow'>
                <div className='absolute top-6 left-6'>
                    <CloseButton pathName='/' />
                </div>
                <div className='flex w-full justify-center'>
                    <FaTwitter className='h-8 w-8 text-blue-400' />
                </div>
                <div className='mb-12 text-4xl font-medium'>Sign in to Twitter</div>
                <Button type='sign-in' label='Sign in with Google' icon={FcGoogle} />
                <Button type='sign-in' label='Sign in with Apple' icon={FaApple} />
                <Divider label='or' />
                <InputField label='Phone, email or username' />
                <Button type='black' label='Next' />
                <Button type='white-black' label='Forgot your password?' />
                <SignUp />
            </div>
        </div>
    )
}

export default Login
