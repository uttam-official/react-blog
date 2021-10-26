import {Link} from "react-router-dom";
import "./blog.css";
const Blog=({blog})=>{
    return (
        <>
            <div className="col-md-6 col-lg-4 my-3">
                <div className="card h-100">
                    <Link to={`/${blog._id}`}>
                        <div className="card-body">
                            <img src={blog.imagelink} alt={blog.title} className="img img-fluid d-block mx-auto" id="blog-img"/>
                            <h5 className="text-primary my-2">{blog.title}</h5>
                            <p className="text-secondary">{blog.author}</p>
                            <p>{blog.category.map((v)=>{
                                return ` ${v}  `;
                            })}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Blog;