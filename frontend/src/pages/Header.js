import { Link } from "react-router-dom";
import './header.css'

function Header({username}) {
    return (
      <header className="header">
        <nav className="nav-left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/station">Station</Link>
            </li>
           </ul>
        </nav>
        <div className="nav-right">
          <span className="username">{username}</span>
          <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
        </div>
      </header>
    );
  }
  
export default Header;