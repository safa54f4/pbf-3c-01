import {baseUrlApi} from './Config';

// Membuat Global API Service DELETE
const DeleteAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}/${data}`, { method: "DELETE" }).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default DeleteAPI;
