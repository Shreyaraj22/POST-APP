import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 100))); //  show first 100 posts
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl +
      
      font-bold mb-4">Post List</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-pink-300 rounded shadow">
            <h3 className="text-xl font-semibold  bg-pink-400 p-2 rounded">
  {post.title}
</h3>

            <p className="text-black-100 mt-3">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
