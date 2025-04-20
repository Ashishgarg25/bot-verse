"use client";

import Image from "next/image";
import { PortableText } from '@portabletext/react'

export default function SearchModal({
    isOpen,
    onClose,
    searchQuery,
    setSearchQuery,
    posts,
}) {
    if (!isOpen) return null; // Only render the modal if it's open

    return (
        <div>
            {/* Modal */}
            <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-5">
                <div
                    className="fixed inset-0 bg-black/25 backdrop-blur-sm transition-opacity"
                    onClick={onClose} // Close modal when clicking on the backdrop
                ></div>
                <div className="modal-content relative w-full max-w-[700px] overflow-hidden overflow-y-scroll rounded-lg bg-white shadow-box-2 duration-200 ease-in">
                    <div>
                        <div className="ais-SearchBox rounded-t-[15px] bg-white h-[56px]">
                            <form className="ais-SearchBox-form sticky top-0 z-[999]" role="search">
                                <input
                                    className="ais-SearchBox-input flex h-[56px] w-full items-center rounded-lg pl-12 pr-6 outline-none duration-300"
                                    aria-label="Search"
                                    autoComplete="off"
                                    placeholder="Type anything to search..."
                                    type="search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                                />
                                <button className="ais-SearchBox-submit" type="submit" title="Submit">
                                    <svg
                                        className="ais-SearchBox-submitIcon absolute left-0 top-0 w-[56px] h-[56px] flex items-center justify-center p-5"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 40 40"
                                        aria-hidden="true"
                                    >
                                        <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* <div className="border-y px-4 py-3 lg:px-7 lg:py-4.5" style={{ borderColor: "#efefef" }}>
                            <h5 className="font-medium text-dark">Posts</h5>
                        </div> */}

                        {posts?.length > 0 &&
                            <div className="py-3.5">
                                <div className="w-full">
                                    <div className="ais-Hits result-links w-full">
                                        <ol className="ais-Hits-list">
                                            {posts?.map((post, index) => (
                                                <li key={index} className="ais-Hits-item" style={{ borderBottom: "1px solid", borderColor: '#efefef' }}>
                                                    <div className="cursor-pointer px-4 py-3.5 duration-300 ease-in hover:bg-gray-100 lg:px-7">
                                                        <a href={`/post/${post.slug.current}`} className="flex flex-row items-start">
                                                            <Image
                                                                src={post.mainImage}
                                                                alt={post.title}
                                                                width={140}
                                                                height={140}
                                                                className="object-cover"
                                                                sizes="100vw"
                                                            />
                                                            <div className="ml-3">
                                                                <h3 className="mb-1.5 font-bold text-dark">{post.title}</h3>
                                                                <div className="text-md text-gray-600 line-clamp-2">
                                                                    <PortableText value={post.body.slice(0, 2)} />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
