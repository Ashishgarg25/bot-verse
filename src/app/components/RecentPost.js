'use client';

import { client } from '@/utils/sanity';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetchRecentPosts();
  }, [])

  const fetchRecentPosts = async () => {
    try {
      const res = await fetch(`/api/posts?count=3`);
      console.log(res)
      const posts = await res.json();
      console.log(posts)
      setRecentPosts(posts)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full max-w-[370px] rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
        <h4 className="mb-7.5 text-custom-4 font-semibold text-dark">Recent Posts</h4>
        <div className="flex flex-col gap-7.5">
          {recentPosts.map((post, index) => (
            <Link key={index} href={`/post/${post.slug}`} className="group flex gap-6">
              <div className="relative flex-shrink-0" style={{ width: '75px', height: '75px' }}>
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  className="rounded-full object-cover"
                  width={50}
                  height={50}
                  style={{ width: '75px', height: '75px' }}
                />
              </div>
              <div className="flex-grow">
                <h5 className="mb-1.5 text-sm font-medium text-dark duration-200 ease-in group-hover:text-primary">
                  {post.title.length > 50 ? `${post.title.slice(0, 50)}...` : post.title}
                </h5>
                <div className="flex items-center gap-2">
                  <p className="text-custom-xs">{post.author}</p>
                  <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2" />
                  <p className="text-custom-xs">{moment(post.publishedAt).format('D MMM YY')}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}