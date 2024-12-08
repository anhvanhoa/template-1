'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { SchemaForgotPassword, schemaForgotPassword } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const FormForgot = () => {
    const form = useForm<SchemaForgotPassword>({
        resolver: zodResolver(schemaForgotPassword),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            email: ''
        }
    });
    const onSubmit = (data: SchemaForgotPassword) => {
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
                <div className='flex items-center space-x-4 pt-4'>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        className='flex-1 text-white hover:bg-primary/90 py-3 rounded-lg'
                    >
                        Xác nhận
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormForgot;
