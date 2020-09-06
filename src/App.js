import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import HomeIcon from '@material-ui/icons/Home';
import CommentIcon from '@material-ui/icons/Comment';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {width: 'inherit' },
  Link: { textDecoration:'none' },
  color: theme.palette.text.prrimary
}))

function App() {
  
const classes = useStyles();
  return (
   
    
    <Router>
      <div style={{display: 'flex'}}>
      <Drawer
      style={{ width: '240px' }}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.drawerPaper }}
      >
       
        <List>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
            <CommentIcon />
            </ListItemIcon>
            <ListItemText primary={"Posts"} />
          </ListItem>
          </Link>

          <Link to="/post/:postId" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Exit Comments"} />
          </ListItem>
          </Link>
        </List>

      </Drawer>

      <Switch> 
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/post/:postId">
          <PostDetails></PostDetails>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>

      </div>
      
    </Router>
    
  );
}

export default App;
