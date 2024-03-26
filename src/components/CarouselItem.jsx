import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCarouselItem from '../utils/Hooks/useCarouselItem';
import useFindCarouselData from '../utils/Hooks/useFindCarouselData';

const CarouselItem = () => {

  const [crctItem, setCrctItem] = useState("");
  const [id, setId] = useState("");

  const {carouselid} = useParams();
  const {datas} = useCarouselItem(carouselid);

  if (!datas) return;
  
  const item = datas?.find((item, index)=>{
    return item.id == carouselid
  })

  // setId(item.action.link);

  // useEffect(()=>{
  //   fetchData()
  // }, [])

  // useFindCarouselData()

  // const fetchData = async () => {
  //   const data = await fetchData(id)
  //   const json = await data.json();
  //   console.log(json);
  // }
  

  return (
    <div>
      <h1>Carousel Item</h1>
      <h1>Carousel Item</h1>
      <h1>Carousel Item</h1>
      <h1>Carousel Item</h1>
      <h1>Carousel Item</h1>
      <h1>Carousel Item</h1>
      <h1>Carousel Item</h1>
    </div>
  )
}

export default CarouselItem