import Link from 'next/link';
import React from 'react';

const navs = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];

const Nav = () => {
    return (
        <nav>
            <ul className='flex items-center justify-center gap-6'>
                {navs.map((nav) => (
                    <li
                        key={nav.href}
                        className='hover:underline hover:text-primary transition-all underline-offset-2'
                    >
                        <Link href={nav.href}>{nav.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
