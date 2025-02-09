import { useState, useEffect } from 'react';
import styles from './Comments.module.scss';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      const data = await response.json();
      
      if (data.comments) {
        setComments(data.comments.reverse());
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className={styles.commentsSection}>
      <h2 className={styles.title}>Комментарии</h2>
      <CommentForm onCommentAdded={fetchComments} />
      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <h3>{comment.author}</h3>
            <p>{comment.text}</p>
            <span className={styles.date}>
              {formatDate(comment.date)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments; 