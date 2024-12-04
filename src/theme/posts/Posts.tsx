import { PostType } from '@/types/posts';
import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';

type PostsProps = {
    posts: PostType;
};

const Posts = ({ posts }: PostsProps) => {
    return (
        <div className='bg-gray-50 rounded-md'>
            <div className='h-40 bg-gray-300 rounded-t-lg'>
                <Image
                    src={posts.image}
                    alt={posts.title}
                    className='rounded-t-lg object-cover'
                    width={300}
                    height={200}
                />
            </div>
            <div className='p-4'>
                <div className='flex items-center justify-between py-1'>
                    <p>
                        <span className='text-sm text-gray-500'>Tác giả: </span>
                        <span className='text-sm text-blue-500'>{posts.author}</span>
                    </p>
                    {/* 2 gio truoc */}
                    <p className='text-sm text-gray-500'>
                        {format(new Date(posts.date), 'dd/MM/yyyy')}
                    </p>
                </div>
                <h4 className='text-base line-clamp-2 font-semibold'>{posts.title}</h4>
                <p className='text-gray-500 mt-1 text-sm line-clamp-3'>
                    {posts.description}
                </p>
            </div>
        </div>
    );
};

export default Posts;
