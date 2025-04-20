import { PortableText } from "@portabletext/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function Content({ post }) {
    return (
        <div className="w-full xl:max-w-[770px]">
            {/* Blog Hero Image */}
            <div className="mb-10 h-[400px]">
                {console.log("iggg ===", post)}
                <Image
                    alt={post.title}
                    src={post.mainImage}
                    width={770}
                    height={400}
                    className="h-full w-full rounded-lg object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="mb-5.5 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
                {post.title}
            </h1>

            {/* Author Section */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex h-8.5 w-8.5 overflow-hidden rounded-full">
                    <Image
                        src={post.mainImage}
                        alt={post.author}
                        width={34}
                        height={34}
                    />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-2.5 text-custom-sm">
                        <p>{post.author}</p>
                        <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2" />
                        <p>{moment(post.publishedAt).format('D MMM YY')}</p>
                    </div>
                    <p
                        className="inline-flex rounded-full bg-teal/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-teal-dark"
                    >
                        {post.tags && post.tags.length > 0 ? post.tags[0] : 'General'}
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="blog-details blog-details-three mt-9 space-y-6">
                <PortableText value={post.body} />
            </div>

            {/* Tags and Share */}
            <div className="mb-10 mt-15 flex flex-wrap items-center justify-between gap-y-2">
                <div>
                    Tags: {'\n'}
                    {post.tags?.map((item, index) => (
                        <Link key={index} className="inline-flex rounded-full bg-purple/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-purple-dark mr-3"
                            href="/tags/test">{item}</Link>
                    ))}
                </div>
                {/* <div className="flex items-center gap-3">
                    <p>Share this:</p>
                    <div className="flex items-center gap-2">
                        <a
                            aria-label="facebook share"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://nextblog.demo.nextjstemplates.com/blog/traveller-visiting-ice-cave-with-amazing-eye-catching-view-with-nature"
                            className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-[#364E8F] hover:bg-opacity-95"
                        >
                            <svg width="14" height="14" fill="white" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.7 6.6779V4.7263C7.7 3.9708 8.32679 3.35835 9.1 3.35835H10.5V1.30642L8.5995 1.17378C6.97865 1.06066 5.6 2.31497 5.6 3.90273V6.6779H3.5V8.72984H5.6V12.8334H7.7V8.72984H9.8L10.5 6.6779H7.7Z" />
                            </svg>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}