import GetAPI from '../API/Get';
import PostAPI from '../API/Post';
import DeleteAPI from '../API/Delete';

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
// Membuat Global API Service POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
// Membuat Global API Service DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI("posts", dataYgDihapus); 

const API = {
    getNewsBlog,
    // Membuat Global API Service POST
    postNewsBlog,
    // Membuat Global API Service DELETE
    deleteNewsBlog
  }

export default API;