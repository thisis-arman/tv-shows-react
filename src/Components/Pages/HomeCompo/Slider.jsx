
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Slider = () => {
    return (
        <div>
             <AwesomeSlider className='md:h-[700px] h-[400px]'>
             <div>
                    <video autoPlay loop muted  className='w-full object-cover m-0' src="https://cdn.coverr.co/videos/coverr-view-from-wing-mirror-8282/1080p.mp4"></video>

                    <div data-aos="fade-up" className="absolute top-24 md:top-1/2 md:mx-32 p-10  md:bg-opacity-20 shadow-xl rounded-md text-white z-10 md:bg-slate-500">
                        <h2 className="md:text-5xl text-2xl text-white   font-extrabold bottom-0">Enjoy the journey</h2>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae, neque sed minus laborum et!</p>
                        <Link to='/movies' className="btn-primary ">Watch Now</Link>
                    </div>
                </div>
             <div>
                    <div>
                    <video autoPlay loop muted className="z-0" src="https://cdn.coverr.co/videos/coverr-sunset-in-bali-4090/1080p.mp4"></video>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="absolute top-24 md:top-1/2 md:mx-32 p-10  md:bg-opacity-20 shadow-xl rounded-md text-white z-10 md:bg-slate-500">
                        <h2 className="md:text-5xl text-2xl text-white   font-extrabold bottom-0">Documentary Shows</h2>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae, neque sed minus laborum et!</p>
                        <Link to='/movies' className="btn-primary ">Watch Now</Link>
                    </div>
                   
                   
                </div>
                
               
                <div>
                    <video autoPlay loop muted  src="https://cdn.coverr.co/videos/coverr-filmmaker-walking-past-yachts-385/1080p.mp4"></video>

                    <div data-aos="fade-up" className="absolute top-24 md:top-1/2 md:mx-32 p-10  md:bg-opacity-20 shadow-xl rounded-md text-white z-10 md:bg-slate-500">
                        <h2 className="md:text-5xl text-2xl text-white   font-extrabold bottom-0">Explore Cinematography </h2>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae, neque sed minus laborum et!</p>
                        <Link to='/movies' className="btn-primary ">Watch Now</Link>
                    </div>
                </div>
                
               
            </AwesomeSlider>
           
        </div>
    );
};

export default Slider;