"use client";

import { use, useEffect, useState } from 'react';
import { client } from '@/utils/sanity';

import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Loading from './loading';

export default function PostDetails({ params }) {

    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data.post);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load the post");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);
  
  if (error) return <div className="text-red-500 p-10">{error}</div>;
  if (!post) return <div className="p-10"><Loading /></div>;


    return (
        <section className="pb-17.5 pt-34">
            <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap gap-7.5">
                    <div className="w-full xl:max-w-[770px]">
                        <Content post={post} />
                    </div>
                    <div className="w-full max-w-[370px]">
                        <Sidebar />
                    </div>
                </div>

            </div>
        </section>
    )
}