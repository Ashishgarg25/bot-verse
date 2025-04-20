import FeaturedPosts from './components/sections/FeaturedPosts';
import CategorySection from './components/sections/CategorySection';
import NewsletterSection from './components/sections/NewsletterSection';
import { client } from '@/utils/sanity';
import HomePageClient from './components/HomePageClient'; // new client-side wrapper

export const dynamic = 'force-dynamic'; // optional for fresh fetch

const PAGE_SIZE = 10;

const HomePage = async () => {
  const query = `*[_type == "blog"] | order(publishedAt desc) [0...13] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    "mainImage": mainImage.asset->url,
    tags,
    body
  }`;

  const initialPosts = await client.fetch(query);

  const featuredPosts = initialPosts.slice(0, 3);
  const allPosts = initialPosts.slice(3, 13);

  return (
    <div className="home">
      <FeaturedPosts featuredPosts={featuredPosts} />
      <HomePageClient initialPosts={allPosts} />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
