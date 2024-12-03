import Image from 'next/image';
import React from 'react';

const Posts = () => {
    return (
        <div className='bg-gray-50 rounded-md'>
            <div className='h-40 bg-gray-300 rounded-t-lg'>
                <Image
                    src='/posts.png'
                    alt='posts'
                    className='rounded-t-lg object-cover'
                    width={300}
                    height={200}
                />
            </div>
            <div className='p-4'>
                <div className='flex items-center justify-between py-1'>
                    <p>
                        <span className='text-sm text-gray-500'>Tác giả: </span>
                        <span className='text-sm text-blue-500'>Admin</span>
                    </p>
                    <p className='text-sm text-gray-500'>2 days ago</p>
                </div>
                <h4 className='text-base line-clamp-2 font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed non
                </h4>
                <p className='text-gray-500 mt-1 text-sm line-clamp-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                    risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
                    ultricies sed, dolor.
                </p>
            </div>
        </div>
    );
};

export default Posts;
