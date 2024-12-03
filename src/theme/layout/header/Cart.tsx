import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash } from 'lucide-react';
import Image from 'next/image';
import Quantity from './Quantity';

const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant={'outline'}
                    className='py-1.5 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10 relative'
                >
                    <ShoppingCart />
                    {/* <span className='text-xs text-white bg-primary absolute -top-2 -left-2 rounded-full border size-6 flex items-center justify-center border-primary'>
                        1 // So luong san pham
                    </span> */}
                    <span className='pt-0.5'>$10.200.000</span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='font-medium text-base'>Giỏ hàng của tôi</SheetTitle>
                    <SheetDescription className='sr-only'></SheetDescription>
                    <div>
                        <div className='-my-4'>
                            <div className='border-b last:border-b-0 py-6 flex gap-4'>
                                <Image
                                    src={'/product.jpg'}
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    className='size-20 rounded-xl object-cover border'
                                />
                                <div className='text-sm flex-1 *:mb-1'>
                                    <div className='flex items-center justify-between'>
                                        <h4 className='line-clamp-1'>
                                            Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Fugiat, debitis sit. Iusto,
                                            voluptatem? Tenetur, soluta possimus ut
                                            cupiditate perferendis necessitatibus. Quod
                                            velit reprehenderit quaerat esse iure quasi
                                            ipsam suscipit in.
                                        </h4>
                                        <Button
                                            variant='ghost'
                                            className='text-red-500 p-1 hover:text-red-500'
                                        >
                                            <Trash />
                                        </Button>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-primary font-medium'>
                                            $12.000.000
                                        </p>
                                        <Quantity />
                                    </div>
                                    <p className='text-muted-foreground'>Màu trắng</p>
                                </div>
                            </div>
                            <div className='border-b last:border-b-0 py-6 flex gap-4'>
                                <Image
                                    src={'/product.jpg'}
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    className='size-20 rounded-xl object-cover border'
                                />
                                <div className='text-sm flex-1 *:mb-1'>
                                    <div className='flex items-center justify-between'>
                                        <h4 className='line-clamp-1'>
                                            Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Fugiat, debitis sit. Iusto,
                                            voluptatem? Tenetur, soluta possimus ut
                                            cupiditate perferendis necessitatibus. Quod
                                            velit reprehenderit quaerat esse iure quasi
                                            ipsam suscipit in.
                                        </h4>
                                        <Button
                                            variant='ghost'
                                            className='text-red-500 p-1 hover:text-red-500'
                                        >
                                            <Trash />
                                        </Button>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-primary font-medium'>
                                            $12.000.000
                                        </p>
                                        <Quantity />
                                    </div>
                                    <p className='text-muted-foreground'>Màu trắng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
