import React from 'react';
import { Folder, Tree, TreeViewElement } from '@/components/ui/file-tree';
import { CircleDot } from 'lucide-react';
import { cn } from '@/lib/utils';

const listStatus = [
    {
        name: 'Đã giao',
        color: 'green'
    },
    {
        name: 'Đang giao',
        color: '#2563eb'
    },
    {
        name: 'Chờ xác nhận',
        color: '#ea580c'
    },
    {
        name: 'Đã hủy',
        color: '#dc2626'
    },
    {
        name: 'Đã trả hàng',
        color: '#374151'
    }
];

type TrackOrderType = {
    time: string;
    note: string;
} & TreeViewElement;

type PackageOpenProps = {
    tracks: TrackOrderType[];
};

const TrackOrder = ({ tracks }: PackageOpenProps) => {
    const initialExpandedItems = tracks.map((track) => track.id);
    const getStyle = (name: string) => {
        return {
            color: listStatus.find(
                (status) => status.name.toUpperCase() === name.toUpperCase()
            )?.color
        };
    };

    return (
        <div className='relative flex flex-col items-center justify-center bg-background'>
            <Tree
                initialExpandedItems={initialExpandedItems}
                className='rounded-md bg-background'
            >
                {tracks.map((track) => (
                    <Folder
                        className={cn('gap-3 font-semibold')}
                        IconClose={
                            <CircleDot className='size-4' style={getStyle(track.name)} />
                        }
                        IconOpen={
                            <CircleDot className='size-4' style={getStyle(track.name)} />
                        }
                        indicatorClassName={'ml-0.5 mt-0.5'}
                        key={track.id}
                        element={track.name}
                        value={track.id}
                    >
                        <div className='ml-3 flex flex-col items-start space-y-1 py-3'>
                            <p>{track.note}</p>
                            <p className='text-gray-500'>{track.time}</p>
                        </div>
                    </Folder>
                ))}
            </Tree>
        </div>
    );
};

export default TrackOrder;
