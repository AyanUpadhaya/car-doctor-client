import person from './../assets/images/about_us/person.jpg'
import parts from './../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="md:flex justify-between container mx-auto">
            <div className="relative w-full md:w-[557px] h-[557px]">
                <img src={person} alt="" className='w-[450px] h-[460px] rounded-xl' />
                <img src={parts} alt="" className='w-[327px] h-[332px] rounded-xl absolute bottom-[0%] right-[0] border-solid border-[10px] border-white' />
            </div>
            <div className='md:w-2/4'>
                <h4 className='text-[#ff3811] font-bold'>About Us</h4>
                <h2 className='text-6xl font-bold w-3/4'>
                    We are qualified & of experience in this field
                </h2>
                <p className='text-[#737373] mt-8 mb-5'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <p className='text-[#737373] mb-5'>
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="btn bg-[#ff3811] border-0 rounded text-white">Get More Info</button>
            </div>

            
        </div>
    );
};

export default About;