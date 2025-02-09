'use client'
import { useState } from 'react'
import styles from './CommentForm.module.scss'

const CommentForm = ({ onCommentAdded }) => {
  const [author, setAuthor] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newComment = {
      author,
      text: comment
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment)
      })

      if (response.ok) {
        // Очищаем форму
        setAuthor('')
        setComment('')
        // Обновляем список комментариев
        if (onCommentAdded) {
          onCommentAdded()
        }
      }
    } catch (error) {
      console.error('Error saving comment:', error)
    }
  }

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ваше имя"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Ваш комментарий"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">Отправить</button>
    </form>
  )
}

export default CommentForm 