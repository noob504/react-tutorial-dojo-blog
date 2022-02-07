// making a custom hook

import React, { useState, useEffect } from 'react';



const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // to simulate a real data fetch from the server, the fetch method is put in setTimeOut
        
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then((res) => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error("could not fetch data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((error) => {
                    console.log("The error message is: ", error.message);
                    // if (error.message === 'Failed to fetch') {
                    //     error.message = 'Oops, looks like the service is down :-(';
                    // }

                    if (error.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setError(error.message);
                        setIsLoading(false);
                    }

                })
        }, 300);
        // something's wrong, still getting the default error message

        // trying to find the point where we want to stop the state from updating, when the component has unmounted
        // it is at this point
        // return () => {
        //   console.log("clean up");;
        // };
        
        return () => abortCont.abort();
        
        
    }, [url]);

    return {data, isLoading, error}

};

export default useFetch;
