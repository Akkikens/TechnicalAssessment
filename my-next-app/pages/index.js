// pages/index.js
import Link from 'next/link';
import ToDoList from '../components/ToDoList';

export default function Home() {
    return (
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <ToDoList />
      </div>
    );
  }