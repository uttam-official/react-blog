import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import AdminNavbar from '../navbar/AdminNavbar';

const AddBlog = () => {
    const history=useHistory();
    const user=localStorage.getItem('userInfo');
    const params=useParams();
    const author = JSON.parse(user).username;
    const token = JSON.parse(user).token;
    const [input,setInput]=useState({
        title:"", desc:"", imagelink:"", category:'',author,token
    });
    useEffect(()=>{
        const getBlogDetails=async ()=>{
            if(params.id!=='0'){
                const blog=await axios.get(`/blog/${params.id}`);
                const {title,desc,imagelink,category}=blog.data;
                setInput((lastInput)=>{
                    return({
                        ...lastInput,
                        _id:params.id,title,desc,imagelink,category
                    })
                })
            }else{
                setInput((lastInput)=>{
                    return({
                        ...lastInput,
                        title: "", desc: "", imagelink: "", category: ''
                    })
                })
            }
        }
        getBlogDetails()
    },[params.id])
    
    const changeInput=(e)=>{
        const {name,value}=e.target;
        setInput((lastInput)=>{
            return({
                ...lastInput,
                [name]:value
            })
        })
    }
    const postBlog=async (e)=>{
        e.preventDefault();
        try{
            var res='';
            if(input._id){
                res=await axios.patch(`/blog/${input._id}`,input);
            }else{
                res = await axios.post('/blog', input);
            }
            if(res.data._id){
                alert("Successfully Posted");
                history.push('/blog');
            }else{
                alert("Please Fill all the Feild");
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <AdminNavbar/>
            <div className="container mt-2">
                <div className="card">
                    <div className="card-header">
                        <h2 className='text-center text-primary'>Add Blog</h2>
                    </div>
                    <div className="card-body">
                        <form className='form-group' onSubmit={postBlog}>
                            <div>
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" className='form-control' value={input.title} onChange={changeInput}/>
                            </div>
                            <div>
                                <label htmlFor="desc">Description</label>
                                <textarea type="text" name="desc" className='form-control' value={input.desc} onChange={changeInput}></textarea>
                            </div>
                            <div>
                                <label htmlFor="imagelink">Image Link</label>
                                <input type="text" name="imagelink" className='form-control' value={input.imagelink} onChange={changeInput}/>
                            </div>
                            <div>
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" defaultValue={input.category} className='form-control' />
                            </div>
                            <div>
                                <label htmlFor="submit">&nbsp;</label>
                                <button type='submit' className='btn btn-block btn-info'>Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>              
        </>
    )
}
export default AddBlog;
