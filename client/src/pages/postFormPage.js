import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function PostFormPage() {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [content, setContent] = useState('')

  const contentChanged = event => {
    setContent(event.target.value)
  }

  const savePost = event => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: content,
      })
    })
      .then(response => {
        if (response.ok)
          return response.json()

        throw new Error('Content validation')
      })
      .then(post => setSuccess(true))
      .catch(error => setError(error))
  }


  if (success)
    return <Redirect to="/" />

  let errorMessage = null
  if (error)
    errorMessage = (
      <div className="alert alert-danger">
        "There was an error saving this post."
      </div>
    )

  return (
    <div className="col-10 col-md-8 col-lg-7">
      { errorMessage}
      <div className="input-group">
        <input
          type="text"
          placeholder="Add your words of wisdom here..."
          value={content}
          className="form-control mr-3 rounded"
          onChange={contentChanged}
        />
        <button className="btn btn-primary" onClick={savePost}>Save Post</button>
      </div>
    </div>
  )
}
