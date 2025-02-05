import { Link } from "react-router";

const Post = ({ posts }) => {
  return (
    <>
      <h2>Posts </h2>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        );
      })}
    </>
  );
};
export default Post;
