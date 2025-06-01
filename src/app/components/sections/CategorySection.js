"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategorySection = ({ posts }) => {
    const [selectedTag, setSelectedTag] = useState('All'); // To track the selected tag
    const [filteredPosts, setFilteredPosts] = useState(posts); // To store the filtered posts

    // Get unique tags from posts
    const tags = Array.from(new Set(posts.flatMap(post => post.tags))) || [];
    const topTags = ['All', ...tags.slice(0, 5)]; // Include 'All' and top 5 tags

    // Filter posts based on the selected tag
    useEffect(() => {
        if (selectedTag === 'All') {
            setFilteredPosts(posts); // Show all posts if 'All' is selected
        } else {
            const filtered = posts.filter(post => post.tags.includes(selectedTag));
            setFilteredPosts(filtered); // Filter posts based on selected tag
        }
    }, [selectedTag, posts]); // Dependency on selectedTag and posts

    return (
        <section className="pb-15 pt-20 lg:pt-25">
            <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
                <div className="mb-12.5 text-center">
                    <h2 className="mb-3.5 text-2xl font-bold text-dark sm:text-4xl xl:text-heading-3">
                        Browse by Category
                    </h2>
                    <p>Select a category to see more related content</p>
                </div>

                {/* Tags filter */}
                <div className="mb-15 flex flex-wrap items-center justify-center gap-4">
                    {topTags.map((tag, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedTag(tag)} // Set selected tag on click
                            className={`rounded-full border px-4.5 py-2.5 font-medium capitalize duration-200 ease-in hover:border-dark hover:bg-dark hover:text-white ${selectedTag === tag
                                ? 'border-dark bg-dark text-white'
                                : 'border-gray-3 bg-gray text-dark'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Display filtered posts */}
                <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-2 lg:w-8/12">
                    {filteredPosts.map((post, index) => (
                        <Link key={index} className="group" href={`/post/${post.slug}`}>
                            <div className="relative mb-6 aspect-[370/280] w-full overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                                <Image
                                    src={post.mainImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                            </div>
                            <h3 className="line-clamp-2 mb-3.5 block text-xl font-bold text-dark bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                                {post.title}
                            </h3>
                            <p>In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.</p>
                            <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-6 w-6 overflow-hidden rounded-full">
                                            <Image src={post.mainImage} alt="user" width={24} height={24} />
                                        </div>
                                        <p className="text-sm">{post.author}</p>
                                    </div>
                                    <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                                    <p className="text-sm">{post.date}</p>
                                </div>
                                <p
                                    className="inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-sm font-medium capitalize text-blue"
                                >
                                    {post && post?.tags?.length > 0 && post?.tags[0]}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='grid grid-cols-1 gap-x-7.5 gap-y-11 lg:grid-cols-1 lg:w-4/12'>

                </div>
            </div>
        </section>
    );
};

export default CategorySection;
