import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CreateProductType, statusProduct } from '@/schemas/product';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const categories = [
    {
        id: 'iphone',
        name: 'Iphone'
    },
    {
        id: 'samsung',
        name: 'Samsung'
    },
    {
        id: 'Ipad',
        name: 'Ipad'
    }
];

const Basic = () => {
    const form = useFormContext<CreateProductType>();
    const onSubmit = (data: CreateProductType) => {
        console.log(data);
    };
    return (
        <Card className='shadow-none border-none'>
            <CardContent className='px-3'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-y-3 justify-between mb-3'>
                    <h2 className='text-base font-semibold'>Thông tin sản phẩm</h2>
                    <div className='flex gap-2'>
                        <FormField
                            control={form.control}
                            name='status'
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className='min-w-28 rounded-full gap-x-2 text-xs focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto'>
                                                <SelectValue placeholder='Trạng thái' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className='rounded-xl'>
                                            {statusProduct.map((status) => (
                                                <SelectItem
                                                    key={status.id}
                                                    className='rounded-xl text-xs'
                                                    value={status.id}
                                                >
                                                    {status.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            onMouseDown={() => {
                                console.log(form.getValues());
                                console.log(form.formState.errors)
                            }}
                            type='button'
                            onClick={form.handleSubmit(onSubmit)}
                            className='py-2 rounded-full px-4'
                            size={'sm'}
                        >
                            Thêm sản phẩm
                        </Button>
                    </div>
                </div>
                <div className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg text-sm'
                                        placeholder='Tên sản phẩm'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        rows={4}
                                        className=' text-sm focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                        placeholder='Mô tả sản phẩm'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='category'
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className='text-sm focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                            <SelectValue placeholder='Danh mục' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className='rounded-lg'>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.id}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Basic;
