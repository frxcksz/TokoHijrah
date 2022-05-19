import { memo } from 'react';

import { XyzTransitionGroup } from '@animxyz/react';

import CategoryCard from './CategoryCard';

const CategoriesSection = ({ className = '' }) => {
  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-4xl mb-7">
        Browse by <strong className="font-bold">Categories</strong>
      </h1>

      <div className="categories-card-container">
        <XyzTransitionGroup
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-10"
          appearVisible
          xyz="fade-100% right-100% ease-in-out-back stagger-1"
        >
          <CategoryCard
            className="w-full h-40 bg-[#1F1F21]"
            to="/categories/makanan-ringan"
            title="Makanan Ringan"
          />

          <CategoryCard
            className="w-full h-40 bg-[#DCA047]/75"
            to="/categories/biskuit"
            title="Biskuit"
          />

          <CategoryCard
            className="w-full h-40 bg-[#0B0F52]/75"
            to="/categories/biskuit"
            title="Biskuit"
          />

          <CategoryCard
            className="w-full h-40 bg-[#111315]/75"
            to="/categories/biskuit"
            title="Biskuit"
          />
        </XyzTransitionGroup>
      </div>
    </section>
  );
};

export default memo(CategoriesSection);