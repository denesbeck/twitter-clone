import type { NextPage } from 'next'
import Image from 'next/image'
import twitter from 'public/twitter.png'
import { FaTwitter, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button, Divider } from 'components'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const router = useRouter()
    return (
        <div className='grid h-screen xl:grid-cols-12'>
            <div className='flex flex-col py-10 px-10 xl:col-span-5 xl:col-start-8 xl:py-32'>
                <div className='col-span-2 space-y-14'>
                    <FaTwitter className='h-10 w-10 text-blue-400' />
                    <div className='mb-14 text-5xl font-bold xl:text-7xl'>Happening now</div>

                    <div className='w-10/12 xl:w-6/12'>
                        <div className='mb-6 text-2xl font-bold xl:mb-14 xl:text-4xl'>Join Twitter today.</div>
                        <div className='space-y-4'>
                            <Button type='sign-in' label='Sign in with Google' icon={FcGoogle} />
                            <Button type='sign-in' label='Sign in with Apple' icon={FaApple} />
                        </div>
                        <div className='my-8'>
                            <Divider label='or' />
                        </div>
                        <Button type='blue' label='Sign up with phone or email' />
                        <div className='mt-14 mb-4 text-lg font-medium'>Already have an account?</div>
                        <Button type='white' label='Sign in' handler={() => router.push('/login')} />
                    </div>
                </div>
            </div>
            <div className='relative grid h-full xl:col-span-7 xl:col-start-1 xl:row-start-1'>
                <Image src={twitter} layout='responsive' alt='twitter-bg' />
                <FaTwitter className='absolute h-2/6 w-2/6 self-center justify-self-center text-white' />
            </div>
        </div>
    )
}

export default Home
