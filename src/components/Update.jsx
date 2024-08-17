import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Update = () =>{

    const [id, setId] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
    }, [])

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://66c06117ba6f27ca9a5671ee.mockapi.io/save-password/${id}`, {
            email: email,
            password: password
        })
        .then(()=>{
            navigator('/read')
        })
    }

    return (
        <>
            <h1>Update Your Password</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </form>
        </>
    );
}

export default Update;