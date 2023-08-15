import SearchBar from '@/components/ui/SearchBar';

function TopBar() {
  return (
    <>
      <div className='flex-1 flex flex-col'>
        <div className='px-2 md:px-20 py-2 flex justify-between bg-white h-18 border-b-2'>
          <div className='flex items-center'>
            <SearchBar />
          </div>
          <div className='flex items-center'>
            <div className='pr-6'>Tim Cook</div>
            <div className='h-10 w-10'>
              <div className='h-full w-full rounded-full mx-auto bg-gray-200'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
