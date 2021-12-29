const logGet = async () => {
  console.log('GET');
  return { get: 'GET' };
};

const logPost = async (post) => {
  console.log(post);
  return { post };
};

export { logGet, logPost };
