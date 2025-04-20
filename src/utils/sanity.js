import { createClient } from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '1jgmb224',  // ✅ replace with your projectId
  dataset: 'production',
  apiVersion: '2024-04-12',
  useCdn: true,
  token: 'sktxquSW6iAfbnreVqZZBzAUhcW0FxoaTt1n122Uo2lHbfzR5M7x08rGVoVFoJZfdnxYWUnMaEtLqx0pevUafc75Zknd1EsuS6p2Nb4w879t3a7mHdDQ5TMUc2RPdd91ClSM0650At9qonhzVkB9T01lEqhBkGjtiUo6i1u15ulLHPBM5Eo1'
})

// Fetch Featured Posts
export const fetchFeaturedPosts = async () => {
  const query = `*[_type == "post" && isFeatured == true] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "mainImage": mainImage.asset->url
    }`;

  return await client.fetch(query);
};

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}