import React from 'react';

type Props = {
    price: number | string | undefined;
    className?: string;
};

const FormatPrice = ({ price }: Props) => {
    const res = new Intl.NumberFormat('vi-VN', {
        style: 'decimal'
    }).format(Number(price || 0));
    return (
        <span>
            {res}
            <sup className='pl-0.5'>&#8363;</sup>
        </span>
    );
};

export default FormatPrice;