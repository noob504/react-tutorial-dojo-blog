import React, { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';
import useFetch from '../CustomHooks/useFetch';


const Home = () => {

    // const [name, setName] = useState("Abhinaw");
    // const [age, setAge] = useState(19);
    // const handleClick = () => {
    //     // console.log(`Hola Ninjas !`);
    //     setName("Jod coder");
    //     setAge(20);
    // }

    // // const handleClickAgain = (name) => {
    // //     console.log(`hello my name is ${name}`);
    // // }

    // const [blogs, setBlogs] = useState([
    //     { title: "My new website", body: "Lorem ipsum dolor sit amet....", author: "mario", id: 1 },
    //     { title: "Welcome Party ! new website", body: "Lorem ipsum dolor sit amet....", author: "gengi", id: 2 },
    //     { title: "Let's goooo !!", body: "Lorem ipsum dolor sit amet....", author: "luigi", id: 3 },
    // ]);

    // const [blogs, setBlogs] = useState(null);

    // const [name, setName] = useState(`mario`);

    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const deleteBlogHandler = (id) => {
    //     const newBlogs = blogs.filter((blog) => (blog.id !== id));
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log(`useEffect hook ran`);
    //     console.log(name);
    // }, [name]);

    // fetching data from the json server

    // useEffect(() => {
    //     // fetch("http://localhost:8000/blogs")
    //     //     .then((res) => {
    //     //         return res.json();
    //     //     })
    //     //     .then((data) => {
    //     //         console.log(data);
    //     //         setBlogs(data);
    //     //         setIsLoading(false);
    //     //     })

    //     // to simulate a real data fetch from the server, the fetch method is put in setTimeOut

    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //             .then((res) => {
    //                 // console.log(res);
    //                 if (!res.ok) {
    //                     throw Error("could not fetch data for that resource");
    //                 }
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 console.log(data);
    //                 setBlogs(data);
    //                 setIsLoading(false);
    //                 setError(null);
    //             })
    //             .catch((error) => {
    //                 // console.log(`error message: `, error.message);
    //                 // console.log(error.message);
    //                 setError(error.message);
    //                 setIsLoading(false);
    //             })
    //     }, 1000);
    //     // something's wrong, still getting the default error message

    // }, []);

    const blogURL = `http://localhost:8000/blogs`;
    // const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
    const { data: blogs, isLoading, error } = useFetch(blogURL);


    return (
        <div className="home">

            {error && <div>{error}</div>}
            {isLoading && <div className="loader">Loading.....</div>}

            {/* <h2>Homepage</h2>
            <p>{`${name} is ${age} years old`}</p>
            <button onClick={handleClick}>Click Me!</button>
             <button
                onClick={() => { handleClickAgain("Abhinaw") }}
            >
                Click Me Again!
            </button> */}

            {/* since initially the value of blogs is set to null and it takes some time
            for the data to be fetched from the server, the map method is executed on a null object
            leading to an error */}

            {/* to solve this issue we use conditional template */}
            {/* we use the logical and operator which first checks the LHS expression */}
            {
                blogs &&
                <BlogList
                    blogs={blogs}
                    title="All Blogs !"
                // clicked={deleteBlogHandler}
                />
            }

            {/* <BlogList
                blogs={blogs.filter((blog) => blog.author === "mario")}
                title="Mario's Blogs" 
            /> */}

            {/* <button onClick={()=>{setName(`Luigi`)}}>Change Name</button>
            <p>{name}</p> */}
        </div>
    );
};

export default Home;

