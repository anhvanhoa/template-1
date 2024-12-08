'use client';
import { Button } from '@/components/ui/button';
import useCheckout from '@/hooks/useCheckout';
import React, { useMemo, useState } from 'react';
import FormatPrice from '../common/FormatPrice';
import AlertCheckout from './AlertCheckout';

const InforCheckout = () => {
    const [success, setSuccess] = useState(false);
    const { checkout } = useCheckout();
    const isOrder = useMemo(() => {
        const isError = Object.values(checkout.errors).some((item) => !item);
        return !Boolean(
            checkout.address.name &&
                checkout.address.phone &&
                checkout.address.detail &&
                isError &&
                checkout.countProduct
        );
    }, [
        checkout.address.detail,
        checkout.address.name,
        checkout.address.phone,
        checkout.errors,
        checkout.countProduct
    ]);
    const handleCheckout = () => {
        setSuccess(true);
    };
    return (
        <div>
            {success && <AlertCheckout />}
            <div className='pt-6 mt-8 px-2 border-t space-y-2'>
                <p className='flex items-center justify-between text-sm'>
                    <span>Tổng sản phẩm:</span> <span>{checkout.countProduct}</span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span>Tạm tính:</span>
                    <span>
                        <FormatPrice price={checkout.provisional} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span>Giảm giá:</span>
                    <span>
                        <FormatPrice price={checkout.discount} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span>Phiếu giảm giá:</span>
                    <span>
                        <FormatPrice price={checkout.discountCoupon} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span>Vận chuyển:</span>
                    <span>
                        <FormatPrice price={checkout.transport} />
                    </span>
                </p>
                <p className='flex items-center justify-between text-sm'>
                    <span>Tổng tiền:</span>
                    <span className='text-primary text-base font-medium'>
                        <FormatPrice price={checkout.total} />
                    </span>
                </p>
            </div>
            <div className='mt-6 mx-4'>
                <Button
                    onClick={handleCheckout}
                    disabled={isOrder}
                    className='w-full rounded-full py-2'
                >
                    Thanh toán
                </Button>
            </div>
        </div>
    );
};

export default InforCheckout;
