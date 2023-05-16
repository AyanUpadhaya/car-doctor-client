import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from './../Providers/AuthProviders.jsx'

const Register = () => {
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const [success,setSuccess] = useState('')

    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        console.log(name,email,password,photoUrl)

        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(name,photoUrl)
            .then(result=>{})
            .catch(err=>console.log(err))
            setSuccess("User Registered Successfully")
            form.reset()
        })
        .catch(err=>console.log(err))

        

    }
    return (
        <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
            <div className="w-2/4">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Resgister now!</h1>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="fullName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                Already have an accout? <Link to="/login" className="label-text-alt link link-hover">Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            {success}
        </form>
    );
};

export default Register;