  import {baseUrlApi} from './Config';
  
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
      
  export default PostAPI;