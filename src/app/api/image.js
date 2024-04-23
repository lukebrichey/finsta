// pages/api/images.js
export default async function handler(res) {
  // eslint-disable-next-line no-unused-vars
  const categories = [
    'NFL',
    'England Rugby',
    'Study Motivation',
    'Christmas Inspiration',
    'Roadtrip Ideas',
  ];

  try {
    const images = await Promise.all(categories.map(async (category) => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(category)}&client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=1`
      );
      const data = await response.json();
      return {
        id: data.results[0].id,
        imageUrl: data.results[0].urls.regular,
        label: category,
      };
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
}
