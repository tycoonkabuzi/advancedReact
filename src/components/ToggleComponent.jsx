import useToggle from "../hooks/useToggle";
const ToggleComponent = () => {
  const [isVisible, toggleVisibility] = useToggle();
  return (
    <>
      <h1> Hook - custom hook</h1>
      <button onClick={toggleVisibility}>{isVisible ? "hide" : "Show"}</button>
      {isVisible && <p> This is a secret message</p>}
    </>
  );
};
export default ToggleComponent;
