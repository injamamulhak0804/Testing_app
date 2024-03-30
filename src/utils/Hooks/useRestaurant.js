import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
	const [restaurant, setRestaurant] = useState([]);
	useEffect(() => {
		getRestaurantMenu();
	}, []);
	const getRestaurantMenu = async () => {
		try {
			const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=" + resId);
			const json = await data.json();
			const restInfo = json?.data?.cards?.find((res) =>
				res?.card?.card["@type"]?.includes("food.v2.Restaurant")
			);
			const restMenus = json?.data?.cards?.find((res) =>
				res?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menu) =>
					menu?.card?.card["@type"]?.includes("food.v2.ItemCategory")
				)
			);
			setRestaurant({ restInfo, restMenus });
		} catch (err) {
			console.log(err);
			setRestaurant(null);
		}
	};
	return restaurant;
};

export default useRestaurant;
