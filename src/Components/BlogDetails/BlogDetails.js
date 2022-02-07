import React from 'react';
import { BrowserRouter as Router, Route, NavLink, useParams } from 'react-router-dom';
import useFetch from '../CustomHooks/useFetch';
import {useNavigate} from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams();

    const blogURL = "http://localhost:8000/blogs/";
    const { data: blog, error, isPending } = useFetch(blogURL + id);
    // const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);

    const page = useNavigate();
    const blogDeleteHandler = () => {
        fetch((blogURL + id), { 
            method: "DELETE",
        }).then(() => {
            page('/');
        })
    }
    


    return (
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error.message}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={blogDeleteHandler}>Delete</button>
                </article>
            )}
        </div>);
};

export default BlogDetails;
