export const ServiceLoader =()=>{
    fetch('http://localhost:3000/services')
        .then(res=>res.json())
        .then(data=>{
            return data
        })

} 