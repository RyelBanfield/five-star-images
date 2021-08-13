import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const pages = [
  { name: 'Home', path: '/five-star-images' },
  { name: 'Topics', path: '/topics' },
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
      <h1>Five Star Images</h1>

      <div className="menu-icon">
        <button type="button" onClick={handleClick}>
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </button>
      </div>

      <ul className={click ? 'mobile-links-active slide-in' : 'nav-links'}>
        {pages.map((page) => (
          <li className="nav-item" key={page.name}>
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
