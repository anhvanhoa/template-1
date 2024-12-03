import { Button } from '@/components/ui/button';
import { ShoppingBag, StarIcon } from 'lucide-react';
import React from 'react';

const Product = () => {
    return (
        <div className='bg-gray-100 rounded-xl overflow-hidden'>
            <div
                className='aspect-square bg-cover bg-top'
                style={{
                    backgroundImage: 'url(/product-2.jpg)'
                }}
            ></div>
            <div className='px-3 pb-4 pt-5'>
                <h3 className='font-medium line-clamp-1 text-sm'>
                    Áo thun nam Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Omnis minus at quis ipsa. Corporis, doloribus deserunt maxime hic
                    repellat tenetur beatae veritatis repudiandae recusandae, consectetur,
                    praesentium quam eligendi at vero.
                </h3>
                <div className='py-3 space-y-3'>
                    <p className='text-sm space-x-2'>
                        <span className='text-xs text-red-500 border rounded-full border-red-500 px-1 py-0.5'>
                            -$5.000.000
                        </span>
                        <span className='line-through text-gray-400'>$15.000.000</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='font-medium text-primary'>$12.000.000</span>
                        <span className='flex items-center space-x-1'>
                            <span className='text-sm'>4.5</span>
                            <StarIcon className='size-4 fill-orange-500 stroke-orange-500' />
                        </span>
                    </p>
                </div>
                <div className='flex gap-2'>
                    <Button className='rounded-full hover:bg-primary/80 text-xs w-full'>Mua ngay</Button>
                    <Button
                        className='rounded-full px-2.5 border-primary hover:text-primary text-primary bg-primary/5'
                        variant={'outline'}
                        size={'icon'}
                    >
                        <ShoppingBag />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Product;
