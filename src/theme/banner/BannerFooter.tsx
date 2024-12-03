import React from 'react';

const BannerFooter = () => {
    return (
        <div className='grid mt-8 grid-cols-2 gap-x-6 max-w-screen-xl px-4 mx-auto'>
            <div
                className='bg-center bg-cover aspect-[16/7] rounded-xl'
                style={{
                    backgroundImage: 'url(/banner-1.jpg)'
                }}
            ></div>
            <div
                className='bg-center bg-cover aspect-[16/7] rounded-xl'
                style={{
                    backgroundImage: 'url(/banner-2.webp)'
                }}
            ></div>
        </div>
    );
};

export default BannerFooter;
