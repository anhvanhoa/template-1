'use client';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import FormatPrice from '@/theme/common/FormatPrice';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    stock: number;
    sold: number;
    active: boolean;
    category: {
        id: string;
        name: string;
    };
}

export const columns: ColumnDef<Product>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => {
                    table.toggleAllPageRowsSelected(!!value);
                }}
                aria-label='Select all'
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'id',
        header: 'Sản phẩm',
        cell: ({ row }) => {
            const product = row.original;
            return (
                <div className='flex items-center gap-1.5 max-w-64'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        className='size-12 rounded-md object-cover'
                        width={100}
                        height={100}
                    />
                    <div>
                        <div className='line-clamp-1 font-medium'>{product.name}</div>
                        <div className='text-sm text-muted-foreground'>
                            ID: {product.id}
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        accessorKey: 'category',
        header: 'Danh mục',
        cell: ({ row }) => {
            return (
                <Badge
                    variant={'secondary'}
                    className='font-medium max-w-32 rounded-full'
                >
                    <span className='line-clamp-1'>{row.original.category.name}</span>
                </Badge>
            );
        }
    },
    {
        accessorKey: 'price',
        header: 'Giá',
        cell: ({ row }) => {
            return (
                <FormatPrice
                    className='text-primary font-medium'
                    price={row.original.price}
                />
            );
        }
    },
    {
        accessorKey: 'stock',
        header: 'Bán / Số lượng',
        cell: ({ row }) => {
            return (
                <div className='text-center  max-w-24'>
                    <i className='text-xs text-gray-500'>
                        {row.original.sold}/{row.original.stock}
                    </i>
                    <Progress
                        value={(row.original.sold / row.original.stock) * 100}
                        className='h-1.5 max-w-24'
                    />
                </div>
            );
        }
    },
    {
        accessorKey: 'active',
        header: 'Trạng thái',
        cell: ({ getValue }) => <Switch checked={getValue() as boolean} />
    },
    {
        accessorKey: 'actions',
        header: 'Thao tác',
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant='ghost'
                            className='h-8 w-8 p-0 focus-visible:ring-0'
                        >
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='!size-5' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='rounded-xl'>
                        <DropdownMenuItem
                            className='rounded-xl text-xs'
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Sao chép ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='rounded-xl text-xs'>Xem</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
];
