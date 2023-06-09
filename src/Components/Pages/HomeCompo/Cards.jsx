import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";


const Cards = () => {
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCard(data)
            })
    }, [])

    console.log(card)
    return (
        <div className="my-12">
            <h2 className="text-4xl font-bold text-center">Explore TV Shows</h2>


            <div className="grid md:grid-cols-2 gap-5 my-24 px-12 mx-auto">
                {
                    card.map((item, i) => <SingleCard key={i} item={item}></SingleCard>)
                }

            </div>
        </div>
    );
};

export default Cards;