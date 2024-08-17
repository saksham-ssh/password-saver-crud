import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const FetchData = () =>{

    const [data, setData] = useState([]);
    const navigator = useNavigate();

    const getData = () =>{
        axios.get("https://66c06117ba6f27ca9a5671ee.mockapi.io/save-password")
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        getData();
    }, [])

    const handleNewPassword = () => {
        navigator('/');
    }
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`https://66c06117ba6f27ca9a5671ee.mockapi.io/save-password/${id}`)
        .then(()=>{
            getData();
        })
    }
    const setToLocalStorage = (id, email, password) =>{
        localStorage.setItem("id", id);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }

    return(<>
        <h1>Read Data</h1>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID. no</th>
                <th scope="col">Email Address</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((val)=>{
                        return(
                            <tr key={val.id}>
                                <th scope="row" >{val.id}</th>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link to="/update">
                                            <button type="button" className="btn btn-primary" onClick={()=>{
                                                setToLocalStorage(val.id, val.email, val.password);
                                            }}>Edit</button>
                                        </Link>
                                        <button type="button" className="btn btn-danger" onClick={()=>{
                                            handleDelete(val.id)
                                        }}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        <center><button type="button" className="btn btn-warning" onClick={handleNewPassword}>Create New Password</button></center>
    </>);
}

export default FetchData;