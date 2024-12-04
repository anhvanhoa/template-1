import React from 'react';
import Product from './Product';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { ProductType } from '@/types/product';

const pros: ProductType[] = [
    {
        id: '1',
        title: 'Macbook Pro 2021',
        image: '/pro-1.png',
        slug: '/product1',
        discount: 5000000,
        typeDiscount: 'price',
        priceSale: 12000000,
        price: 17000000,
        star: 4.5
    },
    {
        id: '2',
        title: 'IMac Pro 2021',
        image: '/pro-2.png',
        slug: '/product2',
        discount: 10,
        typeDiscount: 'percent',
        priceSale: 32000000,
        price: 35000000
    },
    {
        id: '3',
        title: 'Macbook Air 2021',
        image: '/pro-1.png',
        slug: '/product3',
        discount: 1000000,
        typeDiscount: 'price',
        priceSale: 16000000,
        price: 17000000,
        star: 4.5
    },
    {
        id: '4',
        title: 'IMac 2021',
        image: '/pro-2.png',
        slug: '/product4',
        discount: 10,
        typeDiscount: 'percent',
        priceSale: 32000000,
        price: 35000000
    },
    {
        id: '5',
        title: 'IMac 2021',
        image: '/pro-1.png',
        slug: '/product4',
        discount: 10,
        typeDiscount: 'percent',
        priceSale: 32000000,
        price: 35000000
    },
    {
        id: '6',
        title: 'Macbook Pro 2021',
        image: '/pro-1.png',
        slug: '/product1',
        discount: 5000000,
        typeDiscount: 'price',
        priceSale: 12000000,
        price: 17000000,
        star: 4.5
    },
    {
        id: '7',
        title: 'IMac Pro 2021',
        image: '/pro-2.png',
        slug: '/product2',
        discount: 10,
        typeDiscount: 'percent',
        priceSale: 32000000,
        price: 35000000
    },
    {
        id: '8',
        title: 'Macbook Air 2021',
        image: '/pro-1.png',
        slug: '/product3',
        discount: 1000000,
        typeDiscount: 'price',
        priceSale: 16000000,
        price: 17000000,
        star: 4.5
    },
    {
        id: '9',
        title: 'IMac 2021',
        image: '/pro-2.png',
        slug: '/product4',
        discount: 10,
        typeDiscount: 'percent',
        priceSale: 32000000,
        price: 35000000
    },
    {
        id: '10',
        title: 'IMac 2021',
        image: '/pro-1.png',
        slug: '/product4',
        discount: 10,
        typeDiscount: 'percent',
        priceSale: 32000000,
        price: 35000000
    },
];

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
                {pros.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default HomeProduct;
