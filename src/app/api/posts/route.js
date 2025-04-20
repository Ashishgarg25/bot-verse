import { client } from '@/utils/sanity';

export async function GET(req) {
  const url = new URL(req.url);
  const count = url.searchParams.get('count');
  
  let query;
  
  if (count) {
    // If count parameter exists, fetch that many posts
    query = `*[_type == "blog"] | order(publishedAt desc) [0...${count}] {
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
  } else {
    // Otherwise use start/end pagination
    const start = url.searchParams.get('start') || 0;
    const end = url.searchParams.get('end') || 10;
    
    query = `*[_type == "blog"] | order(publishedAt desc) [${start}...${end}] {
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
  }

  const posts = await client.fetch(query);
  return new Response(JSON.stringify(posts));
}