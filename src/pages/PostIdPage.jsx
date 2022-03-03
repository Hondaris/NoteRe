import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import MyTextArea from '../components/UI/textarea/MyTextArea'

const PostIdPage = () => {
  const params = useParams()
  const notesOfLocal = JSON.parse(localStorage.getItem('notes'))

  const getNoteById = (id) => {
    return notesOfLocal.find((el) => +el.id === +id)
  }
  const note = getNoteById(params.id)

  const [post, setPost] = useState({
    id: params.id,
    title: note.title,
    body: note.body,
  })

  const reductNote = (id) => {
    const indexNote = notesOfLocal.findIndex((el) => el.id === +id)
    notesOfLocal.splice(indexNote, 1, post)
    localStorage.setItem('notes', JSON.stringify(notesOfLocal))
  }

  return (
    <div>
      <h1>Вы открыли страницу заметки</h1>
      <div className="note__wrap">
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyTextArea
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={() => reductNote(params.id)}>Сохранить</MyButton>
      </div>
    </div>
  )
}

export default PostIdPage
