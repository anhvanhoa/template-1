'use client';
import useCheckout from '@/hooks/useCheckout';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const paymentMethods = [
    {
        id: 'cod',
        name: 'Thanh toán khi nhận hàng',
        image: '/cod.png'
    },
    {
        id: 'bank',
        name: 'Chuyển khoản ngân hàng',
        image: '/bank.png'
    }
];

const Payment = () => {
    const {checkout, setMethodPayment} = useCheckout()
    return (
        <div className='mt-4'>
            <p className='text-sm'>Phương thức thanh toán</p>
            <div className={cn('grid grid-cols-2 mt-2 gap-2', {
                'pointer-events-none': !checkout.countProduct
            })}>
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className={cn(
                            'cursor-pointer flex items-center gap-x-2 p-0.5 border rounded-md',
                            {
                                'border-primary': method.id === checkout.methodPayment
                            }
                        )}
                        onClick={() => setMethodPayment(method.id)}
                    >
                        <Image
                            src={method.image}
                            width={100}
                            height={100}
                            alt={method.name}
                            className='size-9 rounded-md'
                        />
                        <span className='text-xs'>{method.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Payment;
