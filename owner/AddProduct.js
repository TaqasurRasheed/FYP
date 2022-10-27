
import React, { useState } from 'react'

const AddProduct = () => {
const [clientName,setName]=useState("");
const [category,setCategory]=useState("");
const[productName,setProductName]=useState("");
const[productCode,setProductCode]=useState("");
const[quantity,setQuantity]=useState("");
const[productDes,setProductDes]=useState("");
const[user,setUser]=useState([]);

const handleSubmit=(e) =>{
    e.preventDefault();
    if(clientName && category && productName && productCode && quantity && productDes){
        const newEntry ={
            id: new Date().getTime().toString(),
            clientName, category, productName, productCode,quantity,productDes
        };
        setUser([...user,newEntry]);
        setName("");
        setCategory("");
        setProductName("");
        setProductCode("");
        setQuantity("");
        setProductDes("");
    }else{
        alert("please fill the data");
    }
};
  console.log(user);
  return (
    <>
 <form onSubmit={handleSubmit}>
    <div>
        <input type="text" placeholder="Add client Name" value={clientName} onChange={(e)=>setName(e.target.value)}></input><br></br>
         <input type="text" placeholder="Add Category" value={category} onChange={(e)=>setCategory(e.target.value)} ></input><br></br>
         <input type="text" placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}></input><br></br>
         <input type="text" placeholder="Add Product Code"value={productCode} onChange={(e)=>setProductCode(e.target.value)} ></input><br></br>
         <input type="text" placeholder="Product Description"value={productDes} onChange={(e)=>setProductDes(e.target.value)} ></input><br></br>
         
         <select>

            <option>--Select Size--</option>
            <option> Extra Large</option>
            <option>Large</option>
            <option>Medium</option>
            <option>small</option>
         </select><br></br>
         <input type="Number" placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input><br></br>
         {/* Delivery Time  */}
           {/* Add product Description  */}
           <button>Save</button>



    </div>

    <div>
        <table cellPadding={2} border={2} bgcolor={"lightgrey"}>
            <tr >
                <th>Client Name</th>
                <th>Category</th>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Product Descrption</th>
                <th>Quantity</th>
            </tr>
            
                {
                    user.map((data)=>{
                        return(
                            <tr>
                            <td>{data.clientName}</td>
                            <td>{data.category}</td>
                            <td>{data.productName}</td>
                            <td>{data.productCode}</td>
                            <td>{data.productDes}</td>
                            <td>{data.quantity}</td>
                          </tr>
                        )
                    })
                }

        </table>
    </div>

    </form>
   
    </>
  )
}

export default AddProduct