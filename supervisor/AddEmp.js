import React,{useContext, useState} from 'react'
import { AuthContext } from './AuthContext';
import { useNavigate } from "react-router-dom";

const AddEmp = () => {
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [cnic,setCnic]=useState("");
    const  {user, setUser} = useContext(AuthContext);

    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (number && name && email && address && cnic) {
        const newEntry = {
          id: new Date().getTime().toString(),
          number,
          name,
          email,
          address,
          cnic,
        };
        setUser([...user, newEntry]);
        setName("");
        setNumber("");
        setAddress("");
        setCnic("");
        setEmail("");
        navigate("/EmpWorking");
      } else {
        alert("plz fill the data");
      }
    };
    console.log(user);
  return (
    <div>
   
        <>
      <form onSubmit={handleSubmit}>
      <input classNameName='empName' type="text " placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input classNameName='empName' type="email " placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <input classNameName='empPhone' type="text" placeholder="Phone Number" value={number} onChange={(e)=>setNumber(e.target.value)}></input><br></br>
        <input classNameName='empPhone' type="text" placeholder="permanent Address" value={address} onChange={(e)=>setAddress(e.target.value)}></input><br></br>
        <input classNameName='empPhone' type="text" placeholder="CNIC" value={cnic} onChange={(e)=>setCnic(e.target.value)}></input><br></br>
        <input type="submit" />
       <button>Back</button>
      </form>
       
 
</>
    </div>

  )
}

export default AddEmp