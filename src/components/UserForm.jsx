import React, { useState } from 'react';

const UserForm = props => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const handleUser = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

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
                        value={user.firstName}
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
                        value={user.lastName}
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
                        value={user.email}
                        onChange={handleUser}
                    />
                </div>

                <div className="form-inline my-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="text"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleUser}
                    />
                </div>

                <div className="form-inline my-2">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        className="form-control"
                        type="text"
                        name="cpassword"
                        id="confirmPassword"
                        value={user.cpassword}
                        onChange={handleUser}
                    />
                </div>
            </form>
            
                <div>
                <p>Your Form Data:</p>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
                <p>{user.password}</p>
                <p>{user.cpassword}</p>
                </div>
        </div>
    );
}

export default UserForm;