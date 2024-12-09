import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, FileIcon } from 'lucide-react';

const activityData = [
    {
        id: 1,
        name: 'Anna Srzand',
        action: 'đề xuất cho bạn',
        event: '🔥 Sản phẩm mới',
        time: '2 giờ trước',
        description: 'Iphone 15',
        avatar: '/placeholder.svg'
    },
    {
        id: 2,
        name: 'Jess Raddon',
        action: 'đề cập đến bạn trong',
        event: '😍 Iphone 17 Pro',
        time: '4 giờ trước',
        description: 'Danh sách sở thích',
        avatar: '',
        initials: 'JR'
    },
    {
        id: 3,
        name: 'Sandra Marx',
        action: 'đang yêu cầu nâng cấp gói',
        time: '12 giờ trước',
        description: 'Danh sách sở thích',
        avatar: '/placeholder.svg'
    },
    {
        id: 4,
        name: 'Adam Smith',
        action: 'đã gửi một tệp cho bạn',
        time: '1 ngày trước',
        file: {
            name: 'landing_page_ver2.fig',
            size: '2mb'
        },
        avatar: '/placeholder.svg'
    },
    {
        id: 5,
        name: 'Ralpg Turner',
        action: 'đã chỉnh sửa',
        event: '✨ Sự kiện lễ kỷ niệm',
        time: '4 giờ trước',
        description: 'Danh sách sở thích',
        avatar: '',
        initials: 'RT'
    }
];

export default function NotificationFeed() {
    return (
        <div className='pt-2 mb-4 px-20'>
            <h4 className='font-semibold text-xl'>Thông báo</h4>
            <p className='text-sm text-gray-600 max-w-sm'>
                Những thông báo mới nhất từ shop về đơn hàng, sản phẩm, khuyến mãi
            </p>
            <div className='mt-4'>
                <div className='flex items-center justify-between py-4 border-b'>
                    <Tabs defaultValue='all' className='w-full'>
                        <TabsList className='grid w-full grid-cols-3'>
                            <TabsTrigger value='all' className='text-sm'>
                                Tất cả <span className='ml-1 text-xs'>8</span>
                            </TabsTrigger>
                            <TabsTrigger value='following' className='text-sm'>
                                Khuyến mãi <span className='ml-1 text-xs'>6</span>
                            </TabsTrigger>
                            <TabsTrigger value='archive' className='text-sm'>
                                Đơn hàng <span className='ml-1 text-xs'>2</span>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Button variant='ghost' size='icon' className='ml-2'>
                        <Settings className='w-5 h-5' />
                        <span className='sr-only'>Settings</span>
                    </Button>
                </div>
                <div className='divide-y'>
                    {activityData.map((activity) => (
                        <div key={activity.id} className='flex items-start gap-3 p-4'>
                            {activity.avatar ? (
                                <Avatar className='w-10 h-10'>
                                    <AvatarImage src={activity.avatar} />
                                    <AvatarFallback>
                                        {activity.name.split(' ')[0][0]}
                                    </AvatarFallback>
                                </Avatar>
                            ) : (
                                <div className='w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600'>
                                    {activity.initials}
                                </div>
                            )}
                            <div className='flex-1 space-y-1'>
                                <p className='text-sm'>
                                    <span className='font-medium'>{activity.name}</span>{' '}
                                    {activity.action}{' '}
                                    <span className='font-medium'>{activity.event}</span>
                                </p>
                                <p className='text-xs text-muted-foreground'>
                                    {activity.time} • {activity.description}
                                </p>
                                {activity.file && (
                                    <div className='flex items-center gap-2 mt-2 p-2 bg-secondary rounded-lg w-fit'>
                                        <FileIcon className='w-5 h-5 text-blue-500' />
                                        <span className='text-sm'>
                                            {activity.file.name}
                                        </span>
                                        <span className='text-xs text-muted-foreground'>
                                            {activity.file.size}
                                        </span>
                                    </div>
                                )}
                                {activity.action === 'is requesting to upgrade Plan' && (
                                    <div className='flex gap-2 mt-2'>
                                        <Button size='sm' className='h-8'>
                                            Accept
                                        </Button>
                                        <Button
                                            size='sm'
                                            variant='outline'
                                            className='h-8'
                                        >
                                            Decline
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
