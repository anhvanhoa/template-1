import { Sidebar } from '@/theme/layout/account';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='max-w-screen-xl mx-auto py-4'>
            <div className='flex my-4 mx-4 py-8'>
                <Sidebar />
                <div className='flex-1 pl-4 pr-10'>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
