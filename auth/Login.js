import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        username,
        password,
      };
      setUser([...user, newEntry]);
      navigate("/addEmp");
      setUsername("");
      setPassword("");
    } else {
      alert("plz fill the data");
    }
  };
  console.log(user);
  return (
    <>
      <div className="list-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container mb-7">
            <label>Username: </label>
            <input
              value={username}
              // value={user?.username}
              onChange={(e) => setUsername(e.target.value)}
              
              placeholder="Login Name"
           
            /><b></b><b></b>
            <input
              type="password"
              value={password}
              // value={user?.password}
              onChange={(e) => setPassword(e.target.value)}

              placeholder="Password"
              name="password"
            /><b></b><b></b>

            <input type="submit" />
            
          </div>
          
        </form>
      </div>
       {/* <div>
        {user.map((curElem) => {
          const { id, username, password } = curElem;
          return (
            <div className="showDataStyle" key={id}>
              <p>{username}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>  */}
    </>
  )
}

export default Login