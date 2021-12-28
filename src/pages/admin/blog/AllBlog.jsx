import axios from 'axios';
import { useState, useEffect} from 'react';
import SingleBlog from "./SingleBlog";
import AdminNavbar from '../navbar/AdminNavbar';
const AllBlog=()=>{
    const [blogs,setBlogs]=useState([]);
    useEffect(() => {
        const fetchBlog=async()=>{
            const res=await axios.get('/blog');
            setBlogs(res.data);
        }
        fetchBlog();
    }, [])
    return(
        <>
            <AdminNavbar/>
            <div className='container mt-5'>
                <table className="table table-responsive table-striped table-bordered">
                    <thead>
                        <tr className='bg-primary'>
                            <th>Title</th><th>Image</th><th>Summary</th><th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog)=>{
                                return <SingleBlog blog={blog} key={blog._id}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AllBlog;