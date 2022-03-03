import React from 'react'
import MyButton from './UI/button/MyButton'
import MyLink from './UI/buttonLink/MyLink'

const PostItem = (props) => {
  const linkToPost = `/posts/${props.post.id}`
  return (
    <div className="post">
      <div className="post__content">
        <strong className="post__title">
          {props.number} {props.post.title}
        </strong>
        <div className="post__btns">
          <MyLink link={linkToPost}>Открыть</MyLink>
          <MyButton
            onClick={() => {
              props.remove(props.post)
            }}
          >
            Удалить
          </MyButton>
        </div>
      </div>
      <div className="post__text">{props.post.body}</div>
    </div>
  )
}

export default PostItem
