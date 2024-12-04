import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Cart from './Cart';
import Search from './Search';

const HeaderR = () => {
    return (
        <div className='flex justify-end gap-2 items-center'>
            <Search />
            <Cart />
            <Link href={'/dang-nhap'}>
                <Button className='border border-primary rounded-full py-1.5 font-medium'>
                    Đăng nhập
                </Button>
            </Link>
        </div>
    );
};

export default HeaderR;
