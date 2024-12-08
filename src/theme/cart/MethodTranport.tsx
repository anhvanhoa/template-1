'use client';
import * as React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { SelectLabel } from '@radix-ui/react-select';
import useCheckout from '@/hooks/useCheckout';
import { MethodTransport } from '@/types/cart';

type MethodTranportType = {
    methodTranports: MethodTransport[];
};

const MethodTranport = ({ methodTranports }: MethodTranportType) => {
    const { setTransport, checkout } = useCheckout();
    return (
        <div className='mt-4 relative'>
            <p className='text-sm py-2'>Phương thức vận chuyển</p>
            <Select
                disabled={checkout.countProduct === 0}
                value={checkout.methodTransport}
                onValueChange={(value) => {
                    const transport = methodTranports.find(
                        (method) => method.id === value
                    );
                    setTransport({
                        methodPayment: transport?.id || '',
                        transport: transport?.price || 0
                    });
                }}
            >
                <SelectTrigger className='w-full shadow-none focus:ring-0'>
                    <SelectValue placeholder='Phương thức vận chuyển' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {methodTranports.map((method) => (
                            <SelectItem key={method.id} value={String(method.id)}>
                                <SelectLabel className='flex items-center space-x-2 justify-between'>
                                    <span>{method.name}</span>
                                    <span className='text-xs text-primary'>
                                        {method.price === 0
                                            ? '(Miễn phí)'
                                            : `(+${method.price.toLocaleString()}đ)`}
                                    </span>
                                </SelectLabel>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default MethodTranport;
