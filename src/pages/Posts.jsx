import React, { useEffect, useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import MyButton from '../components/UI/button/MyButton'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import Loader from '../components/UI/Loader/Loader'
import PostList from '../components/PostList'
import MyModal from '../components/UI/MyModal/MyModal'

const Posts = () => {
  const notesOfLocal = JSON.parse(localStorage.getItem('notes'))
  const [posts, setPosts] = useState(notesOfLocal || [])
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  })
  const [modal, setModal] = useState(false)
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(posts))
  }, [posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '15px' }} onClick={() => setModal(true)}>
        Создать заметку
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <h1>Создание заметки</h1>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={searchedAndSortedPosts}
        title="Заметки"
      />
    </div>
  )
}

export default Posts
