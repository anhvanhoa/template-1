'use client';
import React, { useMemo } from 'react';
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
import FormatPrice from '@/theme/common/FormatPrice';

const cart: {
    count?: number;
    total: number;
} = {
    total: 12000000
};

const pros = [
    {
        id: 1,
        name: 'MacBook Air 13 inch với chip M2',
        price: 24999000,
        image: '/pro-1.png',
        quantity: 2,
        quantityMax: 10,
        variant: [
            {
                id: 1,
                name: 'Màu',
                value: 'trắng'
            },
            {
                id: 2,
                name: 'RAM',
                value: '8GB'
            }
        ]
    },
    {
        id: 2,
        name: 'IMac 24 inch với chip M2',
        price: 34999000,
        image: '/pro-2.png',
        quantity: 3,
        quantityMax: 22,
        variant: [
            {
                id: 1,
                name: 'Màu',
                value: 'đen'
            },
            {
                id: 2,
                name: 'RAM',
                value: '16GB'
            }
        ]
    }
];

const Cart = () => {
    const [products, setProducts] = React.useState(pros);
    cart.total = useMemo(() => {
        return products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    }, [products]);
    const handleRemove = (id: number) => () => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant={'outline'}
                    className='py-1.5 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10 relative'
                >
                    <ShoppingCart />
                    {cart?.count && (
                        <span className='text-xs text-white bg-primary absolute -top-2 -left-2 rounded-full border size-6 flex items-center justify-center border-primary'>
                            {cart.count}
                        </span>
                    )}
                    {cart.total && (
                        <span className='pt-0.5'>
                            <FormatPrice price={cart.total} />
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='font-medium text-base'>
                        Giỏ hàng của tôi
                    </SheetTitle>
                    <SheetDescription className='sr-only'></SheetDescription>
                    <div>
                        <div className='-my-4'>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className='border-b last:border-b-0 py-6 flex gap-4'
                                >
                                    <div className='border rounded-xl overflow-hidden p-1'>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={100}
                                            height={100}
                                            className='size-20 object-cover '
                                        />
                                    </div>
                                    <div className='text-sm flex-1 *:mb-1'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='line-clamp-1'>
                                                {product.name}
                                            </h4>
                                            <Button
                                                onClick={handleRemove(product.id)}
                                                variant='ghost'
                                                className='text-red-500 p-1 hover:text-red-500'
                                            >
                                                <Trash />
                                            </Button>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-primary font-medium'>
                                                <FormatPrice price={product.price} />
                                            </p>
                                            <Quantity
                                                max={product.quantityMax}
                                                quantity={product.quantity}
                                            />
                                        </div>
                                        <p className='text-muted-foreground'>
                                            {product.variant
                                                .map(
                                                    (variant) =>
                                                        `${variant.name}: ${variant.value}`
                                                )
                                                .join(', ')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
