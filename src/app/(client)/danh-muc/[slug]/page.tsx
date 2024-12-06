import Banner from '@/theme/banner';
import { ProductsCategory } from '@/theme/product';
import Filter from '@/theme/product/Filter';
import { BannerType } from '@/types/banner';
import React from 'react';

const banners: BannerType = {
    main: [
        {
            id: '1',
            title: 'Banner 1',
            description: 'Description 1',
            image: '/banner-1.jpg',
            link: '/banner1'
        },
        {
            id: '2',
            title: 'Banner 2',
            description: 'Description 2',
            image: '/banner-2.jpg',
            link: '/banner2'
        },
        {
            id: '3',
            title: 'Banner 3',
            description: 'Description 3',
            image: '/banner-2.webp',
            link: '/banner3'
        }
    ],
    sub: {
        id: '1',
        title: 'Banner 2',
        description: 'Description 2',
        image: '/sub-banner.jpg',
        link: '/banner2'
    }
};

const PageCategory = () => {
    return (
        <main>
            <Banner banners={banners} />
            <div className='max-w-screen-xl px-4 mx-auto mt-14 flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Điện thoại</h2>
                <Filter />
            </div>
            <ProductsCategory />
        </main>
    );
};

export default PageCategory;
