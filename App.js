
import './App.css';
import AddEmp from './supervisor/AddEmp';
import EmpWorking from './supervisor/EmpWorking';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './auth/Login';
import { AuthProvider } from './supervisor/AuthContext';
import AddProduct from './owner/AddProduct';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header" > */}
      <Router>
       
          
  <h3><Link to="/login"> Login</Link></h3>
     <h3><Link to="/empworking"> Add Employee Working</Link></h3>
     <h3>  <Link to="/addemp"> Add Employee</Link></h3>
     <h3>  <Link to="/addproduct"> Add Product</Link></h3>
            <div>
              <AuthProvider>
              <Routes>
                <Route path="/addemp" element={<AddEmp />}></Route>
                <Route path="/empworking" element={<EmpWorking />}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/addproduct" element={<AddProduct/>     }></Route>
              </Routes>
              </AuthProvider>
            </div>
    
        </Router>
   
      {/* </header> */}
    </div>
  );
}

export default App;
