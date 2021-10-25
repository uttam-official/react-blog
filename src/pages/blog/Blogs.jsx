import "./blogs.css";
import Blog from "./Blog";


const Blogs=({posts})=>{
    return (
        <div className="row m-3">
            <div className="card-group">
                {posts.map((post)=>(
                    // document.write(post._id)
                    <Blog blog={post} key={post._id}/>
                    )
                )}
            </div>
        </div>
    )
}
export default Blogs;