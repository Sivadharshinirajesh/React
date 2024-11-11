import React, { useEffect, useState } from "react";
import axios from "axios";
// import React ,{useState ,useEffect}from "react";
function Backend2() {
    const[asset,setAsset]=useState([]);
    useEffect(()=>{
  console.log('Data');
//   axios.get('http://localhost:9090/product/getall',
    // axios.get('http://localhost:9090/product/saveproduct',
    axios.get('http://localhost:9000/Asset/GetAsset',
    {"header":{"Content-Type":"application/json"}}).then((res)=>{console.log(res);
        setAsset(res.data);
  
    }
).catch((err)=>{console.log(err)})
    },[])
    return (
        asset.map((ast)=>(
        <h1>{ast.assetName}</h1>
        
    
       ))
     
    );
}
export default Backend2
