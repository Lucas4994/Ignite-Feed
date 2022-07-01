import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <div>
      <Header />
     
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Lucas Silva" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore reiciendis, repellendus fuga maiores voluptatem corrupti temporibus iste doloribus, hic ut a beatae. Cupiditate voluptatem quidem dolores, eos recusandae odit.">
          </Post>
        </main>
      </div>
    </div>
  )
}

