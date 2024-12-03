import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Props = {
    params: Promise<{
        slug: string[];
    }>;
};

const PageStatic = async ({}: Props) => {
    // const { slug } = await params;
    return (
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
                    <div className='flex items-start gap-4 sticky top-8'>
                        <div className='grid gap-4 w-1/5'>
                            <Carousel
                                opts={{
                                    align: 'start'
                                }}
                                orientation='vertical'
                            >
                                <CarouselContent className='px-1 -mt-2.5 h-[473px]'>
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <CarouselItem key={i} className='basis-1/4 pt-3'>
                                            <div className='aspect-square overflow-hidden hover:ring-1 rounded-xl ring-primary transition-all '>
                                                <Image
                                                    src='/product.jpg'
                                                    alt={`Product image ${i}`}
                                                    className='size-full object-cover'
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='-top-3' />
                                <CarouselNext className='-bottom-3' />
                            </Carousel>
                        </div>
                        <div className='aspect-square flex-1 relative bg-muted rounded-xl overflow-hidden'>
                            <Image
                                src='/product.jpg'
                                alt='Reebok Zig Kinetica 3'
                                className='object-cover'
                                fill
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <div className='size-8'>
                                <Image
                                    src='/logo.png'
                                    alt='Reebok logo'
                                    className='rounded-full size-full object-cover'
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <span>Reebok</span>
                        </div>
                        <h1 className='text-2xl font-medium'>
                            Shoes Reebok Zig Kinetica 3
                        </h1>
                        <div className='flex items-center gap-2'>
                            <div className='flex'>
                                {[1, 2, 3, 4].map((i) => (
                                    <svg
                                        key={i}
                                        className='w-5 h-5 fill-primary'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='M10 2l2.5 5 5.5.8-4 3.9 1 5.3-5-2.6-5 2.6 1-5.3-4-3.9 5.5-.8z' />
                                    </svg>
                                ))}
                                <svg
                                    className='w-5 h-5 fill-muted stroke-muted-foreground'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M10 2l2.5 5 5.5.8-4 3.9 1 5.3-5-2.6-5 2.6 1-5.3-4-3.9 5.5-.8z' />
                                </svg>
                            </div>
                            <span className='text-sm text-muted-foreground'>
                                47 reviews
                            </span>
                        </div>
                        <div className='text-3xl font-medium'>$199.00</div>
                    </div>

                    <div className='space-y-4'>
                        <div>
                            <label className='text-sm font-medium mb-2 block'>
                                Color
                            </label>
                            <RadioGroup defaultValue='white' className='flex gap-2'>
                                {['white', 'grey', 'black'].map((color) => (
                                    <label
                                        key={color}
                                        className={cn(
                                            'relative size-10 bg-black rounded-lg overflow-hidden cursor-pointer ring-offset-background transition-all hover:ring-2 hover:ring-ring hover:ring-offset-2',
                                            'data-[state=checked]:ring-2 data-[state=checked]:ring-ring data-[state=checked]:ring-offset-2'
                                        )}
                                    >
                                        <RadioGroupItem
                                            value={color}
                                            className='sr-only'
                                        />
                                    </label>
                                ))}
                            </RadioGroup>
                        </div>

                        <div>
                            <label className='text-sm font-medium mb-2 block'>
                                Size
                                <span className='text-muted-foreground ml-2'>EU Men</span>
                            </label>
                            <RadioGroup
                                defaultValue='41'
                                className='grid grid-cols-5 gap-2'
                            >
                                {[
                                    '40.5',
                                    '41',
                                    '42',
                                    '43',
                                    '43.5',
                                    '44',
                                    '44.5',
                                    '45',
                                    '46'
                                ].map((size) => (
                                    <label
                                        key={size}
                                        className={cn(
                                            'flex items-center justify-center rounded-lg border border-muted bg-background px-3 py-2 text-sm transition-all hover:border-primary',
                                            'cursor-pointer',
                                            'data-[state=checked]:border-primary data-[state=checked]:bg-primary-foreground'
                                        )}
                                    >
                                        <RadioGroupItem
                                            value={size}
                                            className='sr-only'
                                        />
                                        {size}
                                    </label>
                                ))}
                            </RadioGroup>
                            <button className='text-sm text-muted-foreground hover:text-primary mt-2'>
                                Size guide
                            </button>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <Button
                            size='lg'
                            className='flex-1 py-3 rounded-full border border-primary'
                        >
                            Mua ngay
                        </Button>
                        <Button
                            size='lg'
                            variant='outline'
                            className='shadow-none hover:bg-primary/10 hover:text-primary border-primary rounded-full text-primary'
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
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
                    <TabsContent value='des'>
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value='review'>Change your password here.</TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default PageStatic;
