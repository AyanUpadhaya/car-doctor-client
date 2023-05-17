import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Checkout = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const { title, img, price } = service
   
    const handleBookings =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const amount = form.amount.value;

        const bookingInfo ={
            name,
            img:img,
            email,
            date,
            amount,
            status:'pending'
        }


        fetch('https://car-doctor-server-sandy-nine.vercel.app/bookings',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(bookingInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('Data Posted')
            }
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleBookings} className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Book Service: {title}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date"  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" name="amount" defaultValue={price}  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Order Confirm</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;