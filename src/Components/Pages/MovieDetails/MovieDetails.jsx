import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../Shared/localStorage";


const MovieDetails = () => {

  const handleAddToCart = (id) => {
    console.log(id)
    addToDb(id)
  }

  const { id } = useParams()
  console.log(id)
  const movies = useLoaderData()
  console.log(movies)
  const seletedMovie = movies.find(item => item.show.id == id)
  console.log(seletedMovie)
  const { name, genres, image, language, network, summary, runtime, type, url,schedule, _links, rating, } = seletedMovie.show;

  return (
    <div>
      <div>


      </div>
      <section className="text-gray-600 body-font my-24">
        <div className="container mx-auto flex px-5 md:flex-row flex-col border p-4 shadow-md items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <Link to={url}> <button className="inline-flex  px-12 py-2  text-black font-semibold bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300 focus:outline-none hover:bg-indigo-600 rounded text-lg">See More</button></Link>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover w-2/3 object-center rounded mx-auto" alt="hero" src={image.original} />
          </div>
        </div>
      </section>


      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{language}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Movie:  {name}</h1>
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Genres :</span>{genres.map((item, i) =>
                    <li className="inline" key={i}> {item},</li>
                  )}
                </p>
                <div className="flex mb-4">
                  <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                  <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                  <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                </div>
                <p className="leading-relaxed mb-4">{summary}</p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Duration</span>
                  <span className="ml-auto text-gray-900">{runtime} Mins</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Type</span>
                  <span className="ml-auto text-gray-900">{type}</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Ratings</span>
                  <span className="ml-auto text-gray-900">{rating.average ? rating.average : 'not available'} /10</span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                  <button  onClick={() => window.my_modal_5.showModal()} className="flex ml-auto px-12 py-2 rounded  text-black font-semibold bg-gradient-to-r from-indigo-300 via-purple-200 to-pink-300">Book Your Seat</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/*    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
            </div>
          </div>
        </section>

        {/* MODALS */}

        {/* Open the modal using ID.showModal() method */}
        {/* <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button> */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg"> You're Booking Ticket For   '{name}' !</h3>
            <p className="py-4"><span className="font-bold text-xl ">Schedule</span> : <br /> <br />
            Time: {schedule.time}</p>
            <p>Day: {schedule.days[0]}</p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => handleAddToCart(seletedMovie.show.id)} className="btn-primary">Done</button>
            </div>
          </form>
        </dialog>

      </div>
    </div>
  );
};

export default MovieDetails;