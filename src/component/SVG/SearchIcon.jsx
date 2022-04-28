const SearchIcon = ({ className = '' }) => {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M27.125 27.9167L20.9567 21.5502L27.125 27.9167ZM24.375 13.0417C24.375 16.2353 23.1436 19.2982 20.9518 21.5564C18.76 23.8147 15.7872 25.0833 12.6875 25.0833C9.58778 25.0833 6.61502 23.8147 4.42319 21.5564C2.23136 19.2982 1 16.2353 1 13.0417C1 9.84802 2.23136 6.78517 4.42319 4.52692C6.61502 2.26867 9.58778 1 12.6875 1C15.7872 1 18.76 2.26867 20.9518 4.52692C23.1436 6.78517 24.375 9.84802 24.375 13.0417V13.0417Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
