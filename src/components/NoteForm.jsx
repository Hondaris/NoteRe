import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
import MyTextArea from './UI/textarea/MyTextArea'

const NoteForm = ({ create }) => {
  const [note, setNote] = useState({
    title: '',
    body: '',
  })

  const addNewNote = (e) => {
    e.preventDefault()
    const newNote = {
      ...note,
      id: Date.now(),
    }
    create(newNote)
    setNote({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        value={note.title}
        type="text"
        placeholder="Название заметки"
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <MyTextArea
        value={note.body}
        type="text"
        onChange={(e) => setNote({ ...note, body: e.target.value })}
      />
      <MyButton onClick={addNewNote}>Создать заметку</MyButton>
    </form>
  )
}

export default NoteForm
