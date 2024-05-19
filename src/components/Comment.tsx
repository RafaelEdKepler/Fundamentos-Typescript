import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [applause, setApplause] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  }

  const handleNewApplause = () => {
    setApplause(applause + 1);
  }

  return (
    <div
      className={styles.comment}
    >
      <Avatar hasBorder={false} src="https://github.com/rafaeledkepler.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Eduardo Kepler</strong>
              <time
                title="Doze de Maio às 18:04"
                dateTime="2024-05-12 18:04"
              >Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
            onClick={handleNewApplause}
          >
            <ThumbsUp size={20} />
            Aplaudir <span>{applause}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}