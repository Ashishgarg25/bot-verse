"use client"

import Image from 'next/image';
import Card from '../Card';
import moment from 'moment';

export default function FeaturedPosts({featuredPosts}) {

    return (
        <section className="relative z-10 overflow-hidden rounded-b-[50px] pb-15 pt-34">
            {/* Background Images */}
            <div className="absolute bottom-0 left-0 h-full w-full rounded-b-[50px] bg-gray" />
            <div className="absolute bottom-0 left-0 h-full w-full rounded-b-[50px]">
                <Image
                    alt="hero"
                    loading="lazy"
                    width={1920}
                    height={779}
                    src="/hero-bg.svg"
                    className="object-cover w-full h-full"
                    style={{ background: "#6700ff" }}
                />
            </div>

            {/* Cards */}
            <div className="relative z-1 mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap gap-x-7.5 gap-y-9">
                    {
                        featuredPosts?.slice(0,3)?.map((post, index) => (
                            <Card
                                key={post._id}
                                image={post.mainImage}
                                title={post.title}
                                // excerpt="In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper."
                                category={post.tags && post.tags.length > 0 ? post.tags[0] : 'General'}
                                categoryColor="purple"
                                author={post.author}
                                authorImage="../../../public/hero-bg.svg"
                                date={moment(post.publishedAt).format('D MMM YY')}
                                href={`/post/${post.slug}`}
                                isFeatured={index === 0}
                                description={post.body}
                            />
                        ))
                    }
                    

                    {/* Add more Card instances here */}
                </div>
            </div>
        </section>
    );
}
