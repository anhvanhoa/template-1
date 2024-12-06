import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { FilterIcon } from 'lucide-react';

const sorts = [
    {
        id: '1',
        title: 'Giá: thấp đến cao',
        key: 'price-asc'
    },
    {
        id: '2',
        title: 'Giá: cao đến thấp',
        key: 'price-desc'
    },
    {
        id: '3',
        title: 'Mới nhất',
        key: 'newest'
    }
];

const filters = [
    {
        id: 1,
        name: 'Hãng',
        options: [
            {
                id: 1,
                name: 'Apple'
            },
            {
                id: 2,
                name: 'Samsung'
            },
            {
                id: 3,
                name: 'Xiaomi'
            }
        ]
    },
    {
        id: 2,
        name: 'Màu sắc',
        options: [
            {
                id: 1,
                name: 'Đen'
            },
            {
                id: 2,
                name: 'Trắng'
            },
            {
                id: 3,
                name: 'Xanh'
            },
            {
                id: 4,
                name: 'Vàng'
            }
        ]
    }
];

const Filter = () => {
    return (
        <div className='flex items-center gap-x-3'>
            <Select>
                <SelectTrigger className='hover:text-primary shadow-none gap-2 rounded-full focus:ring-0 hover:border-primary transition-all'>
                    <SelectValue placeholder='Sắp xếp' />
                </SelectTrigger>
                <SelectContent side='left'>
                    {sorts.map((sort) => (
                        <SelectItem
                            className='cursor-pointer'
                            key={sort.id}
                            value={sort.key}
                        >
                            {sort.title}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className='rounded-full'>
                        <FilterIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    side='bottom'
                    align='end'
                    sideOffset={10}
                    className='rounded-xl w-full'
                >
                    <div
                        className='grid gap-x-8'
                        style={{
                            gridTemplateColumns: `repeat(${
                                filters.length > 1 ? 2 : 1
                            }, minmax(200px, 1fr))`
                        }}
                    >
                        {filters.map((filter) => (
                            <div key={filter.id}>
                                <p className='text-sm'>{filter.name}</p>
                                <div className='flex items-center gap-3 mt-2.5'>
                                    {filter.options.map((option) => (
                                        <Button
                                            key={option.id}
                                            size='sm'
                                            variant={'secondary'}
                                            className='py-1.5 rounded-full hover:bg-primary hover:text-white transition-all'
                                        >
                                            {option.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Filter;
