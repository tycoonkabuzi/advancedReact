import useToggle from "../hooks/useToggle";
import useWindowSize from "../hooks/useWindowSize";
const ToggleComponent = () => {
  const [isVisible, toggleVisibility] = useToggle();
  const sizeWindow = useWindowSize();
  return (
    <>
      <h1> Hook - custom hook</h1>
      <button onClick={toggleVisibility}>{isVisible ? "hide" : "Show"}</button>
      {isVisible && <p> This is a secret message</p>}
      <h2> Window sizeWindow</h2>
      <p>
        The width is : {sizeWindow.width} and the height is {sizeWindow.height}
      </p>
    </>
  );
};
export default ToggleComponent;
