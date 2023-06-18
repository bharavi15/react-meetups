import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourites-context";
function MeetupItem(props) {
	const favouritesCtx = useContext(FavouriteContext);
	const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);
	function toggleFavouriteStatusHandler() {
		if (itemIsFavourite) {
			favouritesCtx.removeFavourite(props.id);
		} else {
			favouritesCtx.addFavourite({
				id: props.id,
				title: props.title,
				image: props.image,
				address: props.address,
				description: props.description,
			});
		}
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} srcset="" />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<p>{props.address}</p>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite?'Remove from Favourites':'To Favourites'}</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
