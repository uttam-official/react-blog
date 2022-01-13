import React from "react";
import axios from "axios";
import "./home.css";
import Navbar from "../../navbar/Navbar";
import Blogs from "../blog/Blogs";
import Loader from "../../loader/Loader";
export default function Home(){
    const [posts, setPosts] = React.useState([]);
    const [loader,setLoader]=React.useState(true);
    React.useEffect(() => {
        const fetchBlog=async ()=>{
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            }
            const res=await axios.get("/blog");
            setPosts(res.data);
            setLoader(false);
        }
        fetchBlog();
    }, [])
    if(loader){
        return(
            <Loader />
        );
    }
    return (
        <div className="home">
            <Navbar/>
            <Blogs posts={posts}/>
        </div>
    )
}