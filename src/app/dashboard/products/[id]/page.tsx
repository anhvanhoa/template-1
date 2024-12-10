'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import * as z from 'zod';
import Image from 'next/image';
import { MonitorCog, Settings, Trash, X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
const formSchema = z.object({
    name: z.string().min(1, 'Product name is required'),
    description: z.string().min(1, 'Description is required'),
    size: z.string(),
    gender: z.string(),
    basePrice: z.string(),
    stock: z.string(),
    discount: z.string(),
    discountType: z.string(),
    category: z.string(),
    preOrder: z.boolean().default(false)
});

export default function ProductForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            size: 'S',
            gender: 'Woman',
            basePrice: '',
            stock: '',
            discount: '',
            discountType: 'seasonal',
            category: ''
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <div className='bg-background p-4 rounded-lg'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='grid md:grid-cols-3 gap-6'>
                        <div className='space-y-4 col-span-2'>
                            <Card className='shadow-none border-none'>
                                <CardContent className='px-3'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <h2 className='text-base font-semibold'>
                                            Thông tin sản phẩm
                                        </h2>
                                        <div className='flex gap-2'>
                                            <FormField
                                                control={form.control}
                                                name='category'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger className='rounded-full gap-x-2 text-xs focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto'>
                                                                    <SelectValue placeholder='Trạng thái' />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent className='rounded-xl'>
                                                                <SelectItem
                                                                    className='rounded-xl'
                                                                    value='jacket'
                                                                >
                                                                    Jacket
                                                                </SelectItem>
                                                                <SelectItem
                                                                    className='rounded-xl'
                                                                    value='pants'
                                                                >
                                                                    Pants
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button
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
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
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
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
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
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className='focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                <SelectValue placeholder='Danh mục' />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className='rounded-lg'>
                                                            <SelectItem value='jacket'>
                                                                Jacket
                                                            </SelectItem>
                                                            <SelectItem value='pants'>
                                                                Pants
                                                            </SelectItem>
                                                            <SelectItem value='shirts'>
                                                                Shirts
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='shadow-none border-none'>
                                <CardContent className='px-3'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <h2 className='text-base font-semibold'>
                                            Thông tin bán hàng
                                        </h2>
                                        <div className='space-x-2 flex items-center'>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        type='button'
                                                        className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                                        size={'sm'}
                                                        variant={'outline'}
                                                    >
                                                        <span>Thêm thuộc tính</span>
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader className='sr-only'>
                                                        <DialogTitle></DialogTitle>
                                                        <DialogDescription></DialogDescription>
                                                    </DialogHeader>
                                                    <div>
                                                        <div className='grid grid-cols-3 gap-x-2'>
                                                            <FormField
                                                                control={form.control}
                                                                name='name'
                                                                render={({ field }) => (
                                                                    <FormItem className='col-span-2'>
                                                                        <FormControl>
                                                                            <Input
                                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                                placeholder='Tên thuộc tính'
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
                                                                        <Select
                                                                            onValueChange={
                                                                                field.onChange
                                                                            }
                                                                            defaultValue={
                                                                                field.value
                                                                            }
                                                                        >
                                                                            <FormControl>
                                                                                <SelectTrigger className='focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                                    <SelectValue placeholder='Thuộc tính sẵn' />
                                                                                </SelectTrigger>
                                                                            </FormControl>
                                                                            <SelectContent className='rounded-lg'>
                                                                                <SelectItem value='jacket'>
                                                                                    RAM
                                                                                </SelectItem>
                                                                                <SelectItem value='shirts'>
                                                                                    Color
                                                                                </SelectItem>
                                                                            </SelectContent>
                                                                        </Select>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <div className='mt-4 space-y-3'>
                                                            <FormField
                                                                control={form.control}
                                                                name='name'
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormControl>
                                                                            <Input
                                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                                placeholder='Giá trị'
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <div className='grid grid-cols-3 gap-x-2 mt-4'>
                                                            <Button className='col-span-2 rounded-full'>
                                                                Thêm thuộc tính
                                                            </Button>
                                                            <Button
                                                                className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                                                variant={'outline'}
                                                            >
                                                                Thêm giá trị
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        type='button'
                                                        className='py-1 rounded-full'
                                                        size={'sm'}
                                                    >
                                                        <Settings />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader className='sr-only'>
                                                        <DialogTitle></DialogTitle>
                                                        <DialogDescription></DialogDescription>
                                                    </DialogHeader>
                                                    <div>
                                                        <div className='space-y-3'>
                                                            <div className='flex items-center gap-x-4'>
                                                                <Checkbox />
                                                                <p className='bg-muted flex-1 px-2 py-1 rounded-md space-x-2'>
                                                                    <span>
                                                                        <span className='text-slate-600 pr-1'>
                                                                            RAM:
                                                                        </span>
                                                                        <span>8GB,</span>
                                                                    </span>
                                                                    <span>
                                                                        <span className='text-slate-600 pr-1'>
                                                                            COLOR:
                                                                        </span>
                                                                        <span>RED,</span>
                                                                    </span>
                                                                    <span>
                                                                        <span className='text-slate-600 pr-1'>
                                                                            SIZE:
                                                                        </span>
                                                                        <span>M</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div className='flex items-center gap-x-4'>
                                                                <Checkbox />
                                                                <p className='bg-muted flex-1 px-2 py-1 rounded-md space-x-2'>
                                                                    <span>
                                                                        <span className='text-slate-600 pr-1'>
                                                                            RAM:
                                                                        </span>
                                                                        <span>8GB,</span>
                                                                    </span>
                                                                    <span>
                                                                        <span className='text-slate-600 pr-1'>
                                                                            COLOR:
                                                                        </span>
                                                                        <span>RED,</span>
                                                                    </span>
                                                                    <span>
                                                                        <span className='text-slate-600 pr-1'>
                                                                            SIZE:
                                                                        </span>
                                                                        <span>M</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='grid grid-cols-3 gap-x-2 mt-4'>
                                                            <Button className='col-span-2 rounded-full'>
                                                                Tạo biến thể
                                                            </Button>
                                                            <Button
                                                                className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                                                variant={'outline'}
                                                            >
                                                                Chọn tất cả
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 pb-6 mt-4'>
                                        <FormField
                                            control={form.control}
                                            name='basePrice'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            type='number'
                                                            placeholder='Giá tiền'
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='stock'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='Số lượng'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='discount'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='10'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='discountType'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className='focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                <SelectValue placeholder='Loại giảm giá' />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className='rounded-lg'>
                                                            <SelectItem
                                                                className='rounded-lg'
                                                                value='seasonal'
                                                            >
                                                                Giá tiền
                                                            </SelectItem>
                                                            <SelectItem
                                                                className='rounded-lg'
                                                                value='clearance'
                                                            >
                                                                Phần trăm
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div className='border p-4 rounded-xl'>
                                            <div className='flex items-center justify-between gap-x-2'>
                                                <p className='bg-muted flex-1 py-2 px-2 font-medium rounded-lg text-sm'>
                                                    COLOER
                                                </p>
                                                <Button
                                                    type='button'
                                                    variant={'secondary'}
                                                    size='icon'
                                                    className='rounded-full'
                                                >
                                                    <MonitorCog />
                                                </Button>
                                                <Button
                                                    type='button'
                                                    variant={'secondary'}
                                                    size='icon'
                                                    className='rounded-full'
                                                >
                                                    <Trash className='text-red-600' />
                                                </Button>
                                            </div>
                                            <div className='mt-2 grid grid-cols-2 gap-2'>
                                                <p className='rounded-lg bg-muted text-sm p-2'>
                                                    RED
                                                </p>
                                                <p className='rounded-lg bg-muted text-sm p-2'>
                                                    Blue
                                                </p>
                                            </div>
                                        </div>
                                        <div className='border p-4 rounded-xl'>
                                            <div className='flex items-center justify-between gap-x-2'>
                                                <p className='bg-muted flex-1 py-2 px-2 font-medium rounded-lg text-sm'>
                                                    RAM
                                                </p>
                                                <Button
                                                    type='button'
                                                    variant={'secondary'}
                                                    size='icon'
                                                    className='rounded-full'
                                                >
                                                    <MonitorCog />
                                                </Button>
                                                <Button
                                                    type='button'
                                                    variant={'secondary'}
                                                    size='icon'
                                                    className='rounded-full'
                                                >
                                                    <Trash className='text-red-600' />
                                                </Button>
                                            </div>
                                            <div className='mt-2 grid grid-cols-2 gap-2'>
                                                <p className='rounded-lg bg-muted text-sm p-2'>
                                                    8GB
                                                </p>
                                                <p className='rounded-lg bg-muted text-sm p-2'>
                                                    4GB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='shadow-none m-3'>
                                <CardContent className='p-4'>
                                    <div className='flex items-center mb-4 justify-between'>
                                        <h2 className='text-base font-semibold'>
                                            Sản phẩm thuộc tính 1
                                        </h2>
                                        <div className='flex items-center gap-2'>
                                            <p className='bg-muted px-2 py-1 rounded-md space-x-2 text-sm'>
                                                <span>
                                                    <span className='text-slate-600 pr-1'>
                                                        RAM:
                                                    </span>
                                                    <span>8GB,</span>
                                                </span>
                                                <span>
                                                    <span className='text-slate-600 pr-1'>
                                                        COLOR:
                                                    </span>
                                                    <span>RED,</span>
                                                </span>
                                                <span>
                                                    <span className='text-slate-600 pr-1'>
                                                        SIZE:
                                                    </span>
                                                    <span>M</span>
                                                </span>
                                            </p>
                                            <Button
                                                type='button'
                                                variant={'secondary'}
                                                size='icon'
                                                className='rounded-full'
                                            >
                                                <Trash className='text-red-600' />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <FormField
                                            control={form.control}
                                            name='basePrice'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            type='number'
                                                            placeholder='Giá tiền'
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='stock'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='Số lượng'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='discount'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='10'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='discountType'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className='focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                <SelectValue placeholder='Loại giảm giá' />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className='rounded-lg'>
                                                            <SelectItem
                                                                className='rounded-lg'
                                                                value='seasonal'
                                                            >
                                                                Giá tiền
                                                            </SelectItem>
                                                            <SelectItem
                                                                className='rounded-lg'
                                                                value='clearance'
                                                            >
                                                                Phần trăm
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            placeholder='Cân nặng'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex items-center gap-x-1'>
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='R'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <X className='size-10 text-muted-foreground' />
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='D'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <X className='size-10 text-muted-foreground' />
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='C'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='shadow-none m-3'>
                                <CardContent className='p-4'>
                                    <div className='flex items-center mb-4 justify-between'>
                                        <h2 className='text-base font-semibold'>
                                            Sản phẩm thuộc tính 1
                                        </h2>
                                        <div className='flex items-center gap-2'>
                                            <p className='bg-muted px-2 py-1 rounded-md space-x-2 text-sm'>
                                                <span>
                                                    <span className='text-slate-600 pr-1'>
                                                        RAM:
                                                    </span>
                                                    <span>8GB,</span>
                                                </span>
                                                <span>
                                                    <span className='text-slate-600 pr-1'>
                                                        COLOR:
                                                    </span>
                                                    <span>RED,</span>
                                                </span>
                                                <span>
                                                    <span className='text-slate-600 pr-1'>
                                                        SIZE:
                                                    </span>
                                                    <span>M</span>
                                                </span>
                                            </p>
                                            <Button
                                                type='button'
                                                variant={'secondary'}
                                                size='icon'
                                                className='rounded-full'
                                            >
                                                <Trash className='text-red-600' />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <FormField
                                            control={form.control}
                                            name='basePrice'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            type='number'
                                                            placeholder='Giá tiền'
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='stock'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='Số lượng'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='discount'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            type='number'
                                                            placeholder='10'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='discountType'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className='focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                <SelectValue placeholder='Loại giảm giá' />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className='rounded-lg'>
                                                            <SelectItem
                                                                className='rounded-lg'
                                                                value='seasonal'
                                                            >
                                                                Giá tiền
                                                            </SelectItem>
                                                            <SelectItem
                                                                className='rounded-lg'
                                                                value='clearance'
                                                            >
                                                                Phần trăm
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            placeholder='Cân nặng'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex items-center gap-x-1'>
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='R'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <X className='size-10 text-muted-foreground' />
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='D'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <X className='size-10 text-muted-foreground' />
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='C'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='space-y-6'>
                            <Card className='shadow-none'>
                                <CardContent className='p-4'>
                                    <h2 className='text-base font-semibold mb-4'>
                                        Ảnh sản phẩm
                                    </h2>
                                    <div className='grid grid-cols-2 gap-2 *:aspect-square'>
                                        <div className='flex items-center justify-center border border-dashed rounded-lg p-4'>
                                            <i className='text-sm text-center text-gray-500'>
                                                Tải ảnh định dạng .png, .jpg, .jpeg
                                            </i>
                                        </div>
                                        <div className='flex items-center justify-center border border-dashed rounded-lg'>
                                            {/* <Button
                                                variant={'outline'}
                                                size={'sm'}
                                                className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                            >
                                                Chọn ảnh
                                            </Button> */}
                                            <Image
                                                src={'/pro-1.png'}
                                                alt='Product preview'
                                                className='w-full object-cover rounded-lg'
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-3 mt-4 gap-x-1'>
                                        <Carousel
                                            opts={{
                                                align: 'start'
                                            }}
                                            className='col-span-2 w-full max-w-sm border border-dashed rounded-lg px-1'
                                        >
                                            <CarouselContent className='-ml-1'>
                                                {Array.from({ length: 4 }).map(
                                                    (_, index) => (
                                                        <CarouselItem
                                                            key={index}
                                                            className='md:basis-1/2 pl-1'
                                                        >
                                                            <Image
                                                                src={`/pro-${
                                                                    (index % 2) + 1
                                                                }.png`}
                                                                alt='Product preview'
                                                                className='w-full object-cover rounded-lg'
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </CarouselItem>
                                                    )
                                                )}
                                            </CarouselContent>
                                        </Carousel>
                                        <div className='flex flex-col items-center justify-center border border-dashed rounded-lg aspect-square'>
                                            <i className='text-xs py-1'>4 / 5</i>
                                            <Button
                                                variant={'outline'}
                                                size={'sm'}
                                                className='py-1 rounded-full border-primary text-primary hover:text-primary hover:bg-primary/10'
                                            >
                                                Chọn ảnh
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='shadow-none'>
                                <CardContent className='p-4'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <h2 className='text-base font-semibold'>
                                            Kích thước sản phẩm
                                        </h2>
                                    </div>
                                    <div className='space-y-3'>
                                        <FormField
                                            control={form.control}
                                            name='preOrder'
                                            render={({ field }) => (
                                                <FormItem className='flex items-center justify-between'>
                                                    <FormLabel>Cho biến thể</FormLabel>
                                                    <FormControl>
                                                        <Switch
                                                            checked={field.value}
                                                            onCheckedChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                            placeholder='Cân nặng'
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex items-center gap-x-1'>
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='R'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <X className='size-10 text-muted-foreground' />
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='D'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <X className='size-10 text-muted-foreground' />
                                            <FormField
                                                control={form.control}
                                                name='name'
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
                                                                placeholder='C'
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className='shadow-none'>
                                <CardContent className='p-4'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <h2 className='text-base font-semibold'>
                                            Thông tin khác
                                        </h2>
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
                                                            onCheckedChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='category'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className='focus:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'>
                                                                <SelectValue placeholder='Tình trạng hàng' />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className='rounded-lg'>
                                                            <SelectItem value='jacket'>
                                                                Jacket
                                                            </SelectItem>
                                                            <SelectItem value='pants'>
                                                                Pants
                                                            </SelectItem>
                                                            <SelectItem value='shirts'>
                                                                Shirts
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            className='focus-visible:ring-0 bg-muted border-none py-2.5 shadow-none h-auto rounded-lg'
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
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
