import { useState, useEffect, useContext } from "react";
;

const useAllRestaurants = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState(null);
	useEffect(() => {
		// API call
		getRestaurants();
	}, [location]);

	const getRestaurants = async function () {
		try {
			const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
			const json = await data.json();

			// Top resturant 
			const topBrand = json?.data?.cards?.find((res) =>
				res?.card?.card?.id?.includes("top_brands_for_you");
			);

			// All the resturant - Title
			const allRestsTitle = json?.data?.cards?.find((res) =>
				res?.card?.card?.id?.includes("popular_restaurants_title")
			);
			// All the resturant - Data
			const allRests = json?.data?.cards?.find((res) =>
				res?.card?.card?.id?.includes("restaurant_grid_listing")
			);
			// Whats on Your Mind
			const infoLink = json?.data?.cards?.find((res) =>
				res?.card?.card?.id?.includes("whats_on_your_mind")
			);

			// Collecting ID
			const set1 = new Set(
				topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
					(item) => item.info.id
				)
			);
			const set2 = new Set(
				allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
					(item) => item.info.id
				)
			);

			// Collecting the ID based on Data

			const combinedSet = new Set([...set1, ...set2]);
			const allTotalRests = Array.from(combinedSet, (id) => {
				const objInArray1 =
					topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants.find(
						(item) => item.info.id === id
					);
				const objInArray2 =
					allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants.find(
						(item) => item.info.id === id
					);
				return objInArray1 || objInArray2;
			});
			const additionalRests =
				topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
					(item) => !set2.has(item.info.id)
				);
			setAllRestaurants([
				infoLink?.card?.card?.header,
				infoLink?.card?.card?.gridElements?.infoWithStyle?.info,
				topBrand?.card?.card?.header, // Top Brand title
				topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants, //20 items
				allRestsTitle?.card?.card,
				allTotalRests, // 9 items + 20 items
				additionalRests || [], //20 items - 9 items
			]);
			setFilteredRestaurants(
				allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants //9 items
			);
		} catch (err) {
			console.log(err);
			setAllRestaurants(null);
		}
	};
	return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};
export default useAllRestaurants;
