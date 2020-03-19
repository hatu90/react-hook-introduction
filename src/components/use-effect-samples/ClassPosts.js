import React, { Component } from 'react';

import Post from './Post';

const LIMIT = 10;

export default class ClassPosts extends Component {
  state = {
    page: 0,
    loading: false,
    posts: []
  }

  getPosts = () => {
    const { page } = this.state;
    const requestUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`;
    this.setState({
      loading: true
    });
    fetch(requestUrl)
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts,
          loading: false
        });
      });
  }

  onPreviousPage = () => {
    this.setState(({ page, ...remainState }) => ({
      ...remainState,
      page: Math.max(0, page - 1)
    }));
  };

  onNextPage = () => {
    this.setState(({ page, ...remainState }) => ({
      ...remainState,
      page: Math.min(page + 1, 9)
    }))
  }

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(_, { page: prevPage }) {
    const { page } = this.state;
    if (page !== prevPage) {
      this.getPosts();
    }
  }

  render() {
    const { page, posts, loading } = this.state;
    return (
      <div>
        <h2>Posts</h2>
        <p>Showing from: {LIMIT * page}  to: {LIMIT * page + posts.length}</p>
        <div>
          <button onClick={this.onPreviousPage} disabled={loading}>{`< Previous Page`}</button>
          <button onClick={this.onNextPage} disabled={loading}>{`Next Page >`}</button>
        </div>
        {
          !loading ?
            [posts.map(post => <Post key={post.id} {...post} />)]
            : <div>Loading</div>
        }
      </div>
    )
  }
}
