'use client';
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible';
import Link from 'next/link';
import useCheckout from '@/hooks/useCheckout';
import FormatPrice from '../common/FormatPrice';
import { format } from 'date-fns';

const AlertCheckout = () => {
    const { checkout } = useCheckout();
    useEffect(() => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];
        const frame = () => {
            if (Date.now() > end) return;
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors
            });
            requestAnimationFrame(frame);
        };
        frame();
    }, []);
    return (
        <Dialog defaultOpen>
            <DialogContent className='bg-gray-100'>
                <DialogHeader className='sr-only'>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                </DialogHeader>
                <div className='flex items-center justify-center'>
                    <Card className='w-full max-w-md bg-transparent border-none shadow-none'>
                        <CardHeader className='text-center space-y-4 pt-8 bg-white rounded-2xl'>
                            <div className='mx-auto bg-green-50 size-12 rounded-full flex items-center justify-center'>
                                <Check className='w-8 h-8 text-green-500' />
                            </div>
                            <div className='space-y-1'>
                                <h2 className='text-gray-600'>Đặt hàng thành công</h2>
                                <p className='text-2xl font-bold text-primary'>
                                    <FormatPrice price={checkout.total} />
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className='space-y-2 mt-2 p-0'>
                            <Collapsible
                                defaultOpen
                                className='w-full bg-white rounded-2xl px-4'
                            >
                                <div className='flex items-center justify-between py-4'>
                                    <h3 className='text-base font-semibold'>
                                        Chi tiết đơn hàng
                                    </h3>
                                    <CollapsibleTrigger asChild>
                                        <Button
                                            variant='ghost'
                                            size='sm'
                                            className='p-0 hover:bg-transparent'
                                        >
                                            <ChevronDown className='h-4 w-4' />
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className='space-y-4 pb-4'>
                                    <div className='grid grid-cols-2 gap-2 text-sm'>
                                        <span className='text-gray-600'>Mã đơn hàng</span>
                                        <span className='text-right font-medium'>
                                            {checkout.id || 'XFGHHDJSKD2423'}
                                        </span>
                                        <span className='text-gray-600'>
                                            Phương thức thanh toán
                                        </span>
                                        <span className='text-right font-medium flex items-center justify-end gap-1'>
                                            {checkout.methodPayment}
                                        </span>

                                        <span className='text-gray-600'>
                                            Thời gian đặt
                                        </span>
                                        <span className='text-right font-medium'>
                                            {format(new Date(), 'dd-MM-yyyy, HH:mm:s')}
                                        </span>

                                        <span className='text-gray-600'>Tổng tiền</span>
                                        <span className='text-right font-medium'>
                                            <FormatPrice price={checkout.total} />
                                        </span>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <div className='w-full justify-between text-left font-normal bg-white rounded-2xl p-4 h-auto'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                                        <HelpCircle className='w-4 h-4 text-gray-600' />
                                    </div>
                                    <div>
                                        <p className='text-sm font-medium'>
                                            Cần hỗ trợ ?
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            Vui lòng liên hệ với chúng tôi
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link href={'/'} className='w-full block'>
                                <Button className='w-full rounded-full'>
                                    Theo dọi đơn hàng
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AlertCheckout;
