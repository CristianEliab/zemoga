export const getAllPostItems = async () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        resolve({
          status: 'success',
          data: json,
        });
      })
      .catch(e => {
        reject(e);
      });
  });
};

export const getDetailPost = async ({id}) => {
  console.log('id', id);
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id.id}`)
      .then(response => response.json())
      .then(json => {
        resolve({
          status: 'success',
          data: json,
        });
      })
      .catch(e => {
        reject(e);
      });
  });
};

module.exports = {
  getAllPostItems,
  getDetailPost,
};
