import Image from 'next/image';
import React from 'react';

type Header1Props = {
    logo?: string;
};

const Header1 = ({ logo }: Header1Props) => {
    return (
        <div className=''>
            <div>
                <Image src={logo || '/logo.png'} alt='logo' width={40} height={40} />
            </div>
        </div>
    );
};

export default Header1;
