import { CAROUSEL_IMG } from "../utils/constants";


const RestaurantCollections = (restaurantinfo) => {
	const { imageId } = restaurantinfo;
	return (
		<>
		<div className="info-img-box flex cursor-pointer">
			<img className="info-img min-w-28 overflow-x-auto" src={CAROUSEL_IMG + imageId}></img>
		</div>
		</>
	);
};
export default RestaurantCollections;
