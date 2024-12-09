import React from 'react';
import { CartItemType } from '@/types/cart';
import { OrderType } from '@/types/order';
import { OrderItem } from '@/theme/order';
const cartItems: CartItemType[] = [
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

const orders: OrderType[] = [
    {
        id: 'ASJJWQEAS532',
        total: 24999000,
        address: {
            city: 'Hà Nội',
            country: 'Việt Nam',
            detail: 'Số 1 - Đại Cồ Việt',
            name: 'Nguyễn Văn A',
            phone: '0123456789',
            zip: '100000'
        },
        cartItems: [cartItems[0]],
        codeCoupon: [],
        countProduct: 2,
        createdAt: '2021-09-21T10:00:00',
        discount: 2000000,
        discountCoupon: 0,
        methodPayment: 'cod',
        methodTransport: '1',
        provisional: 26999000,
        status: 'đang giao',
        statusPayment: 'success',
        transport: 0
    },
    {
        id: 'LKJHSUNAS7675',
        total: 24999000,
        address: {
            city: 'Hà Nội',
            country: 'Việt Nam',
            detail: 'Số 1 - Đại Cồ Việt',
            name: 'Nguyễn Văn A',
            phone: '0123456789',
            zip: '100000'
        },
        cartItems: [cartItems[2], cartItems[1]],
        codeCoupon: [],
        countProduct: 2,
        createdAt: '2021-09-21T10:00:00',
        discount: 2000000,
        discountCoupon: 0,
        methodPayment: 'cod',
        methodTransport: '1',
        provisional: 26999000,
        status: 'Đã giao',
        statusPayment: 'success',
        transport: 0
    },
    {
        id: 'ASJEQEAS7675',
        total: 24999000,
        address: {
            city: 'Hà Nội',
            country: 'Việt Nam',
            detail: 'Số 1 - Đại Cồ Việt',
            name: 'Nguyễn Văn A',
            phone: '0123456789',
            zip: '100000'
        },
        cartItems: [cartItems[2], cartItems[1]],
        codeCoupon: [],
        countProduct: 2,
        createdAt: '2021-09-21T10:00:00',
        discount: 2000000,
        discountCoupon: 0,
        methodPayment: 'cod',
        methodTransport: '1',
        provisional: 26999000,
        status: 'chờ xác nhận',
        statusPayment: 'success',
        transport: 0
    },
    {
        id: 'ASJQEAS7675',
        total: 24999000,
        address: {
            city: 'Hà Nội',
            country: 'Việt Nam',
            detail: 'Số 1 - Đại Cồ Việt',
            name: 'Nguyễn Văn A',
            phone: '0123456789',
            zip: '100000'
        },
        cartItems: [cartItems[2], cartItems[1]],
        codeCoupon: [],
        countProduct: 2,
        createdAt: '2021-09-21T10:00:00',
        discount: 2000000,
        discountCoupon: 0,
        methodPayment: 'cod',
        methodTransport: '1',
        provisional: 26999000,
        status: 'Đã Hủy',
        statusPayment: 'success',
        transport: 0
    },
];

const Page = () => {
    return (
        <div className='pt-2 mb-4 px-20'>
            <h4 className='font-semibold text-xl'>Đơn hàng của tôi</h4>
            <p className='text-sm text-gray-600 max-w-sm'>Lịch sử đơn hàng của bạn</p>
            <div className='mt-6 space-y-3'>
                {orders.map((order) => (
                    <OrderItem order={order} key={order.id} />
                ))}
            </div>
        </div>
    );
};

export default Page;
