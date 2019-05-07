import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <a href='dashboard.html'>
          <i className='fas fa-code-branch' /> Dev<span>Connector</span>
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Developers</a>
        </li>
        <li>
          <a href='register.html'>Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
