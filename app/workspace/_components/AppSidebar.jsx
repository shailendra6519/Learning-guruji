"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { Book, Compass, LayoutDashboard, PencilRulerIcon, UserCircle2Icon, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AddNewCourseDialog from './AddNewCourseDialog'
import Image from 'next/image'

const sideBarOptions = [
    {
        title: 'Dashboard',
        icon:LayoutDashboard,
        path:'/workspace/#'
    },
    {
        title: 'My Learning',
        icon: Book,
        path:'/workspace/my-learning'
    },
    {
        title: 'Explore Courses',
        icon:Compass,
        path:'/workspace/explore'
    },
    {
        title: 'Billing',
        icon:WalletCards,
        path:'/workspace/billing'
    },
    {
        title: 'Profile',
        icon:UserCircle2Icon,
        path:'/workspace/profile'
    },
]

function AppSidebar() {

    const path=usePathname();

  return (
       <Sidebar>
      <SidebarHeader className={'p-4'}>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <i className="fas fa-brain text-2xl bg-gradient-to-r from-indigo-600 to-purple-500 gradient-text"></i>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">Learning-Guruji <span
                            className="bg-gradient-to-r from-indigo-600 to-purple-500 gradient-text">AI</span></span>
                </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <AddNewCourseDialog>
                <Button>Create New Course</Button>
            </AddNewCourseDialog>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {sideBarOptions.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild className={'p-5'}>
                            <Link href={item.path} className={`text-[17px] flex items-center gap-2 text-muted-foreground hover:text-foreground 
                                ${path.includes(item.path)&& 'text-primary bg-purple-50'}`}>
                            <item.icon className='h-7 w-7'/>
                            <span>{item.title}</span>
                            </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem> ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
