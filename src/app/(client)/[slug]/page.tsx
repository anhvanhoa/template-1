import React from 'react';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ThumbsUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageProduct } from '@/theme/product';
import Variants from '@/theme/product/Variants';
import { ProductDetailType } from '@/types/product';
import Prices from '@/theme/product/Prices';
import ProductProvider from '@/providers/ProductProvider';

type Props = {
    params: Promise<{
        slug: string[];
    }>;
};

const pro: ProductDetailType = {
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
            quantity: 50
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
    ],
    quantity: 10
};

const ProductDetail = async ({}: Props) => {
    // const { slug } = await params;
    return (
        <ProductProvider init={pro}>
            <div className='max-w-screen-xl mx-auto px-4 mt-3'>
                <Breadcrumb className='py-6'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href='/'>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href='/components'>Components</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='grid lg:grid-cols-2 gap-12'>
                    <div>
                        <ImageProduct className='sticky top-8' />
                    </div>
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl font-medium'>{pro.name}</h1>
                            <div className='flex items-center gap-2'>
                                <div className='flex gap-x-0.5'>
                                    {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                            <Star
                                                key={i}
                                                className='w-4 h-4 fill-primary text-primary'
                                            />
                                        ))}
                                </div>
                                <span className='text-sm text-muted-foreground'>
                                    {pro.stars} ( {pro.totalReviews} đánh giá )
                                </span>
                            </div>
                            <Prices />
                        </div>
                        <Variants />
                    </div>
                </div>
                <div className='mt-12'>
                    <Tabs defaultValue='des'>
                        <TabsList className='w-full bg-transparent p-0'>
                            <TabsTrigger
                                className='w-full border-b rounded-none py-2 data-[state=active]:shadow-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary'
                                value='des'
                            >
                                Mô tả
                            </TabsTrigger>
                            <TabsTrigger
                                className='w-full border-b rounded-none py-2 data-[state=active]:shadow-none data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary'
                                value='review'
                            >
                                Đánh giá
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value='des' className='p-4'>
                            <div
                                dangerouslySetInnerHTML={{ __html: pro.description }}
                            ></div>
                        </TabsContent>
                        <TabsContent value='review' className='p-4'>
                            <div className=''>
                                <div className='grid md:grid-cols-3 gap-6'>
                                    <div className='space-y-6 col-span-2'>
                                        <Select defaultValue='newest'>
                                            <SelectTrigger className=''>
                                                <SelectValue placeholder='Sort by' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value='newest'>
                                                    Newest
                                                </SelectItem>
                                                <SelectItem value='highest'>
                                                    Highest Rated
                                                </SelectItem>
                                                <SelectItem value='lowest'>
                                                    Lowest Rated
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <div className='space-y-4'>
                                            <div className='flex gap-4 items-start'>
                                                <Avatar className='w-10 h-10'>
                                                    <AvatarImage src='/placeholder.svg' />
                                                    <AvatarFallback>HM</AvatarFallback>
                                                </Avatar>
                                                <div className='space-y-1'>
                                                    <div className='flex items-center gap-2'>
                                                        <span className='font-medium'>
                                                            Helen M.
                                                        </span>
                                                        <span className='text-sm text-muted-foreground'>
                                                            Yesterday
                                                        </span>
                                                    </div>
                                                    <div className='flex gap-0.5'>
                                                        {Array(5)
                                                            .fill(null)
                                                            .map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className='w-4 h-4 fill-primary text-primary'
                                                                />
                                                            ))}
                                                    </div>
                                                    <p className='text-sm'>
                                                        Excellent running shoes. It turns
                                                        very sharply on the foot.
                                                    </p>
                                                    <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                                                        <button className='flex items-center gap-1 hover:text-foreground'>
                                                            Reply
                                                        </button>
                                                        <button className='flex items-center gap-1 hover:text-foreground'>
                                                            <ThumbsUp className='w-4 h-4' />
                                                            42
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex gap-4 items-start'>
                                                <Avatar className='w-10 h-10'>
                                                    <AvatarImage src='/placeholder.svg' />
                                                    <AvatarFallback>AH</AvatarFallback>
                                                </Avatar>
                                                <div className='space-y-1'>
                                                    <div className='flex items-center gap-2'>
                                                        <span className='font-medium'>
                                                            Ann H.
                                                        </span>
                                                        <span className='text-sm text-muted-foreground'>
                                                            2 days ago
                                                        </span>
                                                    </div>
                                                    <div className='flex gap-0.5'>
                                                        {Array(4)
                                                            .fill(null)
                                                            .map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className='w-4 h-4 fill-primary text-primary'
                                                                />
                                                            ))}
                                                    </div>
                                                    <p className='text-sm'>Good shoes</p>
                                                    <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                                                        <button className='flex items-center gap-1 hover:text-foreground'>
                                                            Reply
                                                        </button>
                                                        <button className='flex items-center gap-1 hover:text-foreground'>
                                                            <ThumbsUp className='w-4 h-4' />
                                                            55
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-6'>
                                        <div className='space-y-4'>
                                            <div className='flex items-center gap-2'>
                                                <div className='flex gap-0.5'>
                                                    {Array(5)
                                                        .fill(null)
                                                        .map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className='w-5 h-5 fill-primary text-primary'
                                                            />
                                                        ))}
                                                </div>
                                                <span className='text-2xl font-bold'>
                                                    4.8
                                                </span>
                                            </div>
                                            <div className='space-y-2'>
                                                {[
                                                    { stars: 5, count: 28 },
                                                    { stars: 4, count: 9 },
                                                    { stars: 3, count: 4 },
                                                    { stars: 2, count: 1 },
                                                    { stars: 1, count: 1 }
                                                ].map(({ stars, count }) => (
                                                    <div
                                                        key={stars}
                                                        className='flex items-center gap-2'
                                                    >
                                                        <span className='text-sm w-3'>
                                                            {stars}
                                                        </span>
                                                        <div className='h-2 bg-muted rounded-full flex-1 overflow-hidden'>
                                                            <div
                                                                className='h-full bg-primary rounded-full'
                                                                style={{
                                                                    width: `${
                                                                        (count / 43) * 100
                                                                    }%`
                                                                }}
                                                            />
                                                        </div>
                                                        <span className='text-sm w-6'>
                                                            {count}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Card>
                                            <CardContent className='p-4'>
                                                <h3 className='font-semibold text-lg'>
                                                    Popular brands with discounts over 25%
                                                </h3>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </ProductProvider>
    );
};

export default ProductDetail;
