import React from 'react'
import MyButton from './UI/button/MyButton'
import MyLink from './UI/buttonLink/MyLink'

const NoteItem = (props) => {
  const linkToNote = `/notes/${props.note.id}`
  return (
    <div className="note">
      <div className="note__content">
        <strong className="note__title">
          {props.number} {props.note.title}
        </strong>
        <div className="note__btns">
          <MyLink link={linkToNote}>Открыть</MyLink>
          <MyButton
            onClick={() => {
              props.remove(props.note)
            }}
          >
            Удалить
          </MyButton>
        </div>
      </div>
      <div className="note__text">{props.note.body}</div>
    </div>
  )
}

export default NoteItem
