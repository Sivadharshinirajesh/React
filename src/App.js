
// import './App.css';
// import Filters from './Components/find';
// import Lifecycle2 from './Components/lifecycle';
// import StateExample2 from './Components/useeffect1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backend1 from './Components/backdata';
// import React, { useEffect ,useState} from 'react';
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Signups from "./e_cart/Signup/signup";
import { useState } from 'react';
import Signins from './e_cart/Signin/signin';
import NavbarComponent from './e_cart/Navbar/navbar';
import { LatestItems } from './e_cart/Latest/latest';
import { MensItem } from './e_cart/Latest/Mens';
import { WoensItem, WomensItem } from './e_cart/Latest/Womens';
import { KidsItem } from './e_cart/Latest/Kids';
import Backend2 from './Components/project/assetproject';



// import './state.css';
// import ClassComponents from './Classcomponent';
// import Abc from './loop';
// import Classprops from './props1';
// import Reactstate from './state/state';




function App() {
  // const[isAuthenticated,setIsAunthenticated]=useState(false)
  // const handleSignInSuccess=(nameUser) =>{
  //   console.log(nameUser);
  //   setIsAunthenticated(true);
  //   localStorage.setItem("username",nameUser)
  //   console.log("yes")

  // };

  return (  <>
  {/* <BrowserRouter>
  <NavbarComponent isAuthenticated={isAuthenticated}/>
  <Routes>
    <Route path="signup"element ={<Signups></Signups>}></Route>
    <Route path="signin"element={<Signins handleSignInSuccess={handleSignInSuccess}></Signins>}></Route>
    <Route path="navbar"element={<NavbarComponent isAuthenticated={isAuthenticated}/>}></Route>
    <Route path="latest"element={<LatestItems></LatestItems>}></Route>
    <Route path="mens"element={<MensItem></MensItem>}></Route>
    <Route path="womens"element={<WomensItem></WomensItem>}></Route>
    <Route path="kids"element={<KidsItem></KidsItem>}></Route>
 
    </Routes></BrowserRouter> */}
  
       {/* <Abc />
    <ClassComponents />  
      <Classprops name="siva"></Classprops> 
      <Reactstate></Reactstate> 
      <Lifecycle2></Lifecycle2> 
      <StateExample2></StateExample2> 
      <Example></Example> 
      <Filters></Filters>  */}
      {/* <Backend1></Backend1> */}
      <Backend2/>
      
      
    </>
    
  ); 
}


export default App;
