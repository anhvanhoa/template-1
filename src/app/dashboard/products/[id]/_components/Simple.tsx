import React from 'react';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreateProductType, typeDiscountProduct } from '@/schemas/product';
import { useFormContext } from 'react-hook-form';
const Simple = () => {
    const form = useFormContext<CreateProductType>();
    return (
        <div className='grid sm:grid-cols-2 gap-4 pb-6 mt-4'>
            <FormField
                control={form.control}
                name='simple.price'
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                                placeholder='Giá tiền'
                                className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                {...field}
                                value={field.value || ''}
                                onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='simple.quantity'
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                                className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                type='number'
                                placeholder='Số lượng'
                                value={field.value || ''}
                                onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='simple.discount'
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                                className='text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                type='number'
                                placeholder='Giảm giá'
                                value={field.value || ''}
                                onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='simple.typeDiscount'
                render={({ field }) => (
                    <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className='text-sm focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                    <SelectValue placeholder='Loại giảm giá' />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className='rounded-lg'>
                                {typeDiscountProduct.map((type) => (
                                    <SelectItem key={type.id} className='rounded-lg' value={type.id}>
                                        {type.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default Simple;
