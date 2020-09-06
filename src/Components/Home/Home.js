import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const[post, setPost] = useState ([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        
        <div className="head-style">
            <h1> Posts: {post.length}</h1>
            {
                post.map(post =><Posts post={post}> </Posts>)
            }
        </div>
    );
};

export default Home;