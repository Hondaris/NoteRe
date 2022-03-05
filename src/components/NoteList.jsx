import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import NoteItem from './NoteItem'

const NoteList = ({ remove, notes, title }) => {
  if (!notes.length) {
    return <h1 style={{ textAlign: 'center' }}>Заметки не найдены!</h1>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {notes.map((note, index) => (
          <CSSTransition key={note.id} timeout={500} classNames="note">
            <NoteItem remove={remove} number={index + 1} note={note} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default NoteList
