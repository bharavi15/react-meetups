import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourite">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
