import { Button } from '@/components/ui/button';
import { ListPosts } from '@/theme/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categories = [
    {
        id: 1,
        name: 'Sản phẩm mới',
        slug: '/san-pham-moi'
    },
    {
        id: 2,
        name: 'Review sản phẩm',
        slug: '/review-san-pham'
    },
    {
        id: 3,
        name: 'Tin tức công nghệ',
        slug: '/tin-tuc-cong-nghe'
    }
];

const page = () => {
    return (
        <div className='max-w-screen-lg px-4 mx-auto'>
            <div className='py-8 border-b'>
                <h1 className='text-3xl font-semibold'>Bài viết</h1>
                <div className='flex items-center gap-x-6 mt-4'>
                    {categories.map((category) => (
                        <Button
                            variant={'link'}
                            key={category.id}
                            className='p-0 text-gray-700'
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-2 gap-x-12 max-w-screen-lg mt-8 mx-auto bg-muted p-4 rounded-3xl group'>
                <Link href={'/bai-viet/moiw'}>
                    <Image
                        src='/banner-1.jpg'
                        alt='banner'
                        className='aspect-video rounded-2xl'
                        width={1920}
                        height={400}
                    />
                </Link>
                <Link href={'/bai-viet/moiw'}>
                    <div className='space-y-3'>
                        <p className='text-gray-600'>Xuất bản: 12/12/2021</p>
                        <h2 className='text-2xl font-semibold line-clamp-2 group-hover:underline group-hover:decoration-primary'>
                            Thu thập Bí Ngô Crypto và chia sẻ Bí Ngô Crypto và chia sẻ
                            170.000.000đ
                        </h2>
                        <div className='text-gray-600'>
                            <p className='leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <ListPosts />
        </div>
    );
};

export default page;
