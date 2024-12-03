'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import React from 'react';

const max = 10;

const Quantity = () => {
    const [quantity, setQuantity] = React.useState(1);
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (quantity >= max || quantity <= 1) return;
        const value = Number(e.target.value);
        if (value > 0) setQuantity(value);
    };
    return (
        <div className='flex items-center border rounded-md overflow-hidden'>
            <span
                onClick={quantity >= max ? undefined : increment}
                className={cn('p-1 cursor-pointer hover:bg-secondary select-none', {
                    'opacity-50 pointer-events-none': quantity >= max
                })}
            >
                <PlusIcon className='size-3.5' />
            </span>
            <span className='border-x'>
                <Input
                    className='rounded-none border-none shadow-none h-auto text-xs py-0 w-10 text-center px-0'
                    value={quantity}
                    onChange={handleChange}
                />
            </span>
            <span
                onClick={quantity <= 1 ? undefined : decrement}
                className={cn('p-1 cursor-pointer hover:bg-secondary select-none', {
                    'opacity-50 pointer-events-none': quantity <= 1
                })}
            >
                <MinusIcon className='size-3.5' />
            </span>
        </div>
    );
};

export default Quantity;
