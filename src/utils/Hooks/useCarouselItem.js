import { useEffect, useState } from "react";

const useCarouselItem = (id) =>{
    const [datas, setDatas] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setDatas(json.data.cards[0]?.card?.card?.imageGridCards?.info)
    }

    return {datas}

}

export default useCarouselItem;

