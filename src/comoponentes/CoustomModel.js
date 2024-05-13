import React from 'react'
import { useSelector } from 'react-redux'

export default function CoustomModel({ id, showpopup, setShowpopup }) {

    const alldata = useSelector((state) => state.app.users)

    const singleuser = alldata.filter((ele) => ele.id === id)


    return (
        <div>
            <div className='bagk'>
                <div className='modlecontainer text-center'>
                    <button onClick={()=> setShowpopup(false)}>Close</button>
                    <h1 className='my-2'>{singleuser[0].name}</h1>
                    <h2 className='my-3'>{singleuser[0].email}</h2>
                    <h4 className='my-3'>{singleuser[0].age}</h4>
                    <p>{singleuser[0].gender}</p>
                </div>
            </div>
        </div>
    )
}

