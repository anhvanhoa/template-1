'use client';
import * as React from 'react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { CircleDotDashed } from 'lucide-react';
import Image from 'next/image';

export function TeamSwitcher({
    site
}: {
    site: {
        name: string;
        logo: string;
        des: string;
    };
}) {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size='lg'
                    className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                >
                    {!site.logo && (
                        <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                            <CircleDotDashed className='size-4' />
                        </div>
                    )}
                    {site.logo && (
                        <Image
                            className='flex aspect-square size-8 rounded-lg'
                            src={site.logo}
                            alt={site.name}
                            width={50}
                            height={50}
                        />
                    )}
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='truncate font-semibold'>{site.name}</span>
                        <span className='truncate text-xs'>{site.des}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
