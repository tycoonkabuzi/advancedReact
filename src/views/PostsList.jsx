import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  console.log(posts);

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
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Post;
