import { useState } from "react";


const Booking = ({booking}) => {
    const{
        _id,
        name,
        img,
        email,
        date,
        amount,
        status
    }=booking
    const [bookingStatus,setBookingStatus] = useState(status)
    console.log(bookingStatus)
    const handleBooking = ()=>{
        if(bookingStatus === "approved"){
            alert("Already approved")
            
        }else{
            fetch(`https://car-doctor-server-sandy-nine.vercel.app/bookings/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({"status":"approved"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('Updated')
                setBookingStatus("Approved")
            }
        })
        }
        
    }
    return (
        <tr key={_id}>
            <td><img src={img}  /></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>
                <button className="btn btn-secondary" onClick={handleBooking}>
                {bookingStatus}
                </button>
            </td>
        </tr>
    );
};

export default Booking;