import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  // Get posts from API
  const fetchPost = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data.slice(0, 5)); // show only first 5
    } catch (err) {
      console.error('GET Error:', err);
    }
  };

  

  const createPost = async() =>{
    try {
      const responce = await axios. post('https://jsonplaceholder.typicode.com/posts',{
        title: newPost.title,
        body: newPost.body,
        userId:2,
      });
      setPosts([responce.data, ...posts]);
      setNewPost({title: '', body: ''})
    } catch (error) {
      
    }
  };
const updatePost = async (id) =>{
  try {
    const responce = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      title: 'Updated Title',
      body: 'Updated body content'
    });
    setPosts((prepost)=>
    prepost.map((post)=>
    post.id === id ? {...post, title: responce.data.title, body:responce.data.body} : post
    )
    )
  } catch (error) {
    console.log('PUT Error:',err);
  }
}



  const deletePost = async(id) =>{
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post)=> post.id !==id));
    } catch (error) {
      console.log('Delete Error:',err)
    }
  }
  
useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>React + Axios API Calls (Live UI)</h2>

      <div style={{ marginBottom: 20 }}>
        <h3>Create New Post</h3>
        <input
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <input
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <button onClick={createPost}>Create</button>
      </div>

      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => updatePost(post.id)} style={{ marginRight: 10 }}>Update</button>
          <button onClick={() => deletePost(post.id)}>Delete </button> <br />
          <button onClick={()=>deletePost (post.id)}> del</button>
        </div>
        
      ))}
      
    </div>

    
  );
}

export default App;
