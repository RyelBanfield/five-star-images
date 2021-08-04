import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Topics', path: '/topics' },
];

const Navbar = () => (
  <nav>

    <ul className="nav-links">
      {pages.map((page) => (
        <li className="nav-item" key={page.name}>
          <Link className="nav-link" to={page.path}>
            {page.name}
          </Link>
        </li>
      ))}
    </ul>

  </nav>
);

export default Navbar;
