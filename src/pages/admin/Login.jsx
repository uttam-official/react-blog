import axios from "axios";
import React,{ useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
const Login =()=>{
    const history=useHistory();
    useEffect(() => {        
        const checkLogin=() => {
            if (localStorage.getItem('userInfo')) {
                history.push('/dashboard');
            }
        }
        checkLogin();
    }, [history])
    const [input,setInput]=useState({
        username:'',
        password:''
    });
    const changeInput=(e)=>{
        let {name,value}=e.target;
        setInput((lastInput)=>{
            return({
                ...lastInput,
                [name]:value
            })
        });        
    }
    const logIn=async (e)=>{
        try{
            e.preventDefault();
            const res=await axios.post('/admin/login',input);
            console.log(res.data);
            if(res.data._id){
                localStorage.setItem('userInfo',JSON.stringify(res.data));
                history.push('/dashboard');
            }else{
                alert(res.data.message);
            }
        }catch(err){
            // console.log(err)
        }
    }
    return (
        <>
            <center className="container">
                <div className="card p-4" id="login">
                    <form className="form-group" onSubmit={logIn}>
                        <label htmlFor="username" className="float-left">Username<span className="text-danger">*</span></label>
                        <input type="text" name="username" className="form-control" placeholder="Enter Your Username" onChange={changeInput} value={input.username}/>
                        <label htmlFor="password" className="float-left">Password<span className="text-danger">*</span></label>
                        <input type="password" name="password" className="form-control" placeholder="Enter Your Password" onChange={changeInput} value={input.password}/>
                        <button className="btn btn-sm btn-outline-danger mt-3">Log IN</button>
                    </form>
                </div> 
            </center>
        </>
    );
}
export default Login;