import { useState } from 'react'
import type { Post } from '../data/posts'
import { Icon } from './Icon'
import './PostCard.css'

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  const [liked, setLiked] = useState(Boolean(post.liked))
  const [likes, setLikes] = useState(post.likes)

  function toggleLike() {
    setLiked((prev) => {
      setLikes((n) => (prev ? n - 1 : n + 1))
      return !prev
    })
  }

  return (
    <article className="post-card">
      <header className="post-card__header">
        <div className="post-card__avatar">
          <img src={post.avatar} alt="" />
        </div>
        <div className="post-card__meta">
          <div className="post-card__row">
            <span className="post-card__author">{post.author}</span>
            <span className="post-card__time">{post.time}</span>
          </div>
          <span className="post-card__handle">{post.handle}</span>
        </div>
        <button type="button" className="post-card__more" aria-label="Más opciones">
          <Icon name="more_horiz" size={20} />
        </button>
      </header>

      <p className="post-card__content">{post.content}</p>

      {post.image ? (
        <div className="post-card__image">
          <img src={post.image} alt="" />
        </div>
      ) : null}

      {post.images?.length ? (
        <div className="post-card__carousel hide-scrollbar">
          {post.images.map((src) => (
            <div key={src} className="post-card__carousel-item">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      ) : null}

      <footer className="post-card__actions">
        <button type="button" className="post-card__action">
          <Icon name="chat_bubble" size={20} />
          {post.comments}
        </button>
        <button
          type="button"
          className={`post-card__action${liked ? ' is-liked' : ''}`}
          onClick={toggleLike}
          aria-pressed={liked}
        >
          <Icon name="favorite" filled={liked} size={20} />
          {likes}
        </button>
        <button type="button" className="post-card__action post-card__action--end">
          <Icon name="share" size={20} />
        </button>
      </footer>
    </article>
  )
}
