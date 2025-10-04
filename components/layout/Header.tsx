const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <span className="text-2xl font-bold">Your Logo</span>
        </div>

        {/* Types of accommodation */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Rooms</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Mansion</span>
          <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Countryside</span>
        </div>

        {/* Search Bar, Sign In, Sign Up (Placeholder) */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (Placeholder) */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-2 py-1"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Sign In
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
