import { useParams } from "react-router";

const SinglePost = ({ posts }) => {
  const params = useParams();
  const currentPost = posts.find((post) => post.id === Number(params.postId));

  return (
    <div>
      <h2>{currentPost.title}</h2>
      <p>{currentPost.text}</p>
    </div>
  );
};
export default SinglePost;
