// CatImages.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CatImages.module.css'; 

interface CatImage {
  id: string;
  url: string;
}

const CatImages: React.FC = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get(
          'https://api.thecatapi.com/v1/images/search?limit=10'
        );
        setCatImages(response.data);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  if (catImages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cat Images</h1>
      <ul className={styles.imageList}>
        {catImages.map((catImage) => (
          <li key={catImage.id} className={styles.imageItem}>
            <img
              src={catImage.url}
              alt={`Cat ${catImage.id}`}
              className={styles.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatImages;
