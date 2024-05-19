import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rafaeledkepler.png",
      name: "Rafael Eduardo Kepler",
      role: "Frontend Developer at @Compass.UOL",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-05-14 13:24')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://scontent.fgel3-1.fna.fbcdn.net/v/t39.30808-6/309895457_10225927622790669_6948157515261522626_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGA5ncK6FxDRxrgueohCGp0aC9aWXExiuloL1pZcTGK6Q2-Hwc5aDuGKYagFD9tXdEzOcjGdxDLpyzNEGvkYq_W&_nc_ohc=9TtkvWHcDYAQ7kNvgFfaAhi&_nc_ht=scontent.fgel3-1.fna&oh=00_AYC3qqxVrUFoQ9fRYFh3w6Je0e9oUHiQfB-lYWUG4hIAkg&oe=6649522F",
      name: "Thaysa Kaestner Kopsch",
      role: "Missionária at @MEUCPANAMBI",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-05-12 20:24')
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          ))}
        </main>
      </div>
    </>
  )
}

export { App }
