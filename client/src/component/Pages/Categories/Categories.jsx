import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CategoryCard from '../Home/CategoriesSection/CategoryCard';
import ProductItemCard from '../../ProductItemCard/ProductItemCard';
import AppHeader from '../../Layout/AppHeader';
import AppFooter from '../../Layout/AppFooter';
import Navbar from '../../Nav/Navbar';
import useWindowSize from '../../../hooks/useWindowSize';
import config, { screenConfig } from '../../../script/config/config';
import MobileNavbar from '../../Nav/MobileNavbar';

const boxBgColor = {
  makanan: '#1F1F21',
  minuman: '#E5B875',
  obat: '#484B7D',
  rokok: '#4C4E4F',
};

const Categories = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const params = useParams();
  const { category: categoryId } = params;

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryData, setCategoryData] = useState({ nama: '' });

  useEffect(() => {
    const fetchCategoryInfo = async () => {
      const response = await fetch(`${config.apiUrl.category}/${categoryId}`);

      if (!response.ok) {
        throw new Error('Could not fetch category data!');
      }

      const respData = await response.json();

      setCategoryData(respData.data);
    };

    const fetchCategoryProducts = async () => {
      const response = await fetch(`${config.apiUrl.products}`);

      if (!response.ok) {
        throw new Error('Could not fetch category products data!');
      }

      const respData = await response.json();

      const filteredProducts = respData.data.filter(
        (product) => product.id_kategori === categoryId
      );

      setCategoryProducts(filteredProducts);
    };

    try {
      fetchCategoryInfo();
      fetchCategoryProducts();
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  }, []);

  return (
    <Fragment>
      <AppHeader>
        {screenWidth <= screenConfig.sm && (
          <MobileNavbar
            hideSearchBar
            hideLoginBtn
            titleText={categoryData.nama}
          />
        )}
        {screenWidth > screenConfig.sm && <Navbar />}
      </AppHeader>

      <div className="container mx-auto mt-3 mb-24 px-4 sm:px-0">
        <div className="breadcumb-container hidden sm:block">
          <Link to="/" className="text-borderSecondary">
            Home
          </Link>
        </div>

        <div className="flex flex-row justify-center mt-4 mb-12">
          <CategoryCard
            className={`w-full h-40 max-w-xs bg-[${
              boxBgColor[categoryData.nama.toLowerCase()]
            }]`}
            to={`/categories/${categoryData._id}`}
            title={categoryData.nama}
          />
        </div>

        <section>
          <h1 className="font-light text-xl sm:text-4xl mb-4">
            <strong className="font-bold">{categoryData.nama}</strong> Untuk
            Temani Hari
          </h1>

          <div className="item-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-2 sm:gap-8 lg:gap-x-24">
            {categoryProducts.map((product) => (
              <ProductItemCard
                key={product._id}
                id={product._id}
                productName={product.nama}
                thumbnailUrl={`/image/${product.link_gambar}`}
                price={product.harga}
              />
            ))}

            {/* <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            />
            <ProductItemCard
              id={1}
              productName="Indomie Goreng"
              thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
              price={3500}
            /> */}
          </div>
        </section>
      </div>

      <AppFooter />
    </Fragment>
  );
};

export default Categories;
