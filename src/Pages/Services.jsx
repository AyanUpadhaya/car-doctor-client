import { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";


const Services = () => {
    

    const [servicesData,setServiceData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/services')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
    
    console.log(servicesData)
    return (
        <div className="container mx-auto text-center">
            <h4 className='text-[#ff3811] font-bold'>About Us</h4>
            <h2 className='text-6xl font-bold'>Our Service Area</h2>
            <p className='text-[#737373] mt-8 mb-5'>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    servicesData.map(service=><ServiceCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;