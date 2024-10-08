
const Search = () => {
    return (
      <>
        <div className="bg-white rounded-lg p-5 shadow-2xl flex items-center w-full max-w-xl">
          <input 
            type="text" 
            className="flex-grow p-3 text-black border border-gray-300 rounded-lg" 
            placeholder="Cari di sini..." 
          />
          <button className="bg-primary-blue p-3 rounded-lg text-white w-32 ml-2">
            Cari
          </button>
        </div>
      </>
    );
  };
  
  export default Search;
  