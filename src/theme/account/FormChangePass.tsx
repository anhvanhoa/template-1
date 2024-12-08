'use client';
import React from 'react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { schemaChangePassword, SchemaChangePassword } from '@/schemas/account';
import { zodResolver } from '@hookform/resolvers/zod';

const FormChangePass = () => {
    const form = useForm<SchemaChangePassword>({
        resolver: zodResolver(schemaChangePassword),
        defaultValues: {
            password: '',
            newPassword: '',
            confirmPassword: ''
        },
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });
    const onSubmit = (data: SchemaChangePassword) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <div className='space-y-4 mt-8'>
                <div className='grid grid-cols-4'>
                    <Label className='py-3'>Mật khẩu cũ:</Label>
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Input
                                        placeholder='Vui lòng nhập'
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-lg h-auto'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-4'>
                    <Label className='py-3'>Mật khẩu mới:</Label>
                    <FormField
                        control={form.control}
                        name='newPassword'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Input
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-lg h-auto'
                                        placeholder='Vui lòng nhập'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-4'>
                    <Label className='py-3'>Xác nhận mật khẩu:</Label>
                    <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <FormItem className='col-span-3'>
                                <FormControl>
                                    <Input
                                        className='border-none shadow-none bg-gray-50 py-2.5 rounded-lg h-auto'
                                        placeholder='Vui lòng nhập'
                                        {...field}
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
                        Lưu thay đổi
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default FormChangePass;
