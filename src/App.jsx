import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Lucas Silva" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore reiciendis, repellendus fuga maiores voluptatem corrupti temporibus iste doloribus, hic ut a beatae. Cupiditate voluptatem quidem dolores, eos recusandae odit." 
      />
    </div>
  )
}

