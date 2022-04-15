import { AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router'

interface CloseButtonProps {
    pathName: string
}

const CloseButton = ({ pathName }: CloseButtonProps) => {
    const router = useRouter()

    return (
        <button
            className='rounded-full p-2 text-gray-600 ring ring-transparent hover:bg-gray-100 focus:outline-none focus:ring-blue-400'
            onClick={() => router.push(pathName)}
        >
            <AiOutlineClose className='h-5 w-5' />
        </button>
    )
}

export default CloseButton
