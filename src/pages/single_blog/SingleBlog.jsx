import {useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import Axios from 'axios';
import Navbar from '../../navbar/Navbar';
import Loader from '../../loader/Loader';
import "./singleBlog.css";


const SingleBlog = () => {
    const params=useParams();
    const [blog,setBlog]=useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        const getBlog=async ()=>{
            const res=await Axios.get(`/blog/${params.id}`);
            setBlog(res.data);
            setLoader(false);
        }
        getBlog();
    },[params]);
    if (loader) {
        return (
            <Loader />
        );
    }

    return (
        <div>
            <Navbar/>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 id="title">{blog.title}</h2>
                                
                                <p className="float-left text-secondary">
                                    {   
                                    blog.category?
                                        blog.category.map((v)=>{
                                            return (
                                                <Link to="#"> {v} </Link>
                                            );
                                        }):""
                                    }
                                </p>
                                <p className="text-secondary float-right" id="author">Written By : <span id="author-link"><Link to="#">{blog.author}</Link></span></p>
                                <img src={blog.imagelink} alt={blog.title} className="img img-fluid d-block mx-auto rounded"/>
                                <p id="desc">{blog.desc}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="text-primary ">Category</h4>
                                <span className="badge badge-danger">Movie </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleBlog;
