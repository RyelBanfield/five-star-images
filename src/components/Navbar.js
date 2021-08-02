import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Topics', path: '/topics' },
  { name: 'Collections', path: '/collections' },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <nav>
      <button type="button" className="menu-icon" onClick={handleClick}>
        <i>{click ? <FaTimes /> : <FaBars />}</i>
      </button>

      <ul className={click ? 'mobile-links-active slide-in' : 'nav-links'}>
        {pages.map((page) => (
          <li key={page.name}>
            <Link className="nav-link" to={page.path} onClick={closeMobileMenu}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
