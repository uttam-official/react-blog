import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Navbar from '../../navbar/Navbar';


const SingleBlog = () => {
    const params=useParams();
    const [blog,setBlog]=useState([]);
    useEffect(()=>{
        const getBlog=async ()=>{
            const res=await Axios.get(`/blog/${params.id}`)
            setBlog(res.data);
        }
        getBlog();
    },[params])
    return (
        <div>
            <Navbar/>
            <div className="contaner">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-danger">{blog.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}
export default SingleBlog;
