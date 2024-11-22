import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Search = () => {
  return (
    <div className="max-w-[500px] bg-[#0066ff2c] rounded-full flex items-center justify-between">
      <input
        type="search"
        className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
        placeholder="Search Doctor"
      />
      <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 mr-4 cursor-pointer" />
    </div>
  );
};

export default Search;
