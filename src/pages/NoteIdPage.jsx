import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import MyTextArea from '../components/UI/textarea/MyTextArea'

const NoteIdPage = () => {
  const params = useParams()
  const notesOfLocal = JSON.parse(localStorage.getItem('notes'))

  const getNoteById = (id) => {
    return notesOfLocal.find((el) => +el.id === +id)
  }
  const noteById = getNoteById(params.id)

  const [note, setNote] = useState({
    id: params.id,
    title: noteById.title,
    body: noteById.body,
  })

  const reductNote = (id) => {
    const indexNote = notesOfLocal.findIndex((el) => el.id === +id)
    notesOfLocal.splice(indexNote, 1, note)
    localStorage.setItem('notes', JSON.stringify(notesOfLocal))
  }

  return (
    <div>
      <h1>Вы открыли страницу заметки</h1>
      <div className="note__wrap">
        <MyInput
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <MyTextArea
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
        />
        <MyButton onClick={() => reductNote(params.id)}>Сохранить</MyButton>
      </div>
    </div>
  )
}

export default NoteIdPage
