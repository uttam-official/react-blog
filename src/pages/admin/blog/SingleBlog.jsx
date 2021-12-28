import React from 'react'

export default function SingleBlog({blog}) {
    return (
        <tr>
            <td>{blog.title}</td>
            <td><img src={blog.imagelink} alt={blog.title} className='img img-fluid img-thumbnail d-block mx-auto' /></td>
            <td>{blog.desc}</td>
            <td>
                <button className='btn btn-success m-1'>Edit</button><button className='btn btn-danger m-1'>Delete</button>
            </td>
        </tr>
    )
}
