'use client';

import { useEffect, useState } from 'react';
import CategorySection from './sections/CategorySection';

const PAGE_SIZE = 10;

const HomePageClient = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMorePosts = async () => {
    setLoading(true);

    const res = await fetch(`/api/posts?start=${13 + (page - 1) * PAGE_SIZE}&end=${13 + page * PAGE_SIZE}`);
    const newPosts = await res.json();

    setPosts(prev => [...prev, ...newPosts]);
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchMorePosts();
    }
  }, [page]);

  return (
    <CategorySection posts={posts} />
  );
};

export default HomePageClient;
