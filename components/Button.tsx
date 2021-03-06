import { ElementType } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    type: 'sign-in' | 'black' | 'white-black' | 'blue' | 'white-blue'
    label: string
    icon?: IconType
    handler?: () => void
    disabled?: boolean
}

const Button = ({ type, label, icon, handler, disabled = false }: ButtonProps) => {
    const renderButton = () => {
        switch (type) {
            case 'sign-in':
            case 'white-black':
                return 'border border-gray-300 bg-white hover:bg-gray-100'
            case 'black':
                return 'bg-black text-white hover:ring-blue-400 hover:bg-gray-900'
            case 'blue':
                return 'bg-blue-400 border border-blue-400 text-white hover:bg-blue-600'
            case 'white-blue':
                return 'border border-gray-300 bg-white hover:bg-gray-100 text-blue-400'
        }
    }

    const TheIcon = icon as ElementType

    return (
        <button
            disabled={disabled}
            className={`${renderButton()} flex w-full items-center justify-center space-x-2 rounded-full px-4 py-2 font-medium ring-2 ring-transparent focus:outline-none focus:ring-blue-400`}
            onClick={handler}
        >
            {icon && <TheIcon className='h-6 w-6' />}
            <div>{label}</div>
        </button>
    )
}

export default Button
