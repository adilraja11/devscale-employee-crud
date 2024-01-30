'use client'

import React from 'react'
import {
    Link,
    Image,
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar
  } from "@nextui-org/react";

export const Header = () => {
  return (
    <Navbar isBordered>
        <NavbarContent justify='start'>
            <NavbarBrand>
                <Image
                    isBlurred
                    width={40}
                    height={40}
                    src="/employee-icon.png"
                    alt="BrandCover"
                ></Image>
                <p className='hidden sm:block font-bold text-inherit'>WorkHub</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-5">
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" color="warning">
                    About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Employee
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NavbarContent>
        
        <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="warning"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={['settings', 'help_and_feedback']}>
                    <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">Settings</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                    Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </NavbarContent>
    </Navbar>
  )
}
