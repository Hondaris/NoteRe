import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MyLink.module.css'

const MyLink = ({ children, link, ...props }) => {
  return (
    <Link {...props} to={link} className={classes.myLink}>
      {children}
    </Link>
  )
}

export default MyLink
