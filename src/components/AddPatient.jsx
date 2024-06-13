import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddPatient = () => {
    const [data,setData]=useState([
        {
            "pid":"",
            "pname":"",
            "department":"",
            "date":""
        }
   ])
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8087/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="added") {
                    alert("Successfully added")
                } else {
                    alert("error!")
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient ID</label>
                            <input type="text" className="form-control" name="pid" value={data.pid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" name="pname" value={data.pname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Department</label>
                            <input type="text" className="form-control" name="department" value={data.department} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatient