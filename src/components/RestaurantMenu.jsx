import { Link, useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import useRestaurant from "../utils/Hooks/useRestaurant";
import RestaurantMenuProfile from "./RestaurantMenuProfile";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import { useSelector } from "react-redux";
import { CAROUSEL_IMG } from "../utils/constants";


const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurant = useRestaurant(resId);

	const resCart = {
		name: restaurant?.restInfo?.card?.card?.info?.name,
		id: restaurant?.restInfo?.card?.card?.info?.id,
		areaName: restaurant?.restInfo?.card?.card?.info?.areaName,
		imgUrl:
			CAROUSEL_IMG + restaurant?.restInfo?.card?.card?.info?.cloudinaryImageId,
		distance: restaurant?.restInfo?.card?.card?.info?.sla,
	};
	const resAddedToCart = useSelector((store) => store?.cart);

	if (restaurant?.length == 0) {
		return <ShimmerMenu />;
	}
	return !restaurant || !resCart.name ? (
		<div className="body-box res-not-page">
			{/* <img src={IMG_RESTAURANT_NOT_URL} /> */}
			<h3 className="">Restaurant Not Found.</h3>
			<p>Something went wrong.</p>
			<Link to="/">
				<button>GO BACK</button>
			</Link>
		</div>
	) : (
		<div id="res-menu" className="body-box">
			<RestaurantMenuProfile
				{...restaurant?.restInfo?.card?.card?.info}
			/>
			<div id="res-menu-cardbox">
				{restaurant?.restMenus?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
					(cardbox, idx) => {
						return cardbox?.card?.card?.itemCards ? (
							<RestaurantMenuInfo
								key={"cardbox" + idx}
								{...cardbox?.card?.card}
								resCart={resCart}
							/>
						) : null;
					}
				)}
			</div>
		</div>
	);
};
export default RestaurantMenu;
