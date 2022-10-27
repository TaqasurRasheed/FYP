import React,{useContext,useState} from 'react'
import { AuthContext } from './AuthContext';
const EmpWorking = () => {
  const [name,setName]=useState("");
    const [pairs,setPairs]=useState("");
    const  {user} = useContext(AuthContext);
  return (
    <div>

        <h1>Working Details</h1>
        <input type="Date"></input>
        <select>
        <option>--SELECT--</option>
        {
          user.map((data)=>{
            return(
              <>
             
              <option>{data.name}</option>
           
              </>
            )
          })
        }
            
         
          </select>
        <input type="Number" placeholder="Add Pairs" value={pairs} onChange={(e)=>setPairs(e.target.value)}></input><br></br>
        <label>Status:</label><select>
          <option>Available</option>
          <option>Absent</option></select><br></br>
       <button>Save</button>
       <button>Back</button>
    </div>
  )
}

export default EmpWorking