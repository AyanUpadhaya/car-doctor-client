import { useContext, useEffect, useState } from "react";
import Booking from "../Components/Booking";
import './Pages.css'
import { AuthContext } from "../Providers/AuthProviders";
const Bookings = () => {
    const [bookings,setBookings] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() => {
  
        fetch(`https://car-doctor-server-sandy-nine.vercel.app/bookings?email=${user.email}`,{
            method:'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setBookings(data))

    }, []);
    return (
        <table className="bookings">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
          bookings.map((booking) =><Booking key={booking._id} booking={booking}></Booking>) 
          }
        </tbody>
      </table>
    );
};

export default Bookings;