import { client } from '@/utils/sanity';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

// Define your base URL
const baseUrl = 'https://bot-verse.online'; // 'localhost:3000'

// This function generates the sitemap XML
export async function GET() {
  try {
    // Fetch all dynamic pages from Sanity
    // Replace this query with your actual content structure
    const pages = await client.fetch(groq`
      *[_type == "page"] {
        "slug": slug.current,
        _updatedAt
      }
    `);

    // Fetch blog posts or other content types if you have them
    const posts = await client.fetch(groq`
      *[_type == "blog"] {
        "slug": slug.current,
        _updatedAt
      }
    `);

    // Start building the XML string
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    // Add homepage
    xml += `
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `;

    // Add static pages (add more as needed)
    const staticPages = ['/about'];
    
    staticPages.forEach(page => {
      xml += `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    });

    // Add dynamic pages from Sanity
    pages.forEach(page => {
      xml += `
        <url>
          <loc>${baseUrl}/${page.slug}</loc>
          <lastmod>${new Date(page._updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    });

    // Add blog posts or other content types
    posts.forEach(post => {
      xml += `
        <url>
          <loc>${baseUrl}/post/${post.slug}</loc>
          <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>
      `;
    });

    // Close the XML
    xml += '</urlset>';

    // Return the XML with the appropriate content type
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', {
      status: 500,
    });
  }
}