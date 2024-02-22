import {useEffect, useState } from 'react'

const useResturantCarousel = () => {

    const [carousel, setCarousel] = useState(null);
    const [resturantCard, setResturantCard] = useState(null);
  
    useEffect(()=>{
      const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setCarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        setResturantCard(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      fetchData()
    },[])
  return {carousel, resturantCard}
}

export default useResturantCarousel