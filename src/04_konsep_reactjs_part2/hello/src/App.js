import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import BlogPost from './components/BlogPost';
import CommentPost from './components/Komentar';

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <BlogPost />
        </div>
        <div>
          <CommentPost />
        </div>
      </div>
    );
  }
}

export default App;