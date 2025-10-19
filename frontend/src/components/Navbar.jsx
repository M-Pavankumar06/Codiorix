import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navbar bg-base-200 text-primary sticky top-0 z-50">
      <div className="flex-1"><Link to="/" className="btn btn-ghost text-xl">Codiorix</Link></div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
