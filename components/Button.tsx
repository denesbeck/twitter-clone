import { ElementType } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    type: 'sign-in' | 'primary' | 'secondary'
    label: string
    icon?: IconType
}

const Button = ({ type, label, icon }: ButtonProps) => {
    const renderButton = () => {
        switch (type) {
            case 'sign-in':
            case 'secondary':
                return 'border border-gray-300 bg-white hover:bg-gray-100'
            case 'primary':
                return 'bg-black text-white hover:ring-blue-300 hover:bg-gray-900'
        }
    }

    const TheIcon = icon as ElementType

    return (
        <button
            className={`${renderButton()} flex items-center justify-center space-x-2 rounded-full py-2 font-medium ring-2 ring-transparent focus:outline-none focus:ring-blue-400`}
        >
            {icon && <TheIcon className='h-6 w-6' />}
            <div>{label}</div>
        </button>
    )
}

export default Button
