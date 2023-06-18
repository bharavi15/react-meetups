import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";
import classes from "./MainNavigation.module.css";
function MainNavigation(props) {
  const favouriteCtx = useContext(FavouriteContext);
  const totalFavourites = favouriteCtx.totalFavourites;
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
            <Link to="/favourite">My Favourites <span className={classes.badge}>{totalFavourites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
