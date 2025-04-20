import { client } from '@/utils/sanity';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('query');

  if (!term) {
    return NextResponse.json({ posts: [] });
  }

  try {
    const query = `*[_type == "blog" && title match $searchTerm]{
      title,
      "mainImage": mainImage.asset->url,
      body,
      slug
    }`;

    const posts = await client.fetch(query, { searchTerm: `*${term}*` });
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error searching posts:', error);
    return NextResponse.json({ error: 'Failed to search posts' }, { status: 500 });
  }
}