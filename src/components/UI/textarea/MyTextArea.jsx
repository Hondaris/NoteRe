import React from 'react'
import classes from './MyTextArea.module.css'

const MyTextArea = (props) => {
  return (
    <div>
      <textarea {...props} className={classes.myTextarea}></textarea>
    </div>
  )
}

export default MyTextArea
