import { useState } from "react";
import axios from "axios";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );

      setMessage(`The post ${response.data.id} was added`);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error(error);
      setMessage("An error occurred when trying to add a post");
    }
  };
  return (
    <div>
      <h1>Add new Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Title"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit"> Add </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default AddPostForm;
