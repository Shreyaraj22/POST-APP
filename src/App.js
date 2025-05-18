import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div className="min-h-screen bg-purple-300 py-10 px-1">
    <h1 className="text-3xl text-purple-700 font-bold text-center mb-10">

         POSTS APP
      </h1>

      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
