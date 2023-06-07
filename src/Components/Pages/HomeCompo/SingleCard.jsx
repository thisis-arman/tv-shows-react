import { Link } from "react-router-dom";


const SingleCard = ({ item }) => {
    console.log(item)
    const {averageRuntime,image,name,language,rating,genres,id}=item.show
    console.log(rating)
    return (
        <div>
            {/* <h2>ITemsssss</h2> */}
            <div className="flex lg:card-side bg-base-100 shadow-xl hover:shadow-2xl  hover:shadow-slate-600 hover:border ">
                <figure><img className="w-full  object-contain" src={image.medium} alt="Album" /></figure>
                <div className="card-body text-left">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="-my-2"><span className="font-semibold">Duration</span> : {averageRuntime} minutes</p>
                   {rating.average && <p className="-my-2"><span className="font-semibold">Imbb Ratings</span> : {rating.average}/10 </p>}
                    <p className="-my-2"><span className="font-semibold">Language</span> : {language} </p>
                    <p>
                        <span className="font-semibold">Genres :</span>{genres.map((item,i)=>
                            <li className="inline" key={i}> {item},</li>
                            )}
                    </p>
                    <div className="card-actions  justify-start">
                     <Link to={`/movie-detail/${id}`}>
                     <button className="btn-primary">Details</button>
                     </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCard;