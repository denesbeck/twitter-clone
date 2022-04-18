import { ChangeEvent, useState, forwardRef, useImperativeHandle } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

interface InputFieldProps {
    label: string
    autoFocus?: boolean
    disabled?: boolean
    isPassword?: boolean
}

// eslint-disable-next-line react/display-name
const InputField = forwardRef(({ label, autoFocus = false, disabled = false, isPassword = false }: InputFieldProps, ref) => {
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isExposed, setIsExposed] = useState(!isPassword)

    useImperativeHandle(ref, () => ({
        getInputValue: () => inputValue,
        setInputValue: (value: string) => setInputValue(value),
    }))

    const exposeSwitch = (
        <button
            onClick={() => setIsExposed((currentState) => !currentState)}
            className='absolute bottom-2 right-2 z-20 h-7 w-7 rounded-full border-2 border-transparent px-0.5 hover:bg-gray-100 focus:outline-none focus-visible:border-gray-400'
        >
            {isExposed ? <FaRegEyeSlash className='h-full w-full' /> : <FaRegEye className='h-full w-full' />}
        </button>
    )

    return (
        <div className='relative grid h-14 w-full'>
            <input
                autoFocus={autoFocus}
                disabled={disabled}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={inputValue}
                type={isExposed ? 'text' : 'password'}
                className={`relative z-10 h-full w-full rounded border px-2 pt-4 font-normal focus:border-blue-400 focus:outline-none ${
                    disabled ? 'border-transparent bg-gray-100 text-gray-400' : 'border-slate-400 bg-transparent'
                }`}
                onChange={(e: ChangeEvent) => setInputValue((e.target as HTMLInputElement).value)}
            />
            <label
                className={`absolute top-1/4 left-2 block w-full transition-all duration-200 ease-in-out ${
                    (isFocused || inputValue.length) && '-translate-y-2.5 text-xs'
                } ${isFocused && !disabled ? 'text-blue-400' : 'text-gray-400'} ${disabled && 'z-20 text-gray-400'}`}
            >
                {label}
            </label>
            {isPassword && exposeSwitch}
        </div>
    )
})

export default InputField
