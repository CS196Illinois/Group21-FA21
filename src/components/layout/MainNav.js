import { Link } from "react-router-dom";

import styling from "./MainNav.module.css";

function MainNavigation() {
  return (
    <header className={styling.header}>
      <div className={styling.logo}>Covid Cam</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
