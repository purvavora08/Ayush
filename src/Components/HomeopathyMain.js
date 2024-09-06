import React from 'react';
import PlantCard from './PlantCard';

function Main() {
  const plantData = [
    {
      name: 'Aloe Vera',
      scientificName: 'Aloe barbadensis',
      family: 'Asphodelaceae',
      hindiName: 'घृतकुमारी',
      commonName: 'Ghritkumari',
      description: 'Aloe Vera is a succulent plant known for its healing properties...',
      imageUrl: 'https://m.media-amazon.com/images/I/71V+Q59-NuL.jpg',
      uses: [
        { category: 'Health Care', details: 'Helps soothe digestive issues and promotes regularity.' },
        { category: 'Skin Care', details: 'Used for treating burns, cuts, and moisturizing the skin.' },
        { category: 'Other Benefits', details: 'In various cosmetic and health products for its anti-inflammatory effects.' }
      ],
      recipe: 'Aloe Vera Gel: Extract gel from the leaf, apply directly to the skin.'
    },
    {
      name: 'Tulsi',
      scientificName: 'Ocimum sanctum',
      family: 'Lamiaceae',
      hindiName: 'तुलसी',
      commonName: 'Holy Basil',
      description: 'Tulsi is a sacred plant in India, revered in Hindu culture for its spiritual and medicinal properties...',
      imageUrl: 'https://pankajakasthuri.in/cdn/shop/articles/blog_23-01-2020-17-min_1024x1024.png?v=1694601379',
      uses: [{ category: 'Uses', details: 'Anti-inflammatory, antioxidant' }],
      recipe: 'Tulsi Tea: Boil Tulsi leaves in water, add honey and lemon for flavor.'
    },
    {
      name: 'Brahmi',
      scientificName: 'Bacopa monnieri',
      family: 'Scrophulariaceae',
      hindiName: 'ब्राह्मी',
      commonName: 'Bacopa',
      description: 'Brahmi is renowned for its cognitive-enhancing properties...',
      imageUrl: 'https://www.shutterstock.com/image-photo/fresh-brahmi-leaves-flowers-isolated-600nw-1998371810.jpg',
      uses: [{ category: 'Uses', details: 'Enhances memory, cognitive function' }],
      recipe: 'Brahmi Tea: Infuse Brahmi leaves in hot water, strain and drink.'
    }
  ];

  return (
    <main>
      <section id="plant-list">
        <div id="plants">
          {plantData.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

