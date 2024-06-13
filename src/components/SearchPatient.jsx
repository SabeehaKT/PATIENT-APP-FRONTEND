import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchPatient = () => {
    const [data, setData] = useState(
        {
            "pid": ""
        }
    )
    const [result, setResult] = useState([])


    const deletePatient = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8087/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "deleted") {
                    alert("Successfully Deleted")
                } else {
                    alert("error in deletion")
                }
            }).catch().finally()
    }
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8087/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Patient ID</label>
                                <input type="text" className="form-control" name="pid" value={data.pid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>Search</button>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">PATIENT ID</th>
                                                <th scope="col">PATIENT NAME</th>
                                                <th scope="col">DEPARTMENT</th>
                                                <th scope="col">DATE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.pid}</th>
                                                        <td>{value.pname}</td>
                                                        <td>{value.department}</td>
                                                        <td>{value.date}</td>
                                                        <td><button className="btn btn-danger" onClick={() => { deletePatient(value._id) }}>Delete</button></td>
                                                    </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default SearchPatient