import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser, showUser } from '../features/userDetailSlice'
import CoustomModel from './CoustomModel';

export default function Read() {
    const dispatch = useDispatch();

    const [id, setId] = useState()
    const [showpopup, setShowpopup] = useState(false)
    const [radioData, setRadioData] = useState("")


    const { users, loading, serachData } = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showUser())
    }, [])

    if (loading) {
        return (<h2>Loading...</h2>)
    }


    return (
        <div>
            {showpopup && <CoustomModel id={id} showpopup={showpopup} setShowpopup={setShowpopup} />}
            <div className='container' style={{ textAlign: "center" }}>

                <h1 className='my-3'>ALL DATA</h1>

                <input className="form-check-input mx-3" name='gender' checked={radioData === ""}  type="radio"
                onChange={(e)=> setRadioData("")}  />
                <label className="form-check-label">All</label>

                <input className="form-check-input mx-3" name='gender' checked={radioData === "male"
                } value="male" type="radio" onChange={(e)=> setRadioData(e.target.value)}  />
                <label className="form-check-label">Male</label>

                <input className="form-check-input mx-3" name='gender' checked={radioData === "female"} value="female" type="radio" onChange={(e)=> setRadioData(e.target.value)}  />
                <label className="form-check-label">Female</label>


                {users &&

                    users?.filter((ele) => {
                        if (serachData?.length === 0) {
                            // ==>> mistake is a useselector is a select serachdata but 
                            // me select serachuser 
                            return ele
                        } else {
                            return ele?.name?.toLowerCase().includes(serachData?.toLowerCase())
                        }
                    }).filter((ele)=>{
                        if(radioData === "male"){
                            return ele.gender === radioData
                        } else if (radioData === "female"){
                            return ele.gender === radioData
                        } else {
                            return ele
                        }
                    })


                        .map((ele) => (<div key={ele.id} className="w-50 my-5 mx-auto card">
                            <div className="card-body" style={{ textAlign: "center" }}>
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{ele.email}</h6>
                                <p className="card-text">{ele.gender}</p>
                                <button className="card-link" onClick={() => [setId(ele.id), setShowpopup(true)]} >View</button>
                                <Link to={`/edit/${ele.id}`} className="card-link">Edit</Link>
                                <button onClick={() => dispatch(deleteUser(ele.id))} className="card-link" >Delete</button>
                            </div>
                        </div>))}
            </div>
        </div>
    )
}
