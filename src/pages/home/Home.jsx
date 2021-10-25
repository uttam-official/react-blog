import React from "react";
import axios from "axios";
import "./home.css";
import Navbar from "../../navbar/Navbar";
import Blogs from "../blog/Blogs";
export default function Home(){
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        const fetchBlog=async ()=>{
            const res=await axios.get("/blog");
            setPosts(res.data);
        }
        fetchBlog();
    }, [])
    return (
        <div className="home">
            <Navbar/>
            <Blogs posts={posts}/>
        </div>
    )
}