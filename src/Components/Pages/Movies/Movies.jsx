import { useEffect, useState } from "react";
import SingleCard from "../HomeCompo/SingleCard";


const Movies = () => {
    const [movies,setMovies]=useState([])
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data)
            })
    }, [])
    return (
        <div>
             <div className="my-24">
            <h2 className="text-4xl font-bold text-center">All TV Shows</h2>


            <div className="grid md:grid-cols-2 gap-5 my-24 px-12 mx-auto">
                {
                    movies.map((item, i) => <SingleCard key={i} item={item}></SingleCard>)
                }

            </div>
        </div>
            
        </div>
    );
};

export default Movies;