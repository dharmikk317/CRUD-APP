import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from '../features/userDetailSlice'

export default function Update() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [updatedata, setUpdatedata] =  useState();
    
    const {users } = useSelector((state) => state.app)


    useEffect(()=>{
        if(id){
            const singleuser = users.filter((ele) => ele.id === id);
            setUpdatedata(singleuser[0])
        };
    },[])

    const newData = (e) => {
        setUpdatedata({...updatedata , [e.target.name] : e.target.value})
    }


    const handelUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateUser(updatedata))
        navigate("/all")
    }

    return (
        <div>
            <div className='w-50 mx-auto' >
                <form className='mt-4'onSubmit={handelUpdate}>
                    <h2 style={{ textAlign: "center" }}>EDIT THE DATA</h2>
                    <div className="mb-3 mt-4" style={{ textAlign: "center" }}>
                        <label className="form-label"><h3>name</h3></label>
                        <input type="text" name='name' className="form-control" 
                        value={updatedata && updatedata.name}
                        onChange={newData}
                         />
                    </div>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        <label className="form-label"><h3>Email address</h3></label>
                        <input type="email" name='email' className="form-control" 
                         value={updatedata && updatedata.email}
                        onChange={newData}
                         />
                    </div>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        <label className="form-label"><h3>age</h3></label>
                        <input type="text" name='age' className="form-control" 
                         value={updatedata && updatedata.age}
                        onChange={newData}
                         />
                    </div>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        <input className="form-check-input me-3" name='gender' value="male" type="radio"
                        checked={updatedata && updatedata.gender === "male"}
                        onChange={newData}
                         />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="mb-3" style={{ textAlign: "center" }}>
                        <input className="form-check-input me-3" name='gender' value="female" type="radio"
                        checked={updatedata && updatedata.gender === "female"}
                         onChange={newData}
                          />
                        <label className="form-check-label">Female</label>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
