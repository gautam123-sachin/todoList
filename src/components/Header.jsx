import React from 'react';

/**
 * Represents the header component of the Todo List App.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        {/* App Name */}
        <h1 className='app-name text-light'>Todo List App</h1>
      </nav>
    </header>
  );
};

export default Header;