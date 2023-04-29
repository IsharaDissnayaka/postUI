import Sidebar from '../Sidebar';
import myImage from '../../../images/thumb_article15.jpg';
import BlogCard from './BlogCard';
import { Link } from "react-router-dom";
import { right } from '@popperjs/core';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AddBlog(){

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0YmU0ODY0MDM3Y2ZlN2YxMWQ4MDY1IiwiaWF0IjoxNjgyNjk1MzAyLCJleHAiOjE2ODI3ODE3MDJ9.lYVAEt0oiDD_0d7-kcBCwrfDMWHrKEMx3N0kkB-g0Kk';
    const headers = { Authorization: `Bearer ${token}` };


    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getBlogs();
    }, []);

    async function getBlogs() {
        try {
            const res = await axios.get(`http://localhost:5000/api/public/blog/get-all`,{ headers });
            setBlogs(res.data);
            console.log(res.data);
        } catch (error) {
            alert("Failed to fetch blogs");
        }
    }

    function handleSearch() {
        if (!Array.isArray(blogs)) {
            return [];
        }
        const filteredBlogs = blogs.filter((blog) => {
            return (
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.titleDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.tags.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        return filteredBlogs;
    }

    const filteredBlogs = handleSearch();
    const shortenedBlogs = filteredBlogs.slice(0, 6);

    return(
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className='col-10'>
                    <div style={{marginTop:"30px",marginLeft:"20px"}}>
                        <div className="row align-items-start">
                            <div className="col-4">
                                <h1>Blogs</h1>
                            </div>
                            <div className="col-4">
                            <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
                                    <button className="btn btn-success" type="button" onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                            <div className="col-4" style={{textAlign:right}}>
                                <Link to='/adminIT21174780/Post/AddPost'><button type="button" className="btn btn-success">Add Post</button></Link>
                            </div>                          
                        </div>
                    </div>
                    <div className="row row-cols-md-3 g-4 container">
                        {shortenedBlogs.map((blog) => (
                            <BlogCard
                                key={blog._id}
                                blogid={blog._id}
                                blogtitle={blog.title}
                                blogtitleDescription={blog.titleDescription}
                                blogdescription={blog.description}
                                blogtags={blog.tags}
                                blogreference={blog.reference}
                                myImage={myImage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;
