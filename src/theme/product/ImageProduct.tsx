'use client';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useProduct } from '@/hooks/useProduct';

type ImageProductProps = {
    className?: string;
};

const ImageProduct = ({ className }: ImageProductProps) => {
    const [pro] = useProduct();
    const [image, setImage] = React.useState(pro.thumbnail);
    const handleImageChange = (url: string) => setImage(url);
    return (
        <div className={cn('', className)}>
            <div className='aspect-square flex-1 relative bg-gray-50 rounded-xl overflow-hidden'>
                <Image
                    src={image}
                    alt={pro.name}
                    className='object-cover'
                    fill
                    priority
                />
            </div>
            <div className='grid gap-4 px-1'>
                <Carousel orientation='horizontal'>
                    <CarouselContent className='py-2 -ml-3'>
                        {pro.images.map((img) => (
                            <CarouselItem
                                key={img.id}
                                className='basis-1/5 pl-3.5 pr-0.5'
                            >
                                <div
                                    onClick={() => handleImageChange(img.url)}
                                    className='bg-gray-50 aspect-square overflow-hidden hover:ring-1 rounded-xl ring-primary transition-all'
                                >
                                    <Image
                                        src={img.url}
                                        alt={`Product image ${img.id}`}
                                        className='size-full object-cover'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default ImageProduct;
