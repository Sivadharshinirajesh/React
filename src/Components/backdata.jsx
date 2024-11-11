import React, { useEffect, useState } from "react";
import axios from "axios";
// import React ,{useState ,useEffect}from "react";
function Backend1() {
    const[product,setProduct]=useState([]);
    useEffect(()=>{
  console.log('Data');
  axios.get('http://localhost:9090/product/getall',
    // axios.get('http://localhost:9090/product/saveproduct',
    // axios.get('http://localhost:9000/Asset/GetAsset',
    {"header":{"Content-Type":"application/json"}}).then((res)=>{console.log(res);
        setProduct(res.data);
  
    }
).catch((err)=>{console.log(err)})
    },[])
    return (
        product.map((prd)=>(
        <h1>{prd.productName}</h1>
        
       ))
    );
}
export default Backend1 