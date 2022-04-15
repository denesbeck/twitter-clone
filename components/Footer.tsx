import Link from 'next/link'

const footerItems = [
    'About',
    'Help Center',
    'Terms of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Accessibility',
    'Ads info',
    'Blog',
    'Status',
    'Careers',
    'Brand Resources',
    'Advertising',
    'Marketing',
    'Twitter for Business',
    'Developers',
    'Directory',
    'Settings',
]

const renderFooterItems = footerItems.map((footerItem: string, index: number) => (
    <Link key={index} href='/'>
        <a className='cursor-pointer text-gray-500 hover:underline'> {footerItem}</a>
    </Link>
))
const Footer = () => {
    return (
        <div className='col-span-full flex h-max flex-wrap items-center justify-center gap-y-2 space-x-5 py-4 text-xs'>
            {renderFooterItems}
            <div className='text-gray-500'>© Created by Denes Beck</div>
        </div>
    )
}

export default Footer
