import React from 'react';
import ImageAvatars from '../ImageAvaters/ImageAvatars';


const Comments = (props) => {
    const { name, email, body} = props.comment;
    
        const postStyle = { 
            display: 'flex',
            border: '1px solid gold',
            margin: '20px',
            padding: '20px', 
            borderRadius: '10px'}
    return (
        <div style={postStyle}>
                
                <ImageAvatars></ImageAvatars>
                
                <div>
                <h4>Name: {name}</h4>
                <h4>E-mail:{email}</h4>
                <p>Comment: {body}</p>
                </div>
                
            
        </div>
    );
};

export default Comments;