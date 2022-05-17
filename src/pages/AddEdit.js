import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    contact: "",
}

const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const {name, email, contact} = state;

    const navigate =  useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact ) {
            toast.error("Please provide value into each field", {
                position: toast.POSITION.TOP_CENTER
            })
        }
        else {
            axios
            .post("http://localhost:5000/api/post",{
                name,
                email,
                contact,
            })
            .then(()=> {
                setState({name: "", email: "", contact: ""});
            })
            .catch((err)=> toast.error(err.response.data, {
                position: toast.POSITION.TOP_CENTER
            }));
            toast.success("Contact added successfully", {
                position: toast.POSITION.TOP_CENTER
            });
            setTimeout(()=>  navigate("/"), 200);
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value });
    }



  return (
    <div style={{marginTop: "100px"}}>
        <form style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            allignContent: "center"
        }}
        onSubmit={handleSubmit}
        >
    <label htmlFor="name"></label>
    <input 
    type="text"
    name="name" 
    id="name"
    placeholder='Enter name...' 
    value={name}
    onChange={handleInputChange}

     />
    <label htmlFor="email"></label>
    <input 
    type="email"
    name="email" 
    id="email"
    placeholder='Enter email...' 
    value={email}
    onChange={handleInputChange}

    />
    <label htmlFor="contact"></label>
    <input 
    type="number"
    name="contact" 
    id="contact"
    placeholder='Enter contact...' 
    value={contact}
    onChange={handleInputChange}

    />
    <input type="submit" value="save" />
    <Link to="/" >
   <input type="button" value="Go back" />

    </Link>
   </form>
        
    </div>
  )
}

export default AddEdit