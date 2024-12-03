'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, EllipsisVertical } from 'lucide-react';
import React from 'react';

type PropsBrowser = {
    children: React.ReactNode;
};

const Browser = ({ children }: PropsBrowser) => {
    return (
        <div>
            <TabMac />
            <div>{children}</div>
        </div>
    );
};

export default Browser;

const TabMac = () => {
    return (
        <div className='px-3 py-1.5 bg-[#FBFBFB] rounded-ss-lg rounded-se-lg grid grid-cols-3 border-x border-t'>
            <div className='flex items-center gap-x-8'>
                <div className='flex items-center gap-x-1 *:cursor-pointer'>
                    <span className='block size-2.5 rounded-full bg-red-500'></span>
                    <span className='block size-2.5 rounded-full bg-yellow-500'></span>
                    <span className='block size-2.5 rounded-full bg-green-500'></span>
                </div>
                <div className='flex items-center gap-x-3'>
                    <ChevronLeft className='size-4' />
                    <ChevronRight className='size-4' />
                </div>
            </div>
            <div>
                <div className='border py-1 rounded-md flex items-center justify-center gap-x-1'>
                    <span className='text-sm text-gray-500'>https://www.google.com</span>
                </div>
            </div>
            <div className='grid justify-end items-center'>
                <Button
                    title='settings'
                    size={'sm'}
                    className='p-1 h-auto'
                    variant={'ghost'}
                >
                    <EllipsisVertical />
                </Button>
            </div>
        </div>
    );
};
