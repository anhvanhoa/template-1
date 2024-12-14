import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { CreateProductType } from '@/schemas/product';
import { useFormContext, useWatch } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const ManagerMedia = dynamic(() => import('@/components/ManagerMedia'), {
    ssr: false
});

const MAX_IMAGES = 5;

const MediaProduct = () => {
    const form = useFormContext<CreateProductType>();
    const images = useWatch({
        control: form.control,
        name: 'images'
    });
    const video = useWatch({
        control: form.control,
        name: 'video'
    });
    return (
        <Card className='shadow-none'>
            <CardContent className='p-4'>
                <h2 className='text-base font-semibold mb-4'>Ảnh sản phẩm</h2>
                <div className='grid grid-cols-2 gap-2 *:aspect-square'>
                    <div className='flex items-center justify-center border border-dashed rounded-lg p-4'>
                        {!video && (
                            <ManagerMedia>
                                <Button
                                    disabled
                                    variant={'outline'}
                                    size={'sm'}
                                    className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                >
                                    <span className='hidden xl:block'>Chọn video</span>
                                    <Upload className='text-4 xl:hidden block' />
                                </Button>
                            </ManagerMedia>
                        )}
                    </div>
                    <FormField
                        control={form.control}
                        name='thumbnail'
                        render={({ field, fieldState }) => (
                            <div
                                className={cn('flex items-center justify-center border border-dashed rounded-lg', {
                                    'border-red-600': fieldState.error?.message
                                })}
                            >
                                <FormItem className='flex flex-col items-center justify-between'>
                                    <FormControl>
                                        <ManagerMedia
                                            types={['photo']}
                                            maxSelect={1}
                                            getImages={(images) => field.onChange(images[0].url)}
                                        >
                                            <div>
                                                {!field.value && (
                                                    <Button
                                                        type='button'
                                                        variant={'outline'}
                                                        size={'sm'}
                                                        className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                                    >
                                                        <span className='hidden xl:block'>Chọn ảnh</span>
                                                        <Upload className='text-4 xl:hidden block' />
                                                    </Button>
                                                )}
                                                {field.value && (
                                                    <Image
                                                        src={field.value}
                                                        alt='Product preview'
                                                        className='w-full object-cover rounded-lg'
                                                        width={300}
                                                        height={300}
                                                    />
                                                )}
                                            </div>
                                        </ManagerMedia>
                                    </FormControl>
                                    <FormMessage className='text-center font-normal' />
                                </FormItem>
                            </div>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name='images'
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <div className='grid grid-cols-3 mt-4 gap-x-1'>
                                    <Carousel
                                        opts={{
                                            align: 'start'
                                        }}
                                        className={cn('col-span-2 w-full border border-dashed rounded-lg px-1', {
                                            'border-red-600': fieldState.error?.message
                                        })}
                                    >
                                        <CarouselContent className='-ml-1'>
                                            {field.value &&
                                                field.value.map((image) => (
                                                    <CarouselItem key={image} className='basis-1/2 pl-1 pt-0.5'>
                                                        <div className='relative'>
                                                            <X
                                                                onClick={() =>
                                                                    field.onChange(
                                                                        field.value.filter((i) => i !== image)
                                                                    )
                                                                }
                                                                className='absolute top-2 text-primary cursor-pointer left-2 size-4'
                                                            />
                                                            <Image
                                                                src={image}
                                                                alt='Product preview'
                                                                className='w-full object-cover rounded-lg'
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            {(!field.value || !field.value.length) && (
                                                <>
                                                    <CarouselItem className='md:basis-1/2 pl-1 pt-0.5'>
                                                        <div className='aspect-square bg-muted rounded-lg'></div>
                                                    </CarouselItem>
                                                    <CarouselItem className='md:basis-1/2 pl-1 pt-0.5'>
                                                        <div className='aspect-square bg-muted rounded-lg'></div>
                                                    </CarouselItem>
                                                </>
                                            )}
                                        </CarouselContent>
                                    </Carousel>
                                    <div
                                        className={cn(
                                            'flex flex-col items-center justify-center border border-dashed rounded-lg aspect-square',
                                            {
                                                'border-red-600': fieldState.error?.message
                                            }
                                        )}
                                    >
                                        <i
                                            className={cn('text-xs py-1', {
                                                'text-red-600': fieldState.error?.message
                                            })}
                                        >
                                            {images.length} / {MAX_IMAGES}
                                        </i>
                                        <ManagerMedia
                                            types={['photo']}
                                            maxSelect={MAX_IMAGES - images.length}
                                            getImages={(images) =>
                                                field.onChange([...images.map((i) => i.url), ...field.value])
                                            }
                                        >
                                            <Button
                                                disabled={images.length >= 5}
                                                variant={'outline'}
                                                size={'sm'}
                                                className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                            >
                                                <span className='hidden xl:block'>Chọn ảnh</span>
                                                <Upload className='text-4 xl:hidden block' />
                                            </Button>
                                        </ManagerMedia>
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage className='font-normal' />
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    );
};

export default MediaProduct;
