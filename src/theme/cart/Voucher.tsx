'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCheckout from '@/hooks/useCheckout';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useState } from 'react';

const Voucher = () => {
    const [coupon, setCoupon] = useState('');
    const [error, setError] = useState('');
    const { checkout, addCoupon, removeCoupon } = useCheckout();
    const handleAddCoupon = () => {
        if (!coupon) return;
        if (coupon === 'ABCDEF') {
            addCoupon({
                code: coupon,
                discount: 500000
            });
            setCoupon('');
        } else {
            setError('Mã giảm giá không hợp lệ');
            setTimeout(() => setError(''), 1000);
        }
    };
    return (
        <div>
            <div className='flex items-center gap-x-3'>
                <Input
                    disabled={checkout.countProduct === 0}
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className={cn(
                        'rounded-full shadow-none bg-gray-50 py-2 h-auto border-gray-50 transition-all focus-visible:ring-0',
                        {
                            'border-red-600 text-red-600': error
                        }
                    )}
                    placeholder='Nhập mã giảm giá'
                />
                <Button
                    onClick={checkout.countProduct === 0 ? undefined : handleAddCoupon}
                    className='rounded-full border-primary shadow-none font-medium text-primary hover:text-primary hover:bg-primary/5'
                    variant={'outline'}
                >
                    Áp dụng
                </Button>
            </div>
            <div className='flex items-center mt-2 gap-x-2 max-w-full overflow-auto'>
                {checkout.codeCoupon.map((item) => (
                    <p
                        key={item.code}
                        className='text-xs rounded-3xl gap-x-1 flex items-center border-green-700 bg-green-700/10 text-green-700 py-1 px-2 border'
                    >
                        <span>{item.code}</span>
                        <span
                            onClick={() =>
                                removeCoupon({
                                    code: item.code,
                                    discount: item.discount
                                })
                            }
                            className='rounded-3xl hover:text-red-600 cursor-pointer'
                        >
                            <X className='size-4' />
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Voucher;
