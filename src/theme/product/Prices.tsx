'use client';
import React from 'react';
import FormatPrice from '../common/FormatPrice';
import { useProduct } from '@/hooks/useProduct';

const Prices = () => {
    const [pro] = useProduct();
    return (
        <>
            <div className='text-3xl font-medium text-primary'>
                <FormatPrice price={pro.priceSale} />
            </div>
            <div className='flex items-center gap-6'>
                <span className='text-lg line-through text-muted-foreground'>
                    <FormatPrice price={pro.price} />
                </span>
                {pro.typeDiscount && (
                    <span className='text-primary font-medium bg-primary/10 px-2 rounded-md py-1'>
                        <span className='pr-1'>-</span>
                        {pro.typeDiscount === 'percent' ? (
                            pro.discount + '%'
                        ) : (
                            <FormatPrice price={pro.discount} />
                        )}
                    </span>
                )}
            </div>
        </>
    );
};

export default Prices;
