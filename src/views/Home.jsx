import { createSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const searchParams = createSearchParams({
    page: 1,
    limit: 10,
  });
  const goToCallBack = () => {
    navigate(`/posts?${searchParams}`);
  };
  return (
    <>
      <h2>Home</h2>
      <button onClick={goToCallBack}>Go to posts List</button>
    </>
  );
};
export default Home;
