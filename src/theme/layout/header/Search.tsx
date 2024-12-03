import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react';

const Search = () => {
    return (
        <div className='flex items-center bg-gray-50 rounded-full overflow-hidden pl-3 pr-1 py-0.5'>
            <Input placeholder='Tìm kiếm' className='rounded-full border-none shadow-none px-1' />
            <Button variant={'ghost'} size={'sm'} className='p-2 rounded-full hover:bg-primary/10'>
                <SearchIcon className='size-5 text-primary' />
            </Button>
        </div>
    );
};

export default Search;
