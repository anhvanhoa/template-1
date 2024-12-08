import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import CheckoutProvider from '@/providers/CheckoutProvider';
import CartProduct from '@/theme/cart/CartProduct';
import InforCheckout from '@/theme/cart/InforCheckout';
import InforCustomer from '@/theme/cart/InforCustomer';
import MethodTranport from '@/theme/cart/MethodTranport';
import Payment from '@/theme/cart/Payment';
import Voucher from '@/theme/cart/Voucher';
import { CartItemType, MethodTransport } from '@/types/cart';
import React from 'react';

const pros: CartItemType[] = [
    {
        id: 1,
        name: 'MacBook Air 13 inch với chip M2',
        priceSell: 24999000,
        price: 26999000,
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
        id: 3,
        name: 'IMac 24 inch với chip M1',
        priceSell: 14999000,
        price: 18999000,
        image: '/pro-1.png',
        quantity: 1,
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
    },
    {
        id: 4,
        name: 'IMac 24 inch với chip M4',
        priceSell: 34999000,
        price: 40999000,
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
    },
    {
        id: 2,
        name: 'IMac 24 inch với chip M2',
        priceSell: 36999000,
        price: 39999000,
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

const methodTranports: MethodTransport[] = [
    {
        id: '1',
        name: 'Giao hàng tiêu chuẩn',
        price: 0
    },
    {
        id: '2',
        name: 'Giao hàng nhanh',
        price: 20000
    },
    {
        id: '3',
        name: 'Giao hàng siêu tốc',
        price: 50000
    }
];

const Page = () => {
    return (
        <CheckoutProvider cartItems={pros}>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='grid grid-cols-5 gap-x-16 pt-8'>
                    <div className='col-span-3 space-y-6'>
                        <CartProduct />
                    </div>
                    <div className='col-span-2'>
                        <Card className='shadow-none sticky top-8'>
                            <CardHeader>
                                <CardTitle>Thông tin đơn hàng</CardTitle>
                                <CardDescription className='sr-only'></CardDescription>
                            </CardHeader>
                            <CardContent className='!pt-0'>
                                <Voucher />
                                <InforCustomer />
                                <MethodTranport methodTranports={methodTranports} />
                                <Payment />
                                <InforCheckout />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </CheckoutProvider>
    );
};

export default Page;
