'use client';
import { ProductDetailType } from '@/types/product';
import React, { createContext } from 'react';

const proDefault: ProductDetailType = {
    id: '1',
    thumbnail: '/pro-1.png',
    images: [
        { id: 1, url: '/pro-1.png' },
        { id: 2, url: '/pro-2.png' },
        { id: 3, url: '/pro-1.png' },
        { id: 4, url: '/pro-2.png' },
        { id: 5, url: '/pro-1.png' }
    ],
    stars: 4.8,
    totalReviews: 47,
    price: 39900000,
    priceSale: 54900000,
    typeDiscount: 'price',
    discount: 15000000,
    name: 'Shoes Reebok Zig Kinetica 3',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum quas ratione ducimus, nesciunt consequuntur impedit asperiores sed natus iusto porro, nisi qui recusandae nemo ipsam accusamus laudantium distinctio autem!',
    attributes: [
        {
            id: 1,
            name: 'Color',
            values: [
                {
                    id: 1,
                    name: 'White'
                },
                {
                    id: 2,
                    name: 'Black'
                }
            ]
        },
        {
            id: 2,
            name: 'Size',
            values: [
                {
                    id: 3,
                    name: '41'
                },
                {
                    id: 4,
                    name: '42'
                },
                {
                    id: 5,
                    name: '43'
                }
            ]
        }
    ],
    variants: [
        {
            id: '1',
            price: 39900000,
            image: '/pro-1.png',
            attributes: [
                {
                    id: 1,
                    name: 'Color',
                    value: {
                        id: 1,
                        name: 'White'
                    }
                },
                {
                    id: 2,
                    name: 'Size',
                    value: {
                        id: 3,
                        name: '41'
                    }
                }
            ],
            quantity: 10
        },
        {
            id: '2',
            price: 39900000,
            image: '/pro-2.png',
            attributes: [
                {
                    id: 1,
                    name: 'Color',
                    value: {
                        id: 2,
                        name: 'Black'
                    }
                },
                {
                    id: 2,
                    name: 'Size',
                    value: {
                        id: 3,
                        name: '41'
                    }
                }
            ],
            quantity: 10
        },
        {
            id: '3',
            price: 39900000,
            image: '/pro-2.png',
            attributes: [
                {
                    id: 1,
                    name: 'Color',
                    value: {
                        id: 1,
                        name: 'White'
                    }
                },
                {
                    id: 2,
                    name: 'Size',
                    value: {
                        id: 4,
                        name: '42'
                    }
                }
            ],
            quantity: 0
        },
        {
            id: '4',
            price: 39900000,
            image: '/pro-2.png',
            attributes: [
                {
                    id: 1,
                    name: 'Color',
                    value: {
                        id: 2,
                        name: 'Black'
                    }
                },
                {
                    id: 2,
                    name: 'Size',
                    value: {
                        id: 4,
                        name: '42'
                    }
                }
            ],
            quantity: 10
        },
        {
            id: '5',
            price: 39900000,
            image: '/pro-2.png',
            quantity: 10,
            attributes: [
                {
                    id: 1,
                    name: 'Color',
                    value: {
                        id: 1,
                        name: 'White'
                    }
                },
                {
                    id: 2,
                    name: 'Size',
                    value: {
                        id: 5,
                        name: '43'
                    }
                }
            ]
        }
    ]
};

export const ContextProduct = createContext<
    [ProductDetailType, React.Dispatch<React.SetStateAction<ProductDetailType>>]
>([proDefault, () => {}]);

type ProductProviderProps = {
    children: React.ReactNode;
    init: ProductDetailType;
};

const ProductProvider: React.FC<ProductProviderProps> = ({ children, init }) => {
    const [product, setProduct] = React.useState<ProductDetailType>(init);
    if (!product) throw new Error('Product is not defined');
    return (
        <ContextProduct.Provider value={[product, setProduct]}>
            {children}
        </ContextProduct.Provider>
    );
};

export default ProductProvider;
