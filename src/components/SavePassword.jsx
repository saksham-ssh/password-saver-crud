import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FetchData from "./FetchData";


const SavePassword = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigator = useNavigate();

    const handleSubmit = (e) =>{
        if(!email || !password)
            return;
        e.preventDefault();
        axios.post('https://66c06117ba6f27ca9a5671ee.mockapi.io/save-password', 
            {
                email: email,
                password: password
            }
        ).then(()=>{
            navigator("/read")
        })
    }

    const handleShowPassword = () =>{
        navigator('/read')
    }

    return(
        <>
            <div className="container">
                <h1 className="mt-3 mb-3">Save Your Password Here</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-between p-10">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        <button type="button" className="btn btn-warning" onClick={handleShowPassword}>Show Password</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SavePassword;