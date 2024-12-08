'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaLogin, schemaLogin } from '@/schemas/auth';

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<SchemaLogin>({
        resolver: zodResolver(schemaLogin),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data: SchemaLogin) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <form className='space-y-4'>
                <div>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type='email'
                                        placeholder='Địa chỉ email'
                                        className='bg-gray-100 h-auto py-3 border-0 rounded-lg'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <p className='text-sm pb-1 text-right'>
                        <Link
                            href='/quen-mat-khau'
                            className='text-primary hover:underline'
                        >
                            Quên mật khẩu?
                        </Link>
                    </p>
                    <div className='relative'>
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Mật khẩu'
                                            className='bg-gray-100 h-auto py-3 border-0 rounded-lg'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black'
                        >
                            {showPassword ? (
                                <EyeOff className='h-4 w-4' />
                            ) : (
                                <Eye className='h-4 w-4' />
                            )}
                        </button>
                    </div>
                </div>

                <div className='flex items-center space-x-4 pt-4'>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        className='flex-1 text-white hover:bg-primary/90 py-3 rounded-lg'
                    >
                        Đăng Nhập
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormLogin;
