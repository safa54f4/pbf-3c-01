const baseUrlApi = 'http://localhost:3001';
const GetAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`)
      .then(response => response.json())
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise;
}
// Membuat Global API Service POST
const PostAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise;
}
// Membuat Global API Service DELETE
const DeleteAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}/${data}`, { method: 'DELETE' })
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise;
}
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
// Membuat Global API Service POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
// Membuat Global API Service DELETE
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
  getNewsBlog,
  // Membuat Global API Service POST
  postNewsBlog,
  // Membuat Global API Service DELETE
  deleteNewsBlog
}

export default API;