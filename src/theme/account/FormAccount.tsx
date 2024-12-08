'use client';
import React from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormAvatar } from '@/theme/account';
import { vi } from 'date-fns/locale';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaUserInfo, schemaUserInfo } from '@/schemas/account';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';

const FormAccount = () => {
    const form = useForm<SchemaUserInfo>({
        resolver: zodResolver(schemaUserInfo),
        defaultValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            birthDate: '',
            gender: 'female'
        }
    });
    const onSubmit = (data: SchemaUserInfo) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <div className='space-y-6 mt-8'>
                <FormAvatar />
                <div className='grid grid-cols-4'>
                    <Label className='my-3'>Họ và tên:</Label>
                    <FormField
                        control={form.control}
                        name='fullName'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Input
                                        placeholder='Vui lòng nhập'
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-xl h-auto'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-4'>
                    <Label className='my-3'>Email:</Label>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Input
                                        placeholder='Vui lòng nhập'
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-xl h-auto'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-4'>
                    <Label className='my-3'>Số điện thoại:</Label>
                    <FormField
                        control={form.control}
                        name='phoneNumber'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Input
                                        placeholder='Vui lòng nhập'
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-xl h-auto'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-4'>
                    <Label className='my-3'>Giới tính:</Label>
                    <FormField
                        control={form.control}
                        name='gender'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger className='focus:ring-0 border-none shadow-none bg-gray-50 py-2.5 rounded-xl h-auto'>
                                            <SelectValue placeholder='Vui lòng nhập' />
                                        </SelectTrigger>
                                        <SelectContent className='border-none rounded-xl'>
                                            <SelectItem
                                                className='rounded-xl'
                                                value='male'
                                            >
                                                Nam
                                            </SelectItem>
                                            <SelectItem
                                                className='rounded-xl'
                                                value='female'
                                            >
                                                Nữ
                                            </SelectItem>
                                            <SelectItem
                                                className='rounded-xl'
                                                value='other'
                                            >
                                                Khác
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-4'>
                    <Label className='my-3'>Ngày sinh:</Label>
                    <FormField
                        control={form.control}
                        name='birthDate'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <DateTimePicker
                                        value={
                                            field.value
                                                ? new Date(field.value)
                                                : undefined
                                        }
                                        onChange={(date) =>
                                            date && field.onChange(date.toISOString())
                                        }
                                        displayFormat={{ hour24: 'PPP' }}
                                        granularity='day'
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-xl h-auto'
                                        locale={vi}
                                        placeholder='Chọn ngày'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='pt-2 grid items-center grid-cols-4'>
                    <span></span>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        size={'lg'}
                        className='w-full py-2 rounded-full'
                    >
                        Xác nhận
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default FormAccount;
