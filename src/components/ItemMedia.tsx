import { Media } from '@/types/media';
import Image from 'next/image';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Skeleton } from './ui/skeleton';
import { ClapperboardIcon, ImageIcon } from 'lucide-react';

type ItemMediaProps = {
    medias?: Media[];
    limit: number;
    onSelect: (media: Media) => void;
    selects: Media[];
};

const ItemMedia = ({ medias, limit, onSelect, selects }: ItemMediaProps) => {
    return (
        <div>
            {medias && (
                <div className='grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 grid-rows-2 lg:gap-1 gap-0.5'>
                    {medias.map((item) => (
                        <div
                            onClick={() => onSelect(item)}
                            key={item.id}
                            className='relative aspect-square rounded-lg'
                        >
                            <span className='absolute left-1 top-1'>
                                {item.type === 'image' && (
                                    <ImageIcon className='text-white size-4' />
                                )}
                                {item.type === 'video' && (
                                    <ClapperboardIcon className='text-white size-4' />
                                )}
                            </span>
                            <p className='absolute bottom-2 left-1/2 -translate-x-1/2 text-xs bg-background/10 backdrop-blur-sm px-1.5 py-0.5 rounded-full text-background'>
                                {item.name}
                            </p>
                            <Image
                                src={item.url}
                                alt={item.name}
                                className='size-full object-cover rounded-lg'
                                width={300}
                                height={300}
                            />
                            <Checkbox
                                checked={
                                    selects.find((i) => i.id === item.id) !== undefined
                                }
                                className='rounded-full bg-white/10 backdrop-blur-sm absolute right-1 top-1'
                            />
                        </div>
                    ))}
                </div>
            )}
            {(!medias || medias.length === 0) && <SkeletonMedia limit={limit} />}
        </div>
    );
};

export default ItemMedia;

function SkeletonMedia({ limit }: { limit: number }) {
    return (
        <div className='grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 grid-rows-2 lg:gap-1 gap-0.5'>
            {Array.from({
                length: limit
            }).map((_, i) => (
                <Skeleton
                    key={i}
                    className='aspect-square rounded-2xl bg-gray-200'
                ></Skeleton>
            ))}
        </div>
    );
}

export { SkeletonMedia };
