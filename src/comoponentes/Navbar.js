import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { serachUser } from '../features/userDetailSlice';
import { useEffect } from 'react';

export default function Navbar() {

    const alldata = useSelector((state)=> state.app.users)
    const dispatch = useDispatch();

    const [serachdata , setSerachdata] = useState("")

    useEffect(()=>{
        dispatch(serachUser(serachdata))
    },[serachdata])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CRUD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Create post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all">All post  ({alldata.length})</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" style={{width: "600px"}} type="search" placeholder="Search"
                             aria-label="Search"
                             onChange={(e)=> setSerachdata(e.target.value)}
                             />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
