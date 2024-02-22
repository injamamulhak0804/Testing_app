import { Link } from 'react-router-dom';
import useResturantCarousel from '../utils/Hooks/useResturantCarousel'
import { BODY_IMG, CAROUSEL_IMG } from '../utils/constants'
import RestaurantCards from './RestaurantCards';
const Home = () => {
  const {carousel, resturantCard} = useResturantCarousel();

  return (
    <>

    {/* Hero Section */}

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

  {/* Secondary Section */}

   <div className='max-w-[900px] mx-auto'>
      <h2 className='font-poppins'>What's on your mind ?</h2>
      <div className='flex overflow-x-auto max-w-[100%] mx-auto gap-x-5'>
      {
        carousel?.map((item)=>(
          <div key={item.id}>
            <img className='max-w-36' src={CAROUSEL_IMG + item.imageId} alt="" />
          </div>
        ))
      }
      </div>


      {/* Card Item  */}

      <div>
        <h2 className='font-poppins my-5'>Zamam What's on your mind ? </h2>
        <div className='flex flex-wrap gap-5 justify-center'>
        {
          resturantCard?.map((items)=> (
            <Link to={"resturants/" + items.info.id} key={items.info.id}  className='no-underline text-black'>
              <RestaurantCards restaurant = {items} />
            </Link>
          ))
        }
        </div>
      </div>

      <center>
        <button className='px-10 py-3 bg-transparent outline-none border rounded-sm text-md font-poppins cursor-pointer my-8'>Show More</button>
      </center>
   </div>


  </>
  )
}

export default Home

// https://dribbble.com/shots/17229413-Restaurant-Landing-Page/attachments/12333646?mode=media