import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Blog (props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Biodata Saya', content: 'NIM: 1941723012 - Nama: A.SAFA DHIATA' },
  { id: 2, title: 'Alamat Rumah', content: 'Alamat rumah saya ada di kabupaten kediri' }
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);