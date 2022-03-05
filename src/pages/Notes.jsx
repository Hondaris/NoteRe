import React, { useEffect, useState } from 'react'
import { useNotes } from '../hooks/useNotes'
import MyButton from '../components/UI/button/MyButton'
import NoteForm from '../components/NoteForm'
import NoteFilter from '../components/NoteFilter'
import NoteList from '../components/NoteList'
import MyModal from '../components/UI/MyModal/MyModal'

const Notes = () => {
  const notesOfLocal = JSON.parse(localStorage.getItem('notes'))
  const [notes, setNotes] = useState(notesOfLocal || [])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modal, setModal] = useState(false)
  const searchedAndSortedNotes = useNotes(notes, filter.sort, filter.query)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const createNote = (newNote) => {
    setNotes([...notes, newNote])
    setModal(false)
  }

  const removeNote = (note) => {
    setNotes(notes.filter((p) => p.id !== note.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '15px' }} onClick={() => setModal(true)}>
        Создать заметку
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <h1>Создание заметки</h1>
        <NoteForm create={createNote} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <NoteFilter filter={filter} setFilter={setFilter} />

      <NoteList
        remove={removeNote}
        notes={searchedAndSortedNotes}
        title="Заметки"
      />
    </div>
  )
}

export default Notes
