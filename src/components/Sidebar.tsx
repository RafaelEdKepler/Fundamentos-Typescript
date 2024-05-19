import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from "./Sidebar.module.css";

export function Sidebar() {

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Foto de capa do usuário"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/rafaeledkepler.png" />
        <strong>Rafael Eduardo Kepler</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}