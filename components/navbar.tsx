import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-wrap items-center justify-center p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Image
                    aria-hidden
                    src="/matthew_dennis.png"
                    alt="Matthew Dennis"
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:w-auto">
                <div className="text-lg">
                    <Link href={'/'} className="inline-flex mt-4 lg:mt-0 text-gray-400 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link href={'resume'} className="inline-flex mt-4 lg:mt-0 text-gray-400 hover:text-white mr-4">
                        Resume
                    </Link>
                    <Link href={'projects'} className="inline-flex mt-4 text-gray-400 hover:text-white">
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
