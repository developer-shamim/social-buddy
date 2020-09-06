import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';


const PostDetails = () => {
    
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
            
            fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    },)

    
    useEffect(() => {
            const url1 = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            
            fetch(url1)
            .then(res => res.json())
            .then(data => setComments(data));
           },)

           const postLook= { 
            border: '1px solid purple',
            margin: '15px',
            padding: '20px', 
            borderRadius: '10px'
        }
           
    return (
        <div style={postLook}>
            <h3>ID: {post.id}</h3>
            <h4>Title:{post.title}</h4>
            <p>Details: {post.body}</p>
            <h4>Comments:</h4>
           { 
              comments.map(comment=><Comments comment={comment}></Comments>)
           }

        </div>
    );
};

export default PostDetails;