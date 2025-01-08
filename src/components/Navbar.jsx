import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              DataChain
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/wiki" className="nav-link">Wiki</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <a href="https://github.com/Rahmb0/DataChain" 
               className="nav-link">GitHub</a>
            <button className="primary-button">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 