import { useParams, useSearchParams } from "react-router-dom";

const SinglePost = ({ posts }) => {
  const params = useParams();
  const currentPost = posts.find((post) => post.id === Number(params.postId));
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <div>
      page:{searchParams.get("page")}
      <h2>{currentPost.title}</h2>
      <p>{currentPost.text}</p>
    </div>
  );
};
export default SinglePost;
