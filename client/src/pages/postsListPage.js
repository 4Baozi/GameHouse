/*
import React, { useState, useEffect } from 'react';
import { Post, Loading } from '../components';

export default function PostsListPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        setLoading(false)
        setPosts(posts.map((p, ii) => <Post {...p} key={ii} />))
      })
      .catch(error => console.log("API ERROR: ", error));
  }, [posts])


  return (
    loading ? <Loading /> :
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          {posts}
        </div>
      </div>
  )
}
*/

import React from 'react';
import { Post, Loading } from '../components';

class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.posts }
        </div>
      </div>
    );
  }
}

export default PostsListPage;
