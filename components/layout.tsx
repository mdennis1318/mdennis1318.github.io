import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

import Footer from './footer';
import Navbar from './navbar';

interface LayoutProps {
    children: ReactNode;
    geistSans: { variable: string; };
    geistMono: { variable: string; };
}

const Layout: FC<LayoutProps> = ({ children, geistSans, geistMono }) => {
    return (
        <div>
            <header className="p-4 flex justify-center">
                <Navbar />
            </header>
            <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
            </main>
            <footer className="text-center p-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
