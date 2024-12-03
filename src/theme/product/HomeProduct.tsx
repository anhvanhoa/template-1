import React from 'react';
import Product from './Product';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const HomeProduct = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-6 mt-8'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold uppercase'>Sản phẩm gợi ý</h3>
                <Button variant={'secondary'} className='p-2'>
                    <ArrowUpRight />
                </Button>
            </div>
            <div className='grid grid-cols-5 gap-x-4 gap-y-12 py-4'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default HomeProduct;
