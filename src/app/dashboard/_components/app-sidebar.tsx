'use client';
import * as React from 'react';
import {
    BookOpen,
    Bot,
    Frame,
    Map,
    PieChart,
    Settings2,
    SquareTerminal
} from 'lucide-react';

import { NavMain } from '@/app/dashboard/_components/nav-main';
import { NavProjects } from '@/app/dashboard/_components/nav-projects';
import { NavUser } from '@/app/dashboard/_components/nav-user';
import { TeamSwitcher } from '@/app/dashboard/_components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader
} from '@/components/ui/sidebar';
import app from '@/app.json';

// This is sample data.
const data = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg'
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/',
            icon: SquareTerminal
        },
        {
            title: 'Trang tĩnh',
            url: '#',
            icon: Bot,
            isActive: true,
            items: [
                {
                    title: 'Genesis',
                    url: '#'
                },
                {
                    title: 'Explorer',
                    url: '#'
                },
                {
                    title: 'Quantum',
                    url: '#'
                }
            ]
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#'
                },
                {
                    title: 'Get Started',
                    url: '#'
                },
                {
                    title: 'Tutorials',
                    url: '#'
                },
                {
                    title: 'Changelog',
                    url: '#'
                }
            ]
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#'
                },
                {
                    title: 'Team',
                    url: '#'
                },
                {
                    title: 'Billing',
                    url: '#'
                },
                {
                    title: 'Limits',
                    url: '#'
                }
            ]
        }
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map
        }
    ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const site = app as {
        name: string;
        logo: string;
        des: string;
    };
    return (
        <Sidebar className='border-none' collapsible='icon' {...props}>
            <SidebarHeader className='bg-background'>
                <TeamSwitcher site={site} />
            </SidebarHeader>
            <SidebarContent className='bg-background'>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter className='bg-background'>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
