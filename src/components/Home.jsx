import { Link } from 'react-router-dom';
import useAllRestaurants from "../utils/Hooks/useAllRestaurants"
import Shimmer from './Shimmer'
import RestaurantCard from './RestaurantCard';
import RestaurantColletions from './RestaurantCollections';
import { BODY_IMG } from '../utils/constants';

const Home = () => {
  // const {resturantCard} = useResturantCarousel();
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useAllRestaurants();

    return allRestaurants?.length == 0 ? (
		<Shimmer />
	) : 
	(
		<>

<div className='max-w-[900px] mx-auto flex flex-wrap items-center x justify-between mb-28'>
      <div className='mt-24'>
        <h1 className='font-poppins text-3xl md:text-4xl font-medium '>Make Your Party With</h1>
        <h1 className='font-poppins text-3xl md:text-4xl font-medium'><span className='text-lime-500'>Delicious</span> Dishes</h1>
        <p className='max-w-[27rem] text-slate-600 mt-9 font-poppins leading-6 text-xs'>Introducing our food order app! Enjoy a variety of flavors delivered straight to you with a simple tap. From sushi to pizza, we've got you covered. No more waiting in lines – download now for a seamless dining experience!</p>
      </div>
      <div className='pt-20 hidden sm:block'>
          <img src={BODY_IMG} className='w-80' alt="" />
      </div>
    </div>

			

			<div className="body-box-res mt-10 body-box pt-40">
				<div className="">
					<h2 className="text-2xl  font-semibold">
						What's on Your Mind
					</h2>
					<div className="topBrand">
						{allRestaurants[1]?.map((info) => {
							return (							
									<RestaurantColletions key={"collections" + info?.id} {...info} />	
							);
						})}
					</div>
					<hr className="topBrandHr" />
				</div>
				<div className="main-header-box">
					<h2 className="main-card-title">
						<span>{allRestaurants[2]?.title}</span>
					</h2>
					<div className="topBrand">
						{allRestaurants[3].map((restaurant) => {
							return (
								<Link
									to={"/restaurant/" + restaurant.info.id}
									key={"allres" + restaurant.info.id}
								>
									<RestaurantCard {...restaurant.info} />
								</Link>
							);
						})}
					</div>
					<hr className="topBrandHr" />
				</div>
				<div className="main-header-box">
					<h2 className="main-card-title">
						{allRestaurants[4]?.title}
					</h2>
					{filteredRestaurants?.length != 0 ? (
						<div className="main-card">
							{filteredRestaurants?.map((restaurant) => {
								return (
									<Link
										to={
											"/restaurant/" +
											restaurant?.info?.id
										}
										key={"filter" + restaurant?.info?.id}
										
									>
										<RestaurantCard {...restaurant.info} />
									</Link>
								);
							})}

						</div>
					) : null}
				</div>
			</div>
		</>
	);
  
}

export default Home

// https://dribbble.com/shots/17229413-Restaurant-Landing-Page/attachments/12333646?mode=media