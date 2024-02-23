import { useEffect, useState } from "react"
import { SPECIFIC_CARD_URL } from "../constants"

const useCardList = ({id}) => {

    const [cardList, SetCardList] = useState();

    useEffect(()=>{
        fetchCardList();
    },[])

    const fetchCardList = async () =>{
        const data = await fetch(SPECIFIC_CARD_URL + id);
        const json = await data.json()
        SetCardList(json?.data);
    }

  return cardList
}

export default useCardList