import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [users, setusers] = useState({});

    const navigate =  useNavigate()

    const dispatch = useDispatch()

    const getuserdata = (e) => {
        setusers({ ...users,  [e.target.name] : e.target.value })
    }

    const handelsubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(users));
        navigate("/all")
    }


    return (
        <div className='w-50 mx-auto' >
            <form className='mt-4' onSubmit={(e)=>handelsubmit(e)}>
            <h2 style={{ textAlign: "center" }}>FILL THE DATA</h2>
                <div className="mb-3 mt-4" style={{ textAlign: "center" }}>
                    <label className="form-label"><h3>name</h3></label>
                    <input type="text" name='name' className="form-control" onChange={getuserdata} required  />
                </div>
                <div className="mb-3" style={{ textAlign: "center" }}>
                    <label className="form-label"><h3>Email address</h3></label>
                    <input type="email" name='email' className="form-control" onChange={getuserdata} required/>
                </div>
                <div className="mb-3" style={{ textAlign: "center" }}>
                    <label className="form-label"><h3>age</h3></label>
                    <input type="text" name='age' className="form-control" onChange={getuserdata} required />
                </div>
                <div className="mb-3" style={{ textAlign: "center" }}>
                    <input className="form-check-input me-3" name='gender' value="male" type="radio" onChange={getuserdata} required />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="mb-3" style={{ textAlign: "center" }}>
                    <input className="form-check-input me-3" name='gender' value="female" type="radio" onChange={getuserdata}  required/>
                    <label className="form-check-label">Female</label>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}


