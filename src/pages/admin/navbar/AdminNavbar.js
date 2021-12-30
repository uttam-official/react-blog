import React, { useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.css";

export default function AdminNavbar(){
    const history = useHistory();
    
    useEffect(() => {
        const checkLogin = () => {
            if (!localStorage.getItem('userInfo')) {
                history.push('/login');
            }
        }
        checkLogin();
    }, [history])
    return (
        <div className="navbar" >
            <h2><Link to="/">ReactBlog</Link></h2>
            <ul>
                <li><Link to="/blog">Your Blog</Link></li>
                <li><Link to="/add">Add Blog</Link></li>
                <li><Link to="/logout">logout</Link></li>
            </ul>
            
        </div>
    )
}
