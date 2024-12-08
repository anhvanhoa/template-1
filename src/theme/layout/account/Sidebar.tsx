'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArchiveIcon, BellIcon, LogOut, ShieldIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const sidebarMenus = [
    {
        title: 'Tài khoản',
        href: '/tai-khoan',
        icon: UserIcon
    },
    {
        title: 'Đơn hàng',
        href: '/tai-khoan/don-hang',
        icon: ArchiveIcon
    },
    {
        title: 'Đổi mật khẩu',
        href: '/tai-khoan/doi-mat-khau',
        icon: ShieldIcon
    },
    {
        title: 'Thông báo',
        href: '/tai-khoan/thong-bao',
        icon: BellIcon
    }
];

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className='w-80 mr-8 min-h-56 border-r flex flex-col justify-between'>
            <div className='grid'>
                {sidebarMenus.map((menu) => (
                    <Link href={menu.href} key={menu.href} className='-mr-[1px]'>
                        <Button
                            variant={'ghost'}
                            className={cn(
                                'text-muted-foreground py-2 px-6 hover:bg-transparent font-normal hover:text-primary w-full justify-start border-r rounded-none',
                                {
                                    'text-primary font-medium border-primary border-r-[3px]':
                                        pathName === menu.href
                                }
                            )}
                        >
                            <menu.icon strokeWidth={2.2} />
                            {menu.title}
                        </Button>
                    </Link>
                ))}
            </div>
            <div>
                <Button
                    variant={'ghost'}
                    className={cn(
                        'hover:text-red-600 text-red-600 py-2 px-6 hover:bg-transparent font-normal w-full justify-start rounded-none'
                    )}
                >
                    <LogOut strokeWidth={2.2} />
                    Đăng Xuất
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
