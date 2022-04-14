import { ChangeEvent, useState } from 'react'

interface InputFieldProps {
    label: string
}

const InputField = ({ label }: InputFieldProps) => {
    const [inputValue, setInputValue] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className='relative h-14 w-full'>
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={inputValue}
                type='text'
                className='relative z-20 h-full w-full rounded border border-slate-400 bg-transparent px-2 pt-4 font-normal hover:border-blue-400 focus:border-blue-400 focus:outline-none'
                onChange={(e: ChangeEvent) => setInputValue((e.target as HTMLInputElement).value)}
            />
            <label
                className={`absolute top-1/4 left-2 transition-all duration-200 ease-in-out ${
                    isFocused || inputValue.length ? '-translate-y-3 -translate-x-6 scale-75 text-blue-400' : 'text-gray-400'
                }`}
            >
                {label}
            </label>
        </div>
    )
}

export default InputField
