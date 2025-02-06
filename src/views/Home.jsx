import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const searchParams = createSearchParams({
    page: 1,
    limit: 10,
  });
  const [element] = useSearchParams();
  console.log(element);
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
