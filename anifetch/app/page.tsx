"use client"
// pages/index.tsx
import React from 'react';
import PokemonDetail from '../components/PokemonDetail';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Cat Gallery</h1>
      <PokemonDetail />
    </div>
  );
};

export default Home;
