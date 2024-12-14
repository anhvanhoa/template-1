'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { CreateProductType } from '@/schemas/product';
import { useFormContext } from 'react-hook-form';

const Dimensions = () => {
    const form = useFormContext<CreateProductType>();
    const isDimensions = form.getValues('isDimensions');
    const variants = form.getValues('variants');
    return (
        <Card className='shadow-none'>
            <CardContent className='p-4'>
                <div className='flex items-center justify-between mb-3'>
                    <h2 className='text-base font-semibold'>Kích thước sản phẩm</h2>
                </div>
                <div className='space-y-3'>
                    <FormField
                        control={form.control}
                        name='isDimensions'
                        render={({ field }) => {
                            const onChange = (v: boolean) => {
                                field.onChange(v);
                                if (v) {
                                    const weight = form.getValues('simple.weight');
                                    const width = form.getValues('simple.width');
                                    const height = form.getValues('simple.height');
                                    const length = form.getValues('simple.length');
                                    const newVariants = variants?.map((v) => ({
                                        ...v,
                                        weight,
                                        width,
                                        height,
                                        length
                                    }));
                                    form.setValue('variants', newVariants);
                                    form.setValue('simple.weight', 0);
                                    form.setValue('simple.width', 0);
                                    form.setValue('simple.height', 0);
                                    form.setValue('simple.length', 0);
                                } else {
                                    const dimensions = { weight: 0, width: 0, height: 0, length: 0 };
                                    const newVariants = variants?.map((v) => ({
                                        ...v,
                                        ...dimensions
                                    }));
                                    form.setValue('variants', newVariants);
                                }
                            };
                            return (
                                <FormItem className='flex items-center justify-between'>
                                    <FormLabel>Cho biến thể</FormLabel>
                                    <FormControl>
                                        <Switch checked={field.value} onCheckedChange={onChange} />
                                    </FormControl>
                                </FormItem>
                            );
                        }}
                    />
                    <>
                        <FormField
                            control={form.control}
                            name='simple.weight'
                            render={({ field }) => {
                                const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                    field.onChange(Number(e.target.value) || 0);
                                };
                                return (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                placeholder='Cân nặng'
                                                {...field}
                                                disabled={isDimensions}
                                                value={field.value || ''}
                                                onChange={!isDimensions ? onChange : undefined}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <div className='flex items-center gap-x-1'>
                            <FormField
                                control={form.control}
                                name='simple.width'
                                render={({ field }) => {
                                    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                        field.onChange(Number(e.target.value) || 0);
                                    };
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isDimensions}
                                                    className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                    placeholder='R'
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={!isDimensions ? onChange : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <X className='sm:size-10 text-muted-foreground' />
                            <FormField
                                control={form.control}
                                name='simple.height'
                                render={({ field }) => {
                                    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                        field.onChange(Number(e.target.value) || 0);
                                    };
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isDimensions}
                                                    className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                    placeholder='D'
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={!isDimensions ? onChange : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                            <X className='sm:size-10 text-muted-foreground' />
                            <FormField
                                control={form.control}
                                name='simple.length'
                                render={({ field }) => {
                                    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                        field.onChange(Number(e.target.value) || 0);
                                    };
                                    return (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    disabled={isDimensions}
                                                    className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                    placeholder='C'
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={!isDimensions ? onChange : undefined}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>
                    </>
                </div>
            </CardContent>
        </Card>
    );
};

export default Dimensions;
