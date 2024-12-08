import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const FormAvatar = () => {
    return (
        <div className='grid bg-gray-50 py-4 rounded-2xl'>
            <div className='grid justify-center items-center'>
                <Avatar className='size-14 mx-auto'>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Label
                    htmlFor='avatar'
                    className='px-3 py-1.5 mt-2 rounded-full bg-primary text-white text-xs cursor-pointer hover:bg-primary/90'
                >
                    <Input id='avatar' type='file' className='hidden' />
                    Thay đổi
                </Label>
            </div>
        </div>
    );
};

export default FormAvatar;
