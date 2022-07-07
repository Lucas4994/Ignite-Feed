import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucas4994.png",
      name: "Lucas Silva",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "ane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-07-07 20:00:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "ane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-06-07 20:00:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
     
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {
          posts.map( post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
         }
        </main>
      </div>
    </div>
  )
}

