import React ,{useState ,useEffect}from "react";
 function StateExample2(){
    const[user,setUser] = useState('reactjs')
    const[data,setData] = useState('Springboot')
    const[cssfram,setCssfram]=useState('Bootsrap')
    useEffect(() => {setTimeout(() => {
        console.log("hellow")},3000)},[data])
        const changeName=() => {
            setUser('library')
        }
        const changeData=()=>{
            alert('Framework of')
            setData('Java')
        }
        const changeCss=()=>{
            alert('framework of')
        setCssfram('Css')
        }
        return(
            <>
            <h3>{user}</h3>
            <h3>{data}</h3>
            <h2>{cssfram}</h2>
            <button onClick={changeName}>ChangeName</button>
            <button onClick={changeData}>changeData</button>
            <button onClick={changeCss}>changeData</button>
            </>
        )
 }
//  function Example(){
//     const [user,SetUser]=useState('hellow')
//     useEffect(()=>{setTimeout(()=>{
//         console.log('amma')
//     },2000)})
//     const excerise=()=>
//         SetUser('sister')
//     return(
//         <>
//         <h1>{user}</h1>
//         <button onClick={excerise}>change</button></>
//     )
//  }

export default StateExample2;
// export default Example;