import { CAROUSEL_IMG } from "../utils/constants";
const RestaurantCard = (restaurantList) => {
	const {
		name,
		cuisines,
		cloudinaryImageId,
		avgRating,
		sla,
		areaName,
		aggregatedDiscountInfoV3,
	} = restaurantList;

	return (
		<div className="card">
			<div className="img-box">
				<img className="img" src={CAROUSEL_IMG + cloudinaryImageId} />
				<div className="card-offer">
					<h3 className="card-head">
						{aggregatedDiscountInfoV3?.header}{" "}
						{aggregatedDiscountInfoV3?.subHeader}
					</h3>
				</div>
			</div>
			<h3 className="card-head">{name}</h3>
			<h4>
				{avgRating ? (
					<>
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
						{avgRating} •
					</>
				) : null}{""}
				{sla?.slaString}
			</h4>
			<p className="card-head">{cuisines?.join(", ")}</p>
			<p>{areaName}</p>
		</div>
	);
};
export default RestaurantCard;
