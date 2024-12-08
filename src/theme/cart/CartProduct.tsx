'use client';
import React from 'react';
import CartItem from './CartItem';
import { CartItemType } from '@/types/cart';
import { CheckedState } from '@radix-ui/react-checkbox';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useCheckout from '@/hooks/useCheckout';

const CartProduct = () => {
    const { addItem, removeItem, checkout } = useCheckout();
    const [selects, setSelects] = React.useState<CartItemType['id'][]>([]);
    const handleSelect = (check: CheckedState, data: CartItemType) => {
        if (check) {
            setSelects([...selects, data.id]);
            addItem(data);
        } else {
            removeItem(data);
            setSelects(selects.filter((item) => item !== data.id));
        }
    };
    const handleSelectAll = () => setSelects(checkout.cartItems.map((item) => item.id));
    const handleUnSelectAll = () => setSelects([]);

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>
                    Giỏ hàng của tôi ({checkout.cartItems.length})
                </h2>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant={'secondary'}
                            className='p-1.5 rounded-xl focus-visible:ring-0'
                        >
                            <Ellipsis className='!size-5' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align='end'
                        className='border-none shadow-xl rounded-xl'
                    >
                        <DropdownMenuItem
                            disabled={selects.length === checkout.cartItems.length}
                            onClick={handleSelectAll}
                            className='hover:!bg-transparent hover:!text-primary cursor-pointer'
                        >
                            Chọn tất cả
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            disabled={selects.length === 0}
                            onClick={handleUnSelectAll}
                            className='hover:!bg-transparent hover:!text-primary cursor-pointer'
                        >
                            Bỏ chọn tất cả
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='space-y-4'>
                {checkout.cartItems.map((product) => (
                    <CartItem
                        onCheck={(check) => handleSelect(check, product)}
                        isSelect
                        key={product.id}
                        checked={selects.includes(product.id)}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default CartProduct;
