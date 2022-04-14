interface DividerProps {
    label: string
}

const Divider = ({ label }: DividerProps) => {
    return (
        <div className='my-2 flex h-0 justify-center border-t border-gray-300'>
            <div className='relative -top-3.5 h-max bg-white px-2'>{label}</div>
        </div>
    )
}

export default Divider
