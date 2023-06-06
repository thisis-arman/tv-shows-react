import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";


const Cards = () => {
    const [card,setCard]=useState([])

    useEffect(()=>{
            fetch("https://api.tvmaze.com/search/shows?q=all")
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
                setCard(data)
            })
        },[])

        console.log(card)
    return (
        <div className="grid md:grid-cols-2 gap-5">
            {
                card.map((item,i)=><SingleCard key={i} item={item}></SingleCard>)
            }
            
        </div>
    );
};

export default Cards;