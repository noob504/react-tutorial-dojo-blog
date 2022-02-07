import React from 'react';
import { Link } from 'react-router-dom';

// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;

// // another method of passing props is through destructuring
const BlogList = ({ blogs, title, clicked }) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {/* <button onClick={() => { clicked(blog.id) }}>Delete</button> */}
                    <Link to={`/blogs/${blog.id}`}>
                        <p className="blog-preview-link">Read More ....</p>
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default BlogList;
