import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Notes from '../pages/Notes'
import NoteIdPage from '../pages/NoteIdPage'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteIdPage />} />
        <Route path="*" element={<Notes />} />
      </Routes>
    </div>
  )
}

export default AppRouter
