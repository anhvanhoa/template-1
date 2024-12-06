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
import { Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageProduct, RelatedProducts, Review } from '@/theme/product';
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
    categories: [
        {
            id: 1,
            name: 'Giày thể thao',
            slug: 'giay-the-thao'
        },
        {
            id: 2,
            name: 'Giày chạy bộ',
            slug: 'giay-chay-bo'
        }
    ],
    stars: 4.8,
    totalReviews: 47,
    price: 39900000,
    priceSale: 54900000,
    typeDiscount: 'price',
    discount: 15000000,
    name: 'Shoes Reebok Zig Kinetica 3',
    description:
        'Đôi giày chạy bộ UltraSpeed Pro là sự kết hợp hoàn hảo giữa thiết kế hiện đại và hiệu suất vượt trội. Được làm từ chất liệu siêu nhẹ, giày mang lại cảm giác thoải mái và thoáng khí suốt cả ngày dài. Đế giày được thiết kế với công nghệ giảm chấn tiên tiến, giúp bảo vệ bàn chân khỏi các chấn động khi di chuyển trên nhiều loại địa hình. Sản phẩm này không chỉ phù hợp cho những người yêu thích chạy bộ, mà còn là lựa chọn lý tưởng cho các hoạt động thể thao và dạo phố. Với nhiều màu sắc trẻ trung và phong cách, UltraSpeed Pro chắc chắn sẽ làm hài lòng cả những khách hàng khó tính nhất.',
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
                                <Link href='/'>Trang chủ</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {pro.categories.map((category) => (
                            <div key={category.id} className='flex items-center gap-2'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={`/category/${category.slug}`}>
                                            {category.name}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </div>
                        ))}
                        <BreadcrumbItem>
                            <BreadcrumbPage>{pro.name}</BreadcrumbPage>
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
                            <h3 className='uppercase text-xl mt-2 pb-4'>
                                Mô tả sản phẩm
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: pro.description }}
                            ></div>
                        </TabsContent>
                        <TabsContent value='review' className='p-4'>
                            <Review />
                        </TabsContent>
                    </Tabs>
                </div>
                <RelatedProducts />
            </div>
        </ProductProvider>
    );
};

export default ProductDetail;
