import { NextPage } from 'next'
import { FaTwitter } from 'react-icons/fa'
import { CloseButton, SignIn } from 'components'

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
                <SignIn />
            </div>
        </div>
    )
}

export default Login
