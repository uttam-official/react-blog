import React from 'react'
import {Link} from 'react-router-dom'

export default function SingleBlog({blog}) {
    return (
        <tr>
            <td>{blog.title}</td>
            <td><img src={blog.imagelink} alt={blog.title} className='img img-fluid img-thumbnail d-block mx-auto' /></td>
            <td>{blog.desc}</td>
            <td>
                <Link className='btn btn-success m-1' to={`add/${blog._id}`}>Edit</Link><Link className='btn btn-danger m-1' to={`add/${blog._id}`}>Delete</Link>
            </td>
        </tr>
    )
}
