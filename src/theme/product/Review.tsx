import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const sorts = [
    {
        id: 'star-5',
        name: '5 sao'
    },
    {
        id: 'star-4',
        name: '4 sao'
    },
    {
        id: 'star-3',
        name: '3 sao'
    },
    {
        id: 'star-2',
        name: '2 sao'
    },
    {
        id: 'star-1',
        name: '1 sao'
    }
];

const reviews = [
    {
        id: 1,
        stars: 5,
        content: 'Giày chạy bộ xuất sắc. Nó bám rất chặt vào chân.',
        media: ['/pro-1.png', '/pro-2.png'],
        user: {
            name: 'Helen M.',
            avatar: '/placeholder.svg'
        },
        date: 'Hôm qua'
    },
    {
        id: 2,
        stars: 4,
        content: 'Giày tốt',
        media: ['/pro-1.png'],
        user: {
            name: 'Ann H.',
            avatar: '/placeholder.svg'
        },
        date: '2 ngày trước'
    }
];

const genName = (name: string) => {
    const nameArr = name.split(' ');
    let res = '';
    // first name
    res += nameArr[0].slice(0, 1);
    // last name
    res += nameArr[nameArr.length - 1].slice(0, 1);
    return res;
};

const Review = () => {
    const statistical = reviews.reduce(
        (curr, item) => {
            return curr.map((stat) => {
                if (stat.stars === Math.floor(item.stars)) {
                    return {
                        ...stat,
                        count: stat.count + 1
                    };
                }
                return stat;
            });
        },
        [
            { count: 0, stars: 5 },
            {
                count: 0,
                stars: 4
            },
            {
                count: 0,
                stars: 3
            },
            {
                count: 0,
                stars: 2
            },
            {
                count: 0,
                stars: 1
            }
        ]
    );
    const total = reviews.length;
    const starsAvg = reviews.reduce((curr, item) => curr + item.stars, 0) / total;
    return (
        <div className='grid md:grid-cols-3 gap-20 mt-2'>
            <div className='space-y-6 col-span-2'>
                <div className='flex items-center justify-between'>
                    <h3 className='uppercase text-xl'>Đánh giá sản phẩm</h3>
                    <Select defaultValue='star-5'>
                        <SelectTrigger className='focus:ring-0 max-w-36 shadow-none'>
                            <SelectValue placeholder='Sort by' />
                        </SelectTrigger>
                        <SelectContent>
                            {sorts.map((sort) => (
                                <SelectItem key={sort.id} value={sort.id}>
                                    {sort.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className='space-y-4'>
                    {reviews.map((review) => (
                        <div key={review.id} className='flex gap-4 items-start'>
                            <Avatar className='w-10 h-10'>
                                <AvatarImage src={review.user.avatar} />
                                <AvatarFallback>
                                    {genName(review.user.name)}
                                </AvatarFallback>
                            </Avatar>
                            <div className='space-y-1'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-medium'>
                                        {review.user.name}
                                    </span>
                                    <span className='text-sm text-muted-foreground'>
                                        {review.date}
                                    </span>
                                </div>
                                <div className='flex gap-0.5'>
                                    {Array(5)
                                        .fill(null)
                                        .map((_, i) => (
                                            <Star
                                                key={i}
                                                className={cn(
                                                    'w-4 h-4 text-muted-foreground fill-muted-foreground',
                                                    {
                                                        'fill-primary text-primary':
                                                            i < review.stars
                                                    }
                                                )}
                                            />
                                        ))}
                                </div>
                                <div className='flex items-end gap-x-3 py-2'>
                                    {review.media.map((media, i) => (
                                        <div key={i} className='relative w-16 h-16'>
                                            <Image
                                                src={media}
                                                alt='media'
                                                width={100}
                                                height={100}
                                                className='rounded-md border object-cover'
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className='text-sm'>{review.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='space-y-6 sticky top-6'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <div className='flex gap-0.5'>
                                {Array(5)
                                    .fill(null)
                                    .map((_, i) => (
                                        <Star
                                            key={i}
                                            className='w-5 h-5 fill-primary text-primary'
                                        />
                                    ))}
                            </div>
                            <span className='text-2xl font-bold'>{starsAvg}</span>
                        </div>
                        <div className='space-y-2'>
                            {statistical.map(({ stars, count }) => (
                                <div key={stars} className='flex items-center gap-2'>
                                    <span className='text-sm w-3'>{stars}</span>
                                    <div className='h-2 bg-muted rounded-full flex-1 overflow-hidden'>
                                        <div
                                            className='h-full bg-primary rounded-full'
                                            style={{
                                                width: `${(count / total) * 100}%`
                                            }}
                                        />
                                    </div>
                                    <span className='text-sm w-6'>{count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
