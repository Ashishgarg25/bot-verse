import { client } from '@/utils/sanity';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
      title,
      author,
      publishedAt,
      tags,
      body,
      "mainImage": mainImage.asset->url,
    }`;
    
    const post = await client.fetch(query, { slug });
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}