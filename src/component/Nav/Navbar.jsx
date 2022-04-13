import { useState } from 'react';

import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';

import Logo from '../../asset/logo-mitra.png';
import CartIcon from '../../asset/icon/cart-icon.svg';
import UserIcon from '../../asset/icon/user-icon.svg';

const Navbar = () => {
  const [enteredSearch, setEnteredSearch] = useState('');

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();

    alert(`Submitted: ${enteredSearch}`);

    console.log(enteredSearch);
  };

  const searchChangeHandler = (e) => {
    setEnteredSearch(e.target.value);
  };

  const resetSearchHandler = () => {
    setEnteredSearch('');
  };

  return (
    <div className="bg-primary py-3 shadow-lg sticky top-0">
      <nav className="container mx-auto flex flex-row items-center justify-between gap-x-4">
        <XyzTransition appear xyz="fade-100% left-100% ease-in-out-back">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo Hijrah" className="h-16 w-16" />
          </a>
        </XyzTransition>

        <XyzTransition appear xyz="fade-100% up-100% ease-in-out-back">
          <form
            onSubmit={searchFormSubmitHandler}
            className="search-bar flex flex-row items-center relative w-full max-w-md overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-searchBg pl-8 pr-10 py-2 rounded-[10px] w-full focus:outline-none"
              value={enteredSearch}
              onChange={searchChangeHandler}
            />

            <XyzTransition xyz="fade-100% right-100% ease-in-out-back duration-3">
              {enteredSearch.trim().length > 0 && (
                <button
                  type="button"
                  className="absolute right-3 text-2xl"
                  onClick={resetSearchHandler}
                >
                  &#10006;
                </button>
              )}
            </XyzTransition>
          </form>
        </XyzTransition>

        <div className="widget-group">
          <XyzTransitionGroup
            className="flex flex-row"
            appear
            xyz="fade-100% right-100% ease-in-out-back stagger-1"
          >
            <a
              href="#cartPage"
              className="cart flex flex-row items-center gap-x-4 px-4 py-2 rounded-lg duration-200 hover:bg-white active:brightness-90"
            >
              <div className="cart-icon">
                <img src={CartIcon} alt="Cart" />
              </div>
              <div className="cart__content text-textPrimary text-sm">
                <div>Keranjang</div>
                <div className="cart__content__price text-textSecondary">
                  Rp. 200.000
                </div>
              </div>
            </a>

            <a
              href="#userDetailPage"
              className="user flex flex-row items-center gap-x-2 px-4 py-2 rounded-lg duration-200 hover:bg-white active:brightness-90"
            >
              <div className="user-icon">
                <img src={UserIcon} alt="User's Avatar" />
              </div>
              <div className="user-name text-lg font-medium">Rangga</div>
            </a>
          </XyzTransitionGroup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
