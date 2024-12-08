'use client';
import { Input } from '@/components/ui/input';
import useCheckout from '@/hooks/useCheckout';
import React from 'react';
import { cn } from '@/lib/utils';
const InforCustomer = () => {
    const { changeAddress, checkout } = useCheckout();
    return (
        <div className='mt-4 border-t pt-4'>
            <p className='text-sm py-2'>Thông tin khách hàng</p>
            <div className='flex items-center gap-x-3'>
                <Input
                    onChange={changeAddress('name')}
                    value={checkout.address.name}
                    maxLength={50}
                    placeholder='Họ & Tên'
                    className={cn(
                        'border-transparent shadow-none bg-gray-50 rounded-xl',
                        {
                            'border-red-600 placeholder:text-red-600':
                                checkout.errors.name
                        }
                    )}
                />
                <Input
                    maxLength={11}
                    onChange={changeAddress('phone')}
                    value={checkout.address.phone}
                    placeholder='Số điện thoại'
                    className={cn(
                        'border-transparent shadow-none bg-gray-50 rounded-xl',
                        {
                            'border-red-600 placeholder:text-red-600':
                                checkout.errors.phone
                        }
                    )}
                />
            </div>
            <Input
                onChange={changeAddress('detail')}
                value={checkout.address.detail}
                placeholder='Địa chỉ'
                className='border-transparent shadow-none bg-gray-50 rounded-xl mt-2'
            />
        </div>
    );
};

export default InforCustomer;
