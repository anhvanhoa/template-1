import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import HeaderR from './HeaderR';
import { cn } from '@/lib/utils';

const Header = () => {
    return (
        <header className='border-b'>
            <div
                className={cn(
                    'max-w-screen-xl mx-auto py-3 grid grid-cols-2 items-center justify-between px-4'
                )}
            >
                <div className='flex items-center gap-14'>
                    <Logo />
                    <Nav />
                </div>
                <HeaderR />
            </div>
        </header>
    );
};

export default Header;
