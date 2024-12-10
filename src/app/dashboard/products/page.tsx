import { Filter, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import React from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible';
import { columns, Product } from './_components/Columns';
import { DataTable } from './_components/DataTable';

const filterOptions = [
    {
        key: 'category',
        label: 'Danh mục',
        options: [
            {
                label: 'iPad',
                value: 'iPad'
            },
            {
                label: 'Macbook',
                value: 'Macbook'
            }
        ]
    },
    {
        key: 'status',
        label: 'Trạng thái',
        options: [
            {
                label: 'Hoạt động',
                value: 'active'
            },
            {
                label: 'Không hoạt động',
                value: 'inactive'
            }
        ]
    },
    {
        key: 'price',
        label: 'Giá',
        options: [
            {
                label: 'Dưới 5tr',
                value: 'under-5'
            },
            {
                label: '5tr - 10tr',
                value: '5-10'
            },
            {
                label: '10tr - 20tr',
                value: '10-20'
            },
            {
                label: 'Trên 20tr',
                value: 'above-20'
            }
        ]
    },
    {
        key: 'stock',
        label: 'Số lượng',
        options: [
            {
                label: 'Dưới 100',
                value: 'under-100'
            },
            {
                label: '100 - 500',
                value: '100-500'
            },
            {
                label: '500 - 1000',
                value: '500-1000'
            },
            {
                label: 'Trên 1000',
                value: 'above-1000'
            }
        ]
    }
];

const PageProducts = () => {
    const products: Product[] = [
        {
            id: 'Q8794M1',
            name: 'Oversized Heritage Washed',
            image: '/pro-1.png',
            price: 6415,
            stock: 15,
            active: false,
            sold: 5,
            category: {
                id: 'Q8794M1',
                name: 'Sweatshirt With'
            }
        },
        {
            id: 'Q7642M5',
            name: 'Sweatshirt With Hood',
            image: '/pro-2.png',
            price: 7434,
            stock: 583,
            sold: 60,
            active: true,
            category: {
                id: 'Q8794M1',
                name: 'Sweatshirt With'
            }
        },
        {
            id: 'Q6473M8',
            name: 'Soft and Light Break',
            image: '/pro-1.png',
            price: 5421,
            stock: 703,
            sold: 10,
            active: true,
            category: {
                id: 'Q8794M1',
                name: 'Sweatshirt With'
            }
        },
        {
            id: 'Q1234M4',
            name: 'Comfortable Hoodie',
            image: '/pro-2.png',
            price: 4500,
            stock: 120,
            sold: 30,
            active: true,
            category: {
                id: 'Q1234M4',
                name: 'Hoodies'
            }
        },
        {
            id: 'Q9876M9',
            name: 'Classic Round Neck',
            image: '/pro-1.png',
            price: 3299,
            stock: 50,
            sold: 12,
            active: false,
            category: {
                id: 'Q9876M9',
                name: 'T-Shirts'
            }
        },
        {
            id: 'Q5647M2',
            name: 'Relaxed Fit Sweatpants',
            image: '/pro-2.png',
            price: 5499,
            stock: 85,
            sold: 20,
            active: true,
            category: {
                id: 'Q5647M2',
                name: 'Pants'
            }
        },
        {
            id: 'Q3478M7',
            name: 'Striped Casual Shirt',
            image: '/pro-1.png',
            price: 6700,
            stock: 40,
            sold: 18,
            active: true,
            category: {
                id: 'Q3478M7',
                name: 'Shirts'
            }
        },
        {
            id: 'Q2384M1',
            name: 'Cotton Polo T-Shirt',
            image: '/pro-2.png',
            price: 3999,
            stock: 200,
            sold: 75,
            active: true,
            category: {
                id: 'Q2384M1',
                name: 'T-Shirts'
            }
        },
        {
            id: 'Q1294M5',
            name: 'Slim Fit Denim Jeans',
            image: '/pro-1.png',
            price: 7999,
            stock: 30,
            sold: 5,
            active: false,
            category: {
                id: 'Q1294M5',
                name: 'Jeans'
            }
        },
        {
            id: 'Q8547M4',
            name: 'Casual Bomber Jacket',
            image: '/pro-2.png',
            price: 11999,
            stock: 25,
            sold: 8,
            active: true,
            category: {
                id: 'Q8547M4',
                name: 'Jackets'
            }
        },
        {
            id: 'Q3471M3',
            name: 'Woolen Cardigan',
            image: '/pro-1.png',
            price: 8999,
            stock: 40,
            sold: 10,
            active: true,
            category: {
                id: 'Q3471M3',
                name: 'Cardigans'
            }
        },
        {
            id: 'Q1987M2',
            name: 'Crew Neck Sweatshirt',
            image: '/pro-2.png',
            price: 6599,
            stock: 55,
            sold: 25,
            active: true,
            category: {
                id: 'Q1987M2',
                name: 'Sweatshirts'
            }
        },
        {
            id: 'Q8714M6',
            name: 'Sports Joggers',
            image: '/pro-1.png',
            price: 4999,
            stock: 150,
            sold: 70,
            active: true,
            category: {
                id: 'Q8714M6',
                name: 'Joggers'
            }
        },
        {
            id: 'Q4321M7',
            name: 'Heavy Duty Work Pants',
            image: '/pro-2.png',
            price: 8999,
            stock: 60,
            sold: 15,
            active: false,
            category: {
                id: 'Q4321M7',
                name: 'Pants'
            }
        },
        {
            id: 'Q9654M8',
            name: 'Lightweight Windbreaker',
            image: '/pro-1.png',
            price: 12500,
            stock: 20,
            sold: 10,
            active: true,
            category: {
                id: 'Q9654M8',
                name: 'Jackets'
            }
        },
        {
            id: 'Q3564M9',
            name: 'Cozy Knit Sweater',
            image: '/pro-2.png',
            price: 7500,
            stock: 35,
            sold: 8,
            active: true,
            category: {
                id: 'Q3564M9',
                name: 'Sweaters'
            }
        },
        {
            id: 'Q2874M0',
            name: 'Casual Plaid Shirt',
            image: '/pro-1.png',
            price: 6800,
            stock: 95,
            sold: 50,
            active: true,
            category: {
                id: 'Q2874M0',
                name: 'Shirts'
            }
        },
        {
            id: 'Q1345M8',
            name: 'Vintage Denim Jacket',
            image: '/pro-2.png',
            price: 13499,
            stock: 10,
            sold: 3,
            active: false,
            category: {
                id: 'Q1345M8',
                name: 'Jackets'
            }
        },
        {
            id: 'Q6543M7',
            name: 'High-Neck Pullover',
            image: '/pro-1.png',
            price: 7999,
            stock: 20,
            sold: 5,
            active: true,
            category: {
                id: 'Q6543M7',
                name: 'Pullovers'
            }
        },
        {
            id: 'Q9123M4',
            name: 'Oversized Hoodie',
            image: '/pro-2.png',
            price: 9999,
            stock: 15,
            sold: 7,
            active: true,
            category: {
                id: 'Q9123M4',
                name: 'Hoodies'
            }
        }
    ];

    return (
        <div>
            <div className='bg-background p-3 rounded-lg'>
                <Collapsible>
                    <div className='flex items-center gap-4'>
                        <div className='relative flex-1 bg-muted rounded-full overflow-hidden'>
                            <Search className='text-primary absolute left-2.5 top-2.5 h-4 w-4' />
                            <Input
                                placeholder='Tìm kiếm sản phẩm'
                                className='pl-8 bg-transparent border-none shadow-none'
                            />
                        </div>
                        <Select defaultValue='all'>
                            <SelectTrigger className='w-[180px] focus:ring-0 shadow-none border-none bg-muted rounded-full'>
                                <SelectValue placeholder='Trạng thái' />
                            </SelectTrigger>
                            <SelectContent className='rounded-xl border-none'>
                                <SelectItem className='rounded-xl' value='all'>
                                    Tất cả
                                </SelectItem>
                                <SelectItem className='rounded-xl' value='active'>
                                    Hoạt động
                                </SelectItem>
                                <SelectItem className='rounded-xl' value='inactive'>
                                    Không hoạt động
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant='outline'
                                className='border-primary rounded-full font-normal text-primary hover:bg-primary/5 bg-primary/10 hover:text-primary'
                            >
                                <Filter className='h-4 w-4' />
                                Lọc
                            </Button>
                        </CollapsibleTrigger>
                        <Button className='rounded-full hover:bg-primary/90'>
                            <Plus className='h-4 w-4' />
                            Thêm sản phẩm
                        </Button>
                    </div>
                    <CollapsibleContent>
                        <div className='border-t grid grid-cols-4 items-center gap-x-6 mt-3 pt-3'>
                            {filterOptions.map((filter) => (
                                <Select key={filter.key}>
                                    <SelectTrigger className='focus:ring-0 rounded-full shadow-none'>
                                        <SelectValue placeholder={filter.label} />
                                    </SelectTrigger>
                                    <SelectContent className='rounded-xl'>
                                        {filter.options.map((option) => (
                                            <SelectItem
                                                key={option.value}
                                                className='rounded-xl'
                                                value={option.value}
                                            >
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            ))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className='mt-6 bg-background rounded-xl'>
                <DataTable columns={columns} data={products} />
            </div>
        </div>
    );
};

export default PageProducts;
