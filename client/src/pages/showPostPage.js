/*
import React, { useState, useEffect } from 'react';
import { Post, Loading } from '../components';
import { Redirect } from 'react-router-dom';

export default function ShowPostPage(props) {
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const { id } = props.match.params

  useEffect(() => {
    fetch("/api/posts/" + id)
      .then(response => response.json())
      .then(post => {
        setPost(<Post {...post} />)
        setLoading(false)
      })
      .catch(error => {
        setNotFound(true)
      })
  }, [id])

  if (notFound) return <Redirect to="/" />
  if (loading) return <Loading />
  return post
}

*/

import React from 'react';
import { Post, Loading } from '../components';
import { Redirect } from 'react-router-dom';

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/posts/"+id)
      .then(res => res.json())
      .then(post => {
        this.setState({
          post: <Post {...post} />,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Loading />;
    return this.state.post;
  }
}

export default ShowPostPage;
