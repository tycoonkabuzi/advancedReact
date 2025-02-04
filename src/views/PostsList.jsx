import { Link } from "react-router";

const Post = () => {
  const posts = [
    {
      id: 1,
      title: "Post1",
      text: "This is the first Post Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore dicta porro laborum veniam magni fugiat dolorum aperiam possimus id itaque nostrum ipsa quasi autem, saepe sequi, dolorem quas eligendi? ",
    },
    {
      id: 2,
      title: "Post2",
      text: "This is the first Post Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore dicta porro laborum veniam magni fugiat dolorum aperiam possimus id itaque nostrum ipsa quasi autem, saepe sequi, dolorem quas eligendi? ",
    },
  ];
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
