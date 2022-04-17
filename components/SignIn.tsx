import { Button, Divider, InputField, NoAccount } from '.'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignIn = () => {
    return (
        <>
            <div className='mb-12 text-4xl font-medium'>Sign in to Twitter</div>
            <Button type='sign-in' label='Sign in with Google' icon={FcGoogle} />
            <Button type='sign-in' label='Sign in with Apple' icon={FaApple} />
            <Divider label='or' />
            <InputField label='Phone, email or username' />
            <Button type='black' label='Next' />
            <Button type='white-black' label='Forgot your password?' />
            <NoAccount />
        </>
    )
}

export default SignIn
