import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

const Posts = (props) => {
    const { title, body, id} = props.post;
    
       const postStyle = { 
        border: '1px solid blue',
        marginLeft: '25px',
        marginTop: '10px',
        padding: '10px', 
        borderRadius: '10px'
    }
    return (
        <div style={postStyle}>
            <h2>Title:{title} </h2>
            <p>Post: {body}</p>
          <Link to={`/post/${id}`} ><Button variant="contained" color="primary">
          Read More
      </Button> </Link> 

        </div>
    );
};

export default Posts;