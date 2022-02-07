import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';      // this is deprecated
import { useNavigate } from 'react-router-dom';
;



const CreateBlog = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPosting, setIsPosting] = useState(false);
    const page = useNavigate();       //using this to redirect user to a different page


    const formSubmitHandler = (event) => {
        event.preventDefault();

        setIsPosting(true);

        const newBlog = { title, body, author };
        // console.log(newBlog);
        const blogURL = "http://localhost:8000/blogs";
        fetch(blogURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog),
        })
            .then((res) => {
                console.log("new blog added");
                setIsPosting(false);
                // history.go(-1);      // // takes the user to the last visited page
                page("/");
            })
            

    };



    return (
        <div className="create">
            <h1>Add a new blog</h1>

            <form>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => { setTitle(event.target.value) }}

                />

                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => { setBody(event.target.value) }}
                ></textarea>

                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(event) => { setAuthor(event.target.value) }}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                {
                    !isPosting &&
                    <button
                        onClick={formSubmitHandler}
                    >
                        Add Blog
                    </button>
                }
                {
                    isPosting &&
                    <button
                        disabled
                    >
                        Adding Blog.....
                    </button>
                }
                {/* this button being inside the form, when clicked on, automatically submits the form */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default CreateBlog;