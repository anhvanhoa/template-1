'use client';
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Check, Clapperboard, Trash, Upload, X } from 'lucide-react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Media } from '@/types/media';
import dynamic from 'next/dynamic';
import { SkeletonMedia } from './ItemMedia';
const ItemMedia = dynamic(() => import('./ItemMedia'), {
    ssr: false,
    loading: () => <SkeletonMedia limit={14} />
});

type MediaType = 'photo' | 'video';

type ManagerMediaProps = {
    children?: React.ReactNode;
    getImages?: (images: Media[]) => void;
    maxSelect?: number;
    types?: MediaType[];
};

const mediaApi = {
    photos: [
        [
            {
                id: 1,
                url: 'https://picsum.photos/id/1/300',
                type: 'image',
                name: 'pro-1.png'
            },
            {
                id: 2,
                url: 'https://picsum.photos/id/2/300',
                type: 'image',
                name: 'pro-2.png'
            },
            {
                id: 3,
                url: 'https://picsum.photos/id/3/300',
                type: 'image',
                name: 'pro-3.png'
            },
            {
                id: 4,
                url: 'https://picsum.photos/id/4/300',
                type: 'image',
                name: 'pro-4.png'
            },
            {
                id: 5,
                url: 'https://picsum.photos/id/5/300',
                type: 'image',
                name: 'pro-5.png'
            },
            {
                id: 6,
                url: 'https://picsum.photos/id/6/300',
                type: 'image',
                name: 'pro-6.png'
            },
            {
                id: 7,
                url: 'https://picsum.photos/id/7/328',
                type: 'image',
                name: 'pro-7.png'
            },
            {
                id: 8,
                url: 'https://picsum.photos/id/8/300',
                type: 'image',
                name: 'pro-8.png'
            },
            {
                id: 9,
                url: 'https://picsum.photos/id/9/300',
                type: 'image',
                name: 'pro-9.png'
            },
            {
                id: 10,
                url: 'https://picsum.photos/id/10/300',
                type: 'image',
                name: 'pro-10.png'
            },
            {
                id: 11,
                url: 'https://picsum.photos/id/11/300',
                type: 'image',
                name: 'pro-1.png'
            },
            {
                id: 12,
                url: 'https://picsum.photos/id/12/300',
                type: 'image',
                name: 'pro-2.png'
            },
            {
                id: 13,
                url: 'https://picsum.photos/id/13/300',
                type: 'image',
                name: 'pro-3.png'
            },
            {
                id: 14,
                url: 'https://picsum.photos/id/14/300',
                type: 'image',
                name: 'pro-4.png'
            }
        ]
    ],
    videos: [
        [
            {
                id: 29,
                url: 'https://picsum.photos/id/29/300',
                type: 'video',
                name: 'pro-1.png'
            },
            {
                id: 30,
                url: 'https://picsum.photos/id/30/300',
                type: 'video',
                name: 'pro-2.png'
            },
            {
                id: 31,
                url: 'https://picsum.photos/id/31/300',
                type: 'video',
                name: 'pro-3.png'
            },
            {
                id: 32,
                url: 'https://picsum.photos/id/32/300',
                type: 'video',
                name: 'pro-4.png'
            },
            {
                id: 33,
                url: 'https://picsum.photos/id/33/300',
                type: 'video',
                name: 'pro-5.png'
            },
            {
                id: 34,
                url: 'https://picsum.photos/id/34/300',
                type: 'video',
                name: 'pro-6.png'
            },
            {
                id: 35,
                url: 'https://picsum.photos/id/35/328',
                type: 'video',
                name: 'pro-7.png'
            },
            {
                id: 36,
                url: 'https://picsum.photos/id/36/300',
                type: 'video',
                name: 'pro-8.png'
            },
            {
                id: 37,
                url: 'https://picsum.photos/id/37/300',
                type: 'video',
                name: 'pro-9.png'
            },
            {
                id: 38,
                url: 'https://picsum.photos/id/38/300',
                type: 'video',
                name: 'pro-10.png'
            },
            {
                id: 39,
                url: 'https://picsum.photos/id/39/300',
                type: 'video',
                name: 'pro-1.png'
            },
            {
                id: 40,
                url: 'https://picsum.photos/id/40/300',
                type: 'video',
                name: 'pro-2.png'
            },
            {
                id: 41,
                url: 'https://picsum.photos/id/41/300',
                type: 'video',
                name: 'pro-3.png'
            },
            {
                id: 42,
                url: 'https://picsum.photos/id/42/300',
                type: 'video',
                name: 'pro-4.png'
            }
        ]
    ],
    totalPage: {
        video: 2,
        photo: 2
    },
    page: {
        video: 1,
        photo: 1
    },
    limit: 14
};

const defaultData = {
    photos: [],
    videos: [],
    totalPage: {
        video: 1,
        photo: 1
    },
    page: {
        video: 1,
        photo: 1
    },
    limit: 14
};

type StateMedia = typeof mediaApi;

const ManagerMedia = ({
    children,
    getImages,
    maxSelect = 14,
    types = ['photo', 'video']
}: ManagerMediaProps) => {
    const [active, setActive] = React.useState<MediaType>(types[0] || 'photo');
    const [media, setMedia] = React.useState<StateMedia>(defaultData);
    const [selects, setSelects] = React.useState<Media[]>([]);
    const [api, setApi] = React.useState<CarouselApi>();
    const handleSelect = (media: Media) => {
        if (selects.find((item) => item.id === media.id)) {
            setSelects((prev) => prev.filter((item) => item.id !== media.id));
        } else {
            if (maxSelect && selects.length >= maxSelect) return;
            setSelects((prev) => [...prev, media]);
        }
    };
    const handleConfirm = () => {
        if (getImages) getImages(selects);
        setSelects([]);
    };
    const handleUnSelectAll = () => setSelects([]);

    React.useEffect(() => {
        if (!api) {
            return;
        }
        api.on('select', () => {
            if (active === 'photo') {
                const isExist = media.photos[api.selectedScrollSnap()];
                if (isExist) return;
                setMedia((prev) => ({
                    ...prev,
                    page: {
                        ...prev.page,
                        photo: api.selectedScrollSnap() + 1
                    },
                    photos: [
                        ...prev.photos,
                        Array.from({ length: prev.limit }).map((_, i) => ({
                            id: i + 15,
                            url: `https://picsum.photos/id/${i + 15}/300`,
                            type: 'image',
                            name: `pro-${i + 15}.png`
                        }))
                    ]
                }));
            }
            if (active === 'video') {
                const isExist = media.videos[api.selectedScrollSnap()];
                if (isExist) return;
                setMedia((prev) => ({
                    ...prev,
                    page: {
                        ...prev.page,
                        video: api.selectedScrollSnap() + 1
                    },
                    videos: [
                        ...prev.videos,
                        Array.from({ length: prev.limit }).map((_, i) => ({
                            id: i + 43,
                            url: `https://picsum.photos/id/${i + 43}/300`,
                            type: 'video',
                            name: `pro-${i + 43}.png`
                        }))
                    ]
                }));
            }
        });
    }, [active, api, media]);
    return (
        <Sheet
            onOpenChange={(open) => {
                if (!open) {
                    setMedia(defaultData);
                } else
                    setTimeout(() => {
                        setMedia(mediaApi as never);
                    }, 2000);
            }}
        >
            <Tabs value={active}>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent side={'top'} className='p-0'>
                    <SheetHeader className='p-4 justify-between flex-row space-y-0'>
                        <SheetTitle>Quản lý hình ảnh, video</SheetTitle>
                        <SheetDescription />
                        <TabsList>
                            <TabsTrigger
                                onClick={handleUnSelectAll}
                                onMouseDown={() => setActive('photo')}
                                value='photo'
                                disabled={!types.includes('photo')}
                            >
                                Hình ảnh
                            </TabsTrigger>
                            <TabsTrigger
                                onClick={handleUnSelectAll}
                                onMouseDown={() => setActive('video')}
                                value='video'
                                disabled={!types.includes('video')}
                            >
                                Video
                            </TabsTrigger>
                        </TabsList>
                    </SheetHeader>
                    <div>
                        {types.includes('photo') && (
                            <TabsContent value='photo'>
                                <Carousel
                                    setApi={setApi}
                                    className='px-1 lg:px-4 relative mb-4'
                                >
                                    <CarouselContent>
                                        {Array.from({
                                            length: media.totalPage.photo
                                        }).map((_, index) => (
                                            <CarouselItem
                                                key={index}
                                                className='max-h-96 lg:max-h-max overflow-y-auto'
                                            >
                                                <ItemMedia
                                                    limit={media.limit}
                                                    onSelect={handleSelect}
                                                    selects={selects}
                                                    medias={media.photos[index]}
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className='left-1' />
                                    <CarouselNext className='right-1' />
                                </Carousel>
                            </TabsContent>
                        )}
                        {/* Video handle */}
                        {types.includes('video') && (
                            <TabsContent value='video'>
                                <Carousel
                                    setApi={setApi}
                                    className='px-1 lg:px-4 relative mb-4'
                                >
                                    <CarouselContent>
                                        {Array.from({
                                            length: media.totalPage.video
                                        }).map((_, index) => (
                                            <CarouselItem
                                                key={index}
                                                className='max-h-96 lg:max-h-max overflow-y-auto'
                                            >
                                                <ItemMedia
                                                    limit={media.limit}
                                                    onSelect={handleSelect}
                                                    selects={selects}
                                                    medias={media.videos[index]}
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className='left-1' />
                                    <CarouselNext className='right-1' />
                                </Carousel>
                            </TabsContent>
                        )}
                        <div className='flex items-center justify-center gap-2 border-t py-2 px-4'>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        disabled={!selects.length}
                                        variant={'outline'}
                                        size={'icon'}
                                        className='border-primary text-primary hover:text-primary size-10 rounded-2xl hover:-translate-y-1 transition-all'
                                    >
                                        <Trash />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className='sr-only'></DialogTitle>
                                        <DialogDescription>
                                            Bạn có chắc chắn muốn xóa {selects.length}{' '}
                                            {selects.length > 1 ? 'hình ảnh' : 'hình ảnh'}{' '}
                                            này
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button
                                                variant={'outline'}
                                                onClick={() => setSelects([])}
                                                className='rounded-full px-6'
                                            >
                                                Hủy
                                            </Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button
                                                onClick={() => setSelects([])}
                                                className='rounded-full px-6'
                                            >
                                                Xóa
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <Button
                                size={'icon'}
                                className='size-10 rounded-2xl hover:-translate-y-1 transition-all relative'
                            >
                                <Label
                                    className='cursor-pointer absolute inset-0'
                                    htmlFor='photo'
                                ></Label>
                                <Upload />
                                <Input
                                    accept='image/*'
                                    id='photo'
                                    type='file'
                                    multiple
                                    className='hidden'
                                />
                            </Button>
                            <Button
                                size={'icon'}
                                className='size-10 rounded-2xl hover:-translate-y-1 transition-all relative'
                            >
                                <Clapperboard />
                                <Label
                                    className='cursor-pointer absolute inset-0'
                                    htmlFor='video'
                                ></Label>
                                <Input
                                    accept='video/*'
                                    id='video'
                                    type='file'
                                    className='hidden'
                                />
                            </Button>
                            <Button
                                onClick={handleUnSelectAll}
                                disabled={!selects.length}
                                variant={'outline'}
                                size={'icon'}
                                className='size-10 rounded-2xl hover:-translate-y-1 transition-all'
                            >
                                <X />
                            </Button>
                            <SheetClose asChild>
                                <Button
                                    onClick={handleConfirm}
                                    disabled={!selects.length}
                                    variant={'outline'}
                                    size={'icon'}
                                    className='border-primary text-primary hover:text-primary size-10 rounded-2xl hover:-translate-y-1 transition-all'
                                >
                                    <Check />
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Tabs>
        </Sheet>
    );
};

export default ManagerMedia;
