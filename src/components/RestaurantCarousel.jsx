import { Link } from 'react-router-dom';
import Shimmer from '../Shimmer/ShimmerCarousel'
import useResturantCarousel from '../utils/Hooks/useResturantCarousel';
import { CAROUSEL_IMG } from '../utils/constants';

const RestaurantCarousel = () => {

  const {carousel} = useResturantCarousel();
    

  if(carousel === null) return <Shimmer />
    
  return (
  <div className='flex overflow-x-auto max-w-[100%] mx-auto gap-x-5'>
  {
    carousel?.map((item)=>(
      <Link key={item.id} to={"carousel/" + item.id}>
      <div>
        <img className='max-w-36 cursor-pointer' src={CAROUSEL_IMG + item.imageId} alt="" />
      </div>
      </Link>
    ))
  }
  </div>
  )
}

export default RestaurantCarousel