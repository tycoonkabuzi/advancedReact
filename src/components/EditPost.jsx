import { useState } from "react";
import axios from "axios";
const EditPost = ({ selectedPost, updated }) => {
  const [title, setTitle] = useState(selectedPost.title);
  const [body, setBody] = useState(selectedPost.body);
  const [message, setMessage] = useState("");
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`,
        {
          id: selectedPost.id,
          title,
          body,
          userId: 1,
        }
      );

      updated(response.data.id);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred when trying to add a post");
    }
  };
  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default EditPost;
