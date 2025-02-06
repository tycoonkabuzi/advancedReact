import { Link, useSearchParams } from "react-router";

const Post = ({ posts }) => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <>
      {" "}
      page:{searchParams.get("page")}
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
