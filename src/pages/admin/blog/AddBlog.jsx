import axios from 'axios';
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import AdminNavbar from '../navbar/AdminNavbar';

const AddBlog = () => {
    const history=useHistory();
    const user=localStorage.getItem('userInfo');
    const author=JSON.parse(user).username;
    const [input,setInput]=useState({
        title:"", desc:"", imagelink:"", category:'',author:author
    });
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
            const res=await axios.post('/blog',input);
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
                                <input type="text" name="title" className='form-control' onChange={changeInput}/>
                            </div>
                            <div>
                                <label htmlFor="desc">Description</label>
                                <textarea type="text" name="desc" className='form-control' onChange={changeInput}></textarea>
                            </div>
                            <div>
                                <label htmlFor="imagelink">Image Link</label>
                                <input type="text" name="imagelink" className='form-control' onChange={changeInput}/>
                            </div>
                            <div>
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" className='form-control' />
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
