'use client';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { schemaRegister, SchemaRegister } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<SchemaRegister>({
        resolver: zodResolver(schemaRegister),
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
            phone: '',
            fullName: ''
        }
    });
    const onSubmit = (data: SchemaRegister) => {
        console.log(data);
    };
    return (
        <Form {...form}>
            <form className='space-y-5'>
                <div>
                    <FormField
                        control={form.control}
                        name='fullName'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='Họ và tên'
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
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='Email'
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
                    <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder='Số điện thoại'
                                        className='bg-gray-100 h-auto py-3 border-0 rounded-lg'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='relative'>
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className='bg-gray-100 h-auto py-3 border-0 rounded-lg'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Mật khẩu'
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
                <div className='flex items-center space-x-4 pt-4'>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        className='flex-1 text-white hover:bg-primary/90 py-3 rounded-lg'
                    >
                        Đăng Ký
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FormRegister;
