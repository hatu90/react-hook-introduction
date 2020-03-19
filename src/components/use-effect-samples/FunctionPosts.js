import React from 'react';
import Post from './Post';

const LIMIT = 10;

export default function FunctionPosts() {
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const requestUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`;
    setLoading(true);
    fetch(requestUrl)
      .then(response => response.json())
      .then(setPosts)
      .then(() => setLoading(false));
  }, [page]);

  const onNextPage = React.useCallback(() => {
    setPage(x => Math.min(x + 1, 9));
  }, []);

  const onPreviousPage = React.useCallback(() => {
    setPage(x => Math.max(0, x - 1));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <p>Showing from: {LIMIT * page}  to: {LIMIT * page + posts.length}</p>
      <div>
        <button onClick={onPreviousPage} disabled={loading}>{`< Previous Page`}</button>
        <button onClick={onNextPage} disabled={loading}>{`Next Page >`}</button>
      </div>
      {
        !loading ?
          [posts.map(post => <Post key={post.id} {...post} />)]
          : <div>Loading</div>
      }
    </div>
  )
}
