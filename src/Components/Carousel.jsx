
import imgOne from './../assets/images/banner/1.jpg'
import imgTwo from './../assets/images/banner/2.jpg'
import imgThree from './../assets/images/banner/3.jpg'
import imgFour from './../assets/images/banner/4.jpg'

const Carousel = () => {
    return (
        <>
            <div className="carousel w-full h-[600px] md:h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={imgOne} className="w-full rounded-xl" />
                    <div className="absolute top-[0] p-[80px] md:p-[100px] h-full bg-gradient-to-r from-black rounded-xl">
                        <h2 className='text-5xl text-white font-bold md:w-2/4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='text-white text-lg my-8 md:w-2/4'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div>
                            <button className='btn btn-error text-white mr-3'>Discover More</button>
                            <button className="btn btn-accent btn-outline">Latest Project</button>
                        </div>
                    </div>
                    

                    <div className="absolute flex right-5 bottom-5">
                        <a href="#slide4" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={imgTwo} className="w-full rounded-xl" />
                    <div className="absolute top-[0] p-[100px] h-full bg-gradient-to-r from-black rounded-xl">
                        <h2 className='text-5xl text-white font-bold md:w-2/4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='text-white text-lg my-8 md:w-2/4'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div>
                            <button className='btn btn-error text-white mr-3'>Discover More</button>
                            <button className="btn btn-accent btn-outline">Latest Project</button>
                        </div>
                    </div>
                    

                    <div className="absolute flex right-5 bottom-5">
                        <a href="#slide1" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={imgThree}className="w-full rounded-xl" />
                    <div className="absolute top-[0] p-[100px] h-full bg-gradient-to-r from-black rounded-xl">
                        <h2 className='text-5xl text-white font-bold md:w-2/4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='text-white text-lg my-8 md:w-2/4'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div>
                            <button className='btn btn-error text-white mr-3'>Discover More</button>
                            <button className="btn btn-accent btn-outline">Latest Project</button>
                        </div>
                    </div>
                    

                    <div className="absolute flex right-5 bottom-5">
                        <a href="#slide2" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={imgFour} className="w-full rounded-xl" />
                    <div className="absolute top-[0] p-[100px] h-full bg-gradient-to-r from-black rounded-xl">
                        <h2 className='text-5xl text-white font-bold md:w-2/4'>
                            Affordable Price For Car Servicing
                        </h2>
                        <p className='text-white text-lg my-8 md:w-2/4'>
                        There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <div>
                            <button className='btn btn-error text-white mr-3'>Discover More</button>
                            <button className="btn btn-accent btn-outline">Latest Project</button>
                        </div>
                    </div>
                    

                    <div className="absolute flex right-5 bottom-5">
                        <a href="#slide3" className="btn btn-circle hover:bg-red-600">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-red-600">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;