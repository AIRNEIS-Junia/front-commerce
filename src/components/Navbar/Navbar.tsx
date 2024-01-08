'use client'
import React from 'react';
import HamburgerMenu from "@/components/Navbar/HamburgerMenu/HamburgerMenu";

const Navbar = () => {
    return (
        <nav className={'px-4 py-2 flex justify-between'}>
            <HamburgerMenu/>
        </nav>
    );
};

export default Navbar;