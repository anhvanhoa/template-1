'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { conditionProduct, CreateProductType } from '@/schemas/product';
import { useFormContext } from 'react-hook-form';

const Orther = () => {
    const form = useFormContext<CreateProductType>();
    return (
        <Card className='shadow-none'>
            <CardContent className='p-4'>
                <div className='flex items-center justify-between mb-3'>
                    <h2 className='text-base font-semibold'>Thông tin khác</h2>
                </div>
                <div className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='preOrder'
                        render={({ field }) => (
                            <FormItem className='flex items-center justify-between'>
                                <FormLabel>Hàng đặt trước</FormLabel>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='condition'
                        render={({ field }) => (
                            <FormItem>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className='text-sm focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                            <SelectValue placeholder='Tình trạng hàng' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className='rounded-lg'>
                                        {conditionProduct.map((condition) => (
                                            <SelectItem
                                                key={condition.id}
                                                className='rounded-lg'
                                                value={condition.id}
                                            >
                                                {condition.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='sku'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                        placeholder='SKU'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Orther;
