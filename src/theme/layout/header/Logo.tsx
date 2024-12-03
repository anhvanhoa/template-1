import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Image
                className='rounded-md size-9'
                src='/logo.png'
                alt='Logo'
                width={50}
                height={50}
            />
        </div>
    );
};

export default Logo;
