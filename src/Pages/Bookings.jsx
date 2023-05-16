import { useContext, useEffect, useState } from "react";
import Booking from "../Components/Booking";
import './Pages.css'
import { AuthContext } from "../Providers/AuthProviders";
const Bookings = () => {
    const [bookings,setBookings] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/bookings?email=${user.email}`);
            const data = await response.json();
            setBookings(data);
        };
        fetchData();
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