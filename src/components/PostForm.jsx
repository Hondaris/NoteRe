import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import MyTextArea from './UI/textarea/MyTextArea'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        value={post.title}
        type="text"
        placeholder="Название заметки"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyTextArea
        value={post.body}
        type="text"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать заметку</MyButton>
    </form>
  )
}

export default PostForm
