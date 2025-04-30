"use client"

import Image from 'next/image';
import Facebook from "../../../public/socials/fb.svg";
import Pinterest from "../../../public/socials/pinterest.svg";
import Search from "../../../public/search.svg";
import SearchModal from './SearchModal';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // To hold search input
    const [posts, setPosts] = useState([]); // Store posts from API
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);


    useEffect(() => {
        if (debouncedQuery) {
            fetchPosts(debouncedQuery);
        }
    }, [debouncedQuery]);

    const fetchPosts = async (term) => {
        try {
            const response = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            console.log("Search response:", data);
            setPosts(data.posts || []);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]);
        }
    };

    return (
        <header className="header fixed left-0 top-0 z-9999 w-full bg-white py-7 transition-all duration-300 ease-in-out lg:py-0 false">
            <div className="navigation relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0 ">
                <div className="flex w-full items-center justify-between lg:w-9/12">
                    <Link href="/"><img alt="Logo" loading="lazy" width="150" height="80" decoding="async" data-nimg="1" src="/images/logo.png" style={{ color: 'transparent' }} /></Link>
                </div>
                <div className=" invisible h-0 w-full items-center justify-end lg:visible lg:flex lg:h-auto lg:w-3/12 false">
                    <div className="mt-7 flex flex-col flex-wrap gap-8.5 lg:mt-0 lg:flex-row lg:items-center">
                        <nav>
                            <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10 py-7">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/about', label: 'About' },
                                ].map((link, index, arr) => (
                                    <li key={link.label} className="flex items-center">
                                        <Link
                                            href={link.href}
                                            className="group flex text-custom-sm leading-none duration-200 ease-in hover:text-dark"
                                        >
                                            <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                                                {link.label}
                                            </span>
                                        </Link>
                                        {/* {index !== arr.length - 1 && (
                                        <span className="mx-2 flex h-[3px] w-[3px] rounded-full bg-dark-2" />
                                    )} */}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4.5">
                            <button onClick={() => setIsSearchOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full bg-gray hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200 lg:ease-linear">
                                <Image src={Search} alt="Facebook" width={18} height={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                posts={posts} />
        </header>
    )
}

export default Header;