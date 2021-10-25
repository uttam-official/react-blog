import {Link} from "react-router-dom";
import "./blog.css";
const Blog=({blog})=>{
    return (
        <>
            <div className="col-md-6 col-lg-4 my-3">
                <div className="card">
                    <Link to={`/${blog._id}`}>
                        <div className="card-body">
                            <img src={"https://picsum.photos/id/1025/4951/3301"} alt="blog1" className="img img-fluid d-block mx-auto" />
                            <h5 className="text-primary">{blog.title}</h5>
                            <p>{blog.auther}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Blog;