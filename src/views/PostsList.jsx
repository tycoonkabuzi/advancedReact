import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router";

const Post = ({ setSelectedPost }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (postId) => {
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPosts(posts.filter((post) => post.id != postId));
    } catch (error) {}
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error : {error}</p>;
  }

  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {posts.map((post) => (
          <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => setSelectedPost(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}> Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Post;
