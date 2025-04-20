import { client } from './sanity'; 

export const fetchPosts = async () => {
    const query = `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "authorName": author->name,
      "authorImage": author->image.asset->url,
      "mainImage": mainImage.asset->url,
      category,
      isPro
    }`
  
    return await client.fetch(query)
  }
  