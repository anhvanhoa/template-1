'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import useCheckout from '@/hooks/useCheckout';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useDebounceCallback } from 'usehooks-ts';

type Props = {
    max: number;
    quantity: number;
    id: number;
};

const Quantity = (props: Props) => {
    const { changeQuantity } = useCheckout();
    const [quantity, setQuantity] = React.useState(props.quantity);
    const handleQuantity = useDebounceCallback((quantity: number) => {
        changeQuantity({ id: props.id, quantity });
    }, 500);
    const increment = () => {
        setQuantity((prev) => prev + 1);
        handleQuantity(quantity + 1);
    };
    const decrement = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
        handleQuantity(Math.max(1, quantity - 1));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (quantity >= props.max || quantity <= 1) return;
        const value = Number(e.target.value);
        if (value > 0) setQuantity(value);
    };
    return (
        <div className='flex items-center border rounded-md overflow-hidden'>
            <span
                onClick={quantity <= 1 ? undefined : decrement}
                className={cn('p-1 cursor-pointer hover:bg-secondary select-none', {
                    'opacity-50 pointer-events-none': quantity <= 1
                })}
            >
                <MinusIcon className='size-3.5' />
            </span>
            <span className='border-x'>
                <Input
                    className='rounded-none border-none shadow-none h-auto text-xs py-0 w-10 text-center px-0'
                    value={quantity}
                    onChange={handleChange}
                />
            </span>
            <span
                onClick={quantity >= props.max ? undefined : increment}
                className={cn('p-1 cursor-pointer hover:bg-secondary select-none', {
                    'opacity-50 pointer-events-none': quantity >= props.max
                })}
            >
                <PlusIcon className='size-3.5' />
            </span>
        </div>
    );
};

export default Quantity;
