import SearchIcon from '@/assets/search-icon.svg';

function SearchBar() {
  return (
    <div className='pt-2 pb-2 relative w-100 mx-auto text-gray-600'>
      <button type='submit' className='absolute left-0 top-0 mt-4 ml-4'>
        <img src={SearchIcon} />
      </button>
      <input className='border-2 border-gray-300 bg-white w-[35vw] h-10 px-5 pl-12 rounded-lg text-lg focus:outline-none' type='search' name='search' placeholder='Search' />
    </div>
  );
}

export default SearchBar;
