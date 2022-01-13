import AdminNavbar from "./navbar/AdminNavbar";
import React from 'react';

export default function Dashboard() {
    // let time=new Date().toLocaleTimeString();
    // const [curtime,setTime]= React.useState(time);
    // const upadetTime=()=>{
    //     let time=new Date().toLocaleTimeString();
    //     setTime(time);
    // }
    // setInterval(upadetTime,1000);
    
    return(
        <>
        <AdminNavbar/>
        {/* <div className="text-center text-uppercase"><span style={{color:"blue"}}>{curtime}</span></div> */}

        </>
    )
}