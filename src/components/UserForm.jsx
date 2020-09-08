import React, { useState } from 'react';

const UserForm = props => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: ""
    });
    
    
    // function handleUser to change the appropriate input field, we need to conserve what's already been touched, spread it out, and take the key we want to change:
    const handleUser = e => {
        setUser({
            // bringing the entire collection of the state (user) and spreading out this object into each individual key value pair with ...user, so we can change the one we want. To change we need to target it and to do this we use (e) who has all the info captured inside it: [e.target.name]: e.target.value
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    // Refactoring undestructuring to understand it better:
    const { firstName, lastName, email, password, cpassword } = user;

    return (
        <div>
            <form className="col-4 mx-auto my-4 text-center">
                <div className="form-inline my-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={handleUser}
                    />
                </div>

                <div className="form-inline my-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={handleUser}
                    />
                </div>

                <div className="form-inline my-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleUser}
                    />
                </div>

                <div className="form-inline my-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handleUser}
                    />
                </div>

                <div className="form-inline my-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="cpassword"
                        id="confirmPassword"
                        value={cpassword}
                        onChange={handleUser}
                    />
                </div>
            </form>

            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {cpassword}</p>
            </div>
        </div>
    );
}

export default UserForm;