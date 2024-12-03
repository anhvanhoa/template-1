import React from 'react';
import Posts from './Posts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomePosts = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-6 mt-8'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold uppercase'>Bài viết hay</h3>
                <Button variant={'link'}>
                    Xem thêm
                    <ArrowRight />
                </Button>
            </div>
            <div className='grid grid-cols-4 gap-x-4 gap-y-12 py-4'>
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    );
};

export default HomePosts;
