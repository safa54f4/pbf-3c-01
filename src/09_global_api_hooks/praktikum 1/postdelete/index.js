const baseUrlApi = 'http://localhost:3002';
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

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
const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}
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
export default API;