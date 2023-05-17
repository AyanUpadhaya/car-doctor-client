export const ServiceLoader =()=>{
    fetch('https://car-doctor-server-sandy-nine.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            return data
        })

} 