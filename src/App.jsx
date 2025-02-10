import { useRef, useState } from "react";

import "./App.css";
import Memorization from "./components/Memorization";
import Counter from "./components/Counter";
import ToggleComponent from "./components/ToggleComponent";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import PostsList from "./views/PostsList";
import SinglePost from "./views/SinglePost";
import BaseLayout from "./layouts/BaseLayout";
import ContactLayout from "./layouts/ContactLayout";
import Contact from "./views/Contact";

function App() {
  //const [count, setCount] = useState(0);
  // const [time, setTime] = useState(0);
  // const inputRef = useRef(null);
  // const intervalId = useRef(null);
  // const addValue = () => {
  //   counterRef.current = counterRef.current + 1;
  // };

  // const reset = () => {
  //   counterRef.current = 0;
  // };

  // const showInConsole = () => {
  //   console.log(counterRef);
  // };

  // const setFocusOnInput = () => {
  //   inputRef.current.focus();
  // };

  // const startCounter = () => {
  //   intervalId.current = setInterval(() => {
  //     setTime((prev) => prev + 1);
  //   }, 1000);
  // };

  // const endCounter = () => {
  //   clearInterval(intervalId.current);
  //   intervalId.current = null;
  // };

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
      {/* <h1> Hook - useRef</h1>
      <p>Time: {time} </p>
      <input ref={inputRef} type="text" />
      <button onClick={addValue}>Add</button>
      <button onClick={reset}>Reset</button>
      <button onClick={showInConsole}>Show in console</button>
      <button onClick={setFocusOnInput}>SetFocus on Input</button>
      <button onClick={startCounter}> Start Counter</button>
      <button onClick={endCounter}>End counter</button>

      <br></br> 
      
      ---- this has to move out of the JS
      <Memorization />
      <Counter />
     <ToggleComponent/>*/}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <PostsList />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="posts" element={<PostsList posts={posts} />} />
          <Route path="posts/:postId" element={<SinglePost posts={posts} />} />
        </Route>

        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
