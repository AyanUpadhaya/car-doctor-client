import React, { useContext,useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';



const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = (event) => {
        //evemt preventDefault prevents page reloading
        event.preventDefault();
        //targeting the form and getting email and password data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.

        //signIn provider sign in the user
        //if user logged in 
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                const loggedUserEmail= loggedUser.email;
                console.log(loggedUser)


                //hitting JWT token api
                fetch('http://localhost:3000/jwt',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify({loggedUserEmail})
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem('car-access-token',data.token)
                    })

                navigate(from,{replace:true})
            })
            .catch(err => console.log(err))

    }
    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
            <div className="w-2/4">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                Dont have an accout? <Link to="/register" className="label-text-alt link link-hover">Sign Up</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    
                    
                        
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;