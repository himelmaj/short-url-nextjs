import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sh-rten.vercel.app/',
      lastModified: new Date(),
      changeFrequency:  undefined,
      priority: 1,
    }
  ]
}