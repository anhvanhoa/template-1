'use client';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import React, { useId } from 'react';
import FormatPrice from '../common/FormatPrice';
import Quantity from '../layout/header/Quantity';
import { CartItemType } from '@/types/cart';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';

type CartItemProps = {
    product: CartItemType;
    isSelect?: boolean;
    checked?: boolean;
    onCheck?: (checked: CheckedState) => void;
};

const CartItem = ({ product, isSelect, checked, onCheck }: CartItemProps) => {
    const id = useId();
    return (
        <div className='border-b last:border-b-0 pb-4 flex gap-4'>
            <div className='flex items-center gap-x-2'>
                {isSelect && (
                    <Checkbox id={id} onCheckedChange={onCheck} checked={checked} />
                )}
                <Label htmlFor={id}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                        className='size-20 object-cover border rounded-xl'
                    />
                </Label>
            </div>
            <div className='text-sm flex-1 space-y-1.5'>
                <div className='flex items-center justify-between'>
                    <h4 className='line-clamp-1'>{product.name}</h4>
                    <Button
                        variant='ghost'
                        className='text-red-500 p-1 hover:text-red-500'
                    >
                        <Trash />
                    </Button>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-x-3'>
                        <FormatPrice
                            className='text-primary font-medium'
                            price={product.priceSell}
                        />
                        <FormatPrice
                            className='line-through text-gray-500'
                            price={product.price}
                        />
                    </p>
                    <Quantity
                        id={product.id}
                        max={product.quantityMax}
                        quantity={product.quantity}
                    />
                </div>
                <p className='text-muted-foreground'>
                    {product.variant
                        .map((variant) => `${variant.name}: ${variant.value}`)
                        .join(', ')}
                </p>
            </div>
        </div>
    );
};

export default CartItem;
