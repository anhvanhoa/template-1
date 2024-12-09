import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FormatPrice from '@/theme/common/FormatPrice';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible';
import CartItem from '@/theme/cart/CartItem';
import { OrderType } from '@/types/order';
import Link from 'next/link';
import StatusOrder from './StatusOrder';

type OrderItemProps = {
    order: OrderType;
};

const OrderItem = ({ order }: OrderItemProps) => {
    return (
        <Card className='w-full py-4 px-6 border-none shadow-none bg-muted/80 rounded-2xl'>
            <div className='flex-1 space-y-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <span className='font-medium'>#{order.id}</span>
                    </div>
                    <Link href={`/tai-khoan/don-hang/${order.id}`}>
                        <Button variant='ghost' size='icon' className='h-8 w-8'>
                            <ExternalLink className='h-4 w-4' />
                        </Button>
                    </Link>
                </div>
                <div className='space-y-2 text-sm'>
                    <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>Trạng thái:</span>
                        <p>
                            <StatusOrder status={order.status} />
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>
                            Phương thức thanh toán:
                        </span>
                        <p>
                            <span className='uppercase text-muted-foreground'>
                                {order.methodPayment}
                            </span>
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>Thời gian đặt hàng:</span>
                        <p>
                            <span className='text-muted-foreground'>
                                {order.createdAt}
                            </span>
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-muted-foreground'>Tổng tiền:</span>
                        <p>
                            <FormatPrice
                                price={order.total}
                                className='text-primary font-semibold'
                            />
                        </p>
                    </div>
                </div>
                <Collapsible className='bg-white rounded-3xl overflow-hidden px-8 py-2'>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant='ghost'
                            className='w-full justify-between hover:bg-white py-0 h-8 px-0 text-sm text-primary hover:text-primary'
                        >
                            Chi tiết sản phẩm
                            <ChevronDown className='h-4 w-4' />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className='space-y-4 mt-4'>
                            {order.cartItems.map((product) => (
                                <CartItem isOrder key={product.id} product={product} />
                            ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </Card>
    );
};

export default OrderItem;
